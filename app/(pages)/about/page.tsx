'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Image from 'next/image'
import Link from 'next/link'

const pillars = [
  {
    number: '01',
    title: 'Quality',
    copy: 'Handmade press-on nails and carefully selected essentials, made to look polished and last.',
  },
  {
    number: '02',
    title: 'Style',
    copy: 'From statement-making sets to everyday looks, enjoy modern nail artistry without the salon wait.',
  },
  {
    number: '03',
    title: 'Performance',
    copy: 'Beautiful results made easier and faster for nail lovers and professionals alike.',
  },
]

const About = () => {
  return (
    <div>
      <Header />

      <main>
        <section className="relative isolate flex min-h-[360px] items-center overflow-hidden sm:min-h-[400px] lg:min-h-[460px]">
          <Image
            src="/images/galleryproductbanner.png"
            alt="X-ON nail products"
            fill
            priority
            sizes="100vw"
            className="z-0 object-cover"
          />
          <div className="absolute inset-0 z-10 bg-black/55" />

          <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-16">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 sm:text-sm">
                About X-ON
              </p>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Press on.
                <br />
                Slay on. Repeat.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Modern nail artistry, thoughtfully made for effortless beauty.
              </p>
              <Link
                href="/shop"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/85"
              >
                Explore Our Shop
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                Our story
              </p>
              <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                Beauty that fits your life.
              </h2>
            </div>
            <div className="max-w-2xl lg:pt-4">
              <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Created for nail lovers and professionals alike, X-ON offers
                handmade press-on nails and carefully selected nail essentials
                designed with quality, style, and performance in mind. From
                statement-making nail sets to everyday professional supplies,
                every X-ON product is chosen to make beautiful nails easier,
                faster, and more accessible—without compromising on a polished,
                luxury finish.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f6f3] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-xl sm:mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                What we believe
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                The details make the difference.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-lg border border-black/5 bg-white p-5 transition-shadow hover:shadow-lg sm:p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                    {pillar.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 sm:px-10 sm:py-14 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-lg bg-gray-950 px-5 py-8 text-white sm:px-8 sm:py-9 lg:flex-row lg:items-center lg:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                Stay in the know
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                A little more X-ON in your inbox.
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/70 sm:text-base">
                Get updates, launches, and exclusive deals. Sign up for the
                newsletter in the footer, or explore our handmade sets and nail
                essentials.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition-colors hover:bg-white/85"
            >
              Shop X-ON
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default About
