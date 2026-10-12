'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Link from 'next/link'
import React from 'react'

const pillars = [
  {
    title: 'Quality',
    copy: 'Handmade press-on nails and carefully selected essentials built to look polished and last.',
  },
  {
    title: 'Style',
    copy: 'From statement-making sets to everyday looks — modern nail artistry without the salon wait.',
  },
  {
    title: 'Performance',
    copy: 'Designed for nail lovers and professionals who want beautiful results that are easier and faster.',
  },
]

const About = () => {
  return (
    <div>
      <Header />

      <div className="w-full flex flex-col items-center text-center px-4 sm:px-8 md:px-16 py-10 md:py-16">
        <p className="text-sm md:text-[25px] font-bold mb-3 md:mb-4 tracking-wide">
          X-ON
        </p>

        <h1 className="text-[28px] sm:text-[40px] md:text-[56px] font-extrabold leading-tight max-w-[90%] md:max-w-4xl">
          Press On. Slay On. Repeat.
        </h1>

        <p className="text-base md:text-xl text-gray-700 mt-4 md:mt-6 max-w-[95%] sm:max-w-xl md:max-w-2xl">
          X-ON is where modern nail artistry meets effortless beauty.
        </p>

        <p className="text-sm md:text-base leading-relaxed mt-6 md:mt-8 max-w-[95%] sm:max-w-xl md:max-w-3xl">
          Created for nail lovers and professionals alike, X-ON offers handmade
          press-on nails and carefully selected nail essentials designed with
          quality, style, and performance in mind. From statement-making nail
          sets to everyday professional supplies, every X-ON product is chosen
          to make beautiful nails easier, faster, and more accessible—without
          compromising on a polished, luxury finish.
        </p>
      </div>

      <div className="w-full px-4 sm:px-8 md:px-16 pb-10 md:pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 text-center">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <p className="text-lg md:text-xl font-bold mb-2">{pillar.title}</p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {pillar.copy}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-gray-200 bg-gray-50 px-4 sm:px-8 md:px-16 py-10 md:py-14">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <p className="text-lg md:text-2xl font-bold mb-2">Stay in the know</p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-xl">
            Get X-ON updates, launches, and exclusive deals — sign up for the
            newsletter in the footer below, or start shopping our handmade sets
            and nail essentials.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Shop X-ON
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
