'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const WholesaleSignupForm = dynamic(
  () => import('@/components/ui/WholesaleSignupForm'),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-12 bg-gray-100 rounded-xl" />
        <div className="h-12 bg-gray-100 rounded-xl" />
        <div className="h-12 bg-gray-100 rounded-xl" />
        <div className="h-32 bg-gray-100 rounded-xl" />
      </div>
    ),
  }
)

const WholesaleSignup = () => {
  return (
    <div>
      <Header />

      <div className="w-full relative">
        <Image
          src="/images/signupbanner.png"
          alt="signup-banner"
          width={1920}
          height={1080}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />

        <div className="w-full md:w-[60%] lg:w-[42%] mx-auto md:absolute md:top-1/2 md:right-8 lg:right-16 md:-translate-y-1/2 px-4 md:px-0 py-8 md:py-0">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] border border-gray-100 p-6 sm:p-8">
            <div className="text-center mb-7">
              <h1 className="mt-3 text-2xl md:text-[28px] font-bold tracking-tight text-neutral-900">
                Register
              </h1>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Join X-ON wholesale and get manufacturer-direct access to handmade nails & essentials.
              </p>
            </div>

            <WholesaleSignupForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default WholesaleSignup