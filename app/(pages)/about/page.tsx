'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

const About = () => {
  return (
        <div>
            <Header />

            <div className="w-full flex flex-col items-center text-center px-4 sm:px-8 md:px-16 py-10 md:py-16">
                <p className="text-sm md:text-[25px] font-bold mb-3 md:mb-4">
                Welcome to X-ON Nails
                </p>

                <h1 className="text-[28px] sm:text-[40px] md:text-[56px] font-extrabold leading-tight max-w-[90%] md:max-w-3xl">
                Handmade Press-On Nails,<br className="hidden sm:block" /> Made for You.
                </h1>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-6 md:mt-8 max-w-[95%] sm:max-w-xl md:max-w-3xl">
                Created for nail lovers and professionals alike, X-ON offers handmade press-on nails and carefully selected nail essentials designed with quality, style, and performance in mind. From statement-making nail sets to everyday professional supplies, every X-ON product is chosen to make beautiful nails easier, faster, and more accessible—without compromising on a polished, luxury finish.
                </p>
            </div>

            <Footer />
        </div>
  )
}

export default About
