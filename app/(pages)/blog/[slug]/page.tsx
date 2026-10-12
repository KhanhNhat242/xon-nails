'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { blog } from '@/public/fakeData/fakeapi'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useMemo } from 'react'

const benefits = [
  {
    title: 'Salon-level results',
    points: [
      'Hand-crafted by professional nail artists',
      'High-gloss finish that rivals any salon',
    ],
  },
  {
    title: 'Safe & easy to use',
    points: [
      'TPO-free Cold-Gel — no UV lamp needed',
      'Gentle on natural nails, MSDS-certified',
    ],
  },
  {
    title: 'Built to last & save',
    points: [
      'Holds for 2+ weeks with a firm press',
      'Reusable sets — better value per wear',
    ],
  },
]

const steps = [
  {
    step: '01',
    title: 'Prep your natural nails',
    desc: 'Gently push back cuticles and lightly buff the surface for best adhesion.',
    img: '/images/products/p4.JPG',
  },
  {
    step: '02',
    title: 'Apply Cold-Gel adhesive',
    desc: 'Place a small dot of Cold-Gel on your nail and on the GripX press-on.',
    img: '/images/products/p5.JPG',
  },
  {
    step: '03',
    title: 'Press on handmade nails',
    desc: 'Align the nail and press firmly for 20 seconds. No UV lamp needed.',
    img: '/images/products/p6.JPG',
  },
  {
    step: '04',
    title: 'Done in 10 minutes',
    desc: 'Wear for 2+ weeks. Remove gently by soaking in warm water when ready.',
    img: '/images/products/p7.JPG',
  },
]

const audience = [
  'Busy professionals who want a polished look without losing half a day at the salon.',
  'Nail enthusiasts who love rotating styles weekly without the damage of repeated gel removal.',
  'Brides & event-goers who need a reliable, long-lasting manicure for a special occasion.',
  'Anyone looking for a cleaner, gentler alternative to harsh salon chemicals.',
]

const DetailBlog = () => {
  const params = useParams()
  const slug = params?.slug

  const post = useMemo(() => {
    if (!slug) return null
    return blog.find((b) => String(b.id) === String(slug)) ?? null
  }, [slug])

  const paragraphs = useMemo(() => {
    if (!post?.content) return []
    return post.content
      .split(/(?<=\.)\s+(?=[A-Z“"])/)
      .reduce<string[]>((acc, sentence) => {
        const last = acc[acc.length - 1]
        if (!last || last.split('.').length > 2) {
          acc.push(sentence)
        } else {
          acc[acc.length - 1] = `${last} ${sentence}`
        }
        return acc
      }, [])
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
          <p className="text-xl font-bold text-neutral-900">Post not found</p>
          <Link
            href="/blog"
            className="mt-6 px-6 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition"
          >
            Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Header />

      <main className="flex-1 w-full">
        {/* Article header */}
        <section className="w-full px-4 sm:px-6 pt-8 sm:pt-12 pb-8">
          <div className="max-w-3xl mx-auto">

            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-400">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="text-neutral-300">·</span>
              <span>X-ON Journal</span>
            </div>

            {post.excerpt && (
              <p className="mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed border-l-2 border-neutral-900 pl-4">
                {post.excerpt}
              </p>
            )}
          </div>
        </section>

        {/* Hero image */}
        <section className="w-full px-4 sm:px-6 pb-10">
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden bg-neutral-100 aspect-[16/9] sm:aspect-[2/1]">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Body */}
        <section className="w-full px-4 sm:px-6 pb-14">
          <div className="max-w-3xl mx-auto space-y-5">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-[15px] sm:text-base text-neutral-700 leading-[1.8]">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Old way vs solution */}
        <section className="w-full bg-neutral-50 border-y border-neutral-100 py-14 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl border border-neutral-200 p-7 sm:p-8">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight mb-5">
                The old way no longer works
              </h2>
              <ul className="space-y-4">
                {[
                  'Salon appointments eat 2+ hours — booking, waiting, and drying time included.',
                  'Cheap press-ons look fake within days and pop off at the worst moments.',
                  'UV lamps for gel sets can stress skin around the nails with repeated use.',
                  'Low-grade adhesives and tools deliver inconsistent, unprofessional finishes.',
                ].map((point) => (
                  <li
                    key={point}
                    className="text-sm text-neutral-600 leading-relaxed pl-4 border-l-2 border-neutral-200"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-900 text-white rounded-2xl p-7 sm:p-8">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight mb-5">
                The X-ON solution
              </h2>
              <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                <p>
                  <strong className="text-white font-semibold">GripX Nails</strong> are
                  handmade press-ons crafted nail by nail with professional-grade gel and
                  premium acrylic powder — salon standards, ready in minutes at home, no UV
                  lamp required.
                </p>
                <p>
                  Our exclusive{' '}
                  <strong className="text-white font-semibold">Cold-Gel Adhesive</strong>{' '}
                  bonds in under 10 minutes, holds for 2+ weeks, and uses a TPO-free formula
                  gentle on natural nails. MSDS-certified, made in the USA, and designed to
                  be reusable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden bg-neutral-100 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <img
                src="/images/products/p1.JPG"
                alt="GripX product showcase"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6">
                Why GripX stands apart
              </h2>
              <div className="space-y-6">
                {benefits.map((item, index) => (
                  <div key={item.title} className="border-t border-neutral-200 pt-5">
                    <p className="text-xs font-semibold tracking-[0.14em] text-neutral-400 uppercase mb-1.5">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-base font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {item.points.map((point) => (
                        <li key={point} className="text-sm text-neutral-600 leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="w-full bg-neutral-50 border-y border-neutral-100 py-14 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                Done in 10 minutes
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Four simple steps to a flawless finish.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {steps.map((s) => (
                <div key={s.step} className="flex flex-col">
                  <div className="relative rounded-xl overflow-hidden bg-neutral-200 aspect-[4/3] mb-3">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white/95 text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wider">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 leading-snug mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience + CTA */}
        <section className="w-full py-14 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-6">
                Who this is perfect for
              </h2>
              <ul className="space-y-4">
                {audience.map((point, i) => (
                  <li
                    key={point}
                    className="flex gap-4 text-sm text-neutral-600 leading-relaxed"
                  >
                    <span className="shrink-0 text-xs font-bold text-neutral-400 pt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-900 text-white rounded-2xl p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase mb-3">
                Designed with professionals in mind
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight mb-4">
                Every set meets salon standards — not just looks like it.
              </h2>
              <p className="text-sm text-white/60 leading-relaxed mb-8">
                X-ON works with professional nail artists to develop every GripX design —
                delivering at home what you&apos;d pay hundreds for in a top salon.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-neutral-900 text-sm font-semibold rounded-xl hover:bg-neutral-100 transition-colors"
              >
                Shop GripX
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default DetailBlog
