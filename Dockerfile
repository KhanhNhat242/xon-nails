# ---- Dependencies ----
FROM node:22-alpine AS deps
WORKDIR /app

# Cache layer: chỉ copy file cần cho install
COPY package.json package-lock.json ./
COPY prisma ./prisma

RUN npm ci --legacy-peer-deps

# ---- Builder ----
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build args cho NEXT_PUBLIC_* (cần lúc build time)
ARG NEXT_PUBLIC_MINIO_URL
ARG DATABASE_URL

ENV NEXT_PUBLIC_MINIO_URL=$NEXT_PUBLIC_MINIO_URL
ENV DATABASE_URL=$DATABASE_URL

RUN npx prisma generate
RUN npm run build

# Copy background-removal vào public trước khi runner copy
RUN cp -r node_modules/@imgly/background-removal/dist public/background-removal

# ---- Runner ----
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3100

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/generated ./generated

RUN mkdir -p /app/.next/cache/images && chown -R nextjs:nodejs /app/.next/cache

USER nextjs
EXPOSE 3100

CMD ["npm", "run", "start", "--", "-p", "3100"]