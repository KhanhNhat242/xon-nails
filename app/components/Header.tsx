'use client'

import React from 'react'
// import mainlogo from '../../public/images/IMG_7111.JPG'

const Header = () => {
    return (
        <div>
            <header className="fixed top-0 left-0 w-full z-50 pb-6 bg-white lg:pb-0 shadow-sm">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* lg */}
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="/" title="" className="flex items-center">
                                <img className="h-10 lg:h-14 w-auto object-contain" src="/images/IMG_7111.JPG" alt="main-logo" />
                            </a>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                            <a href="/" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>
                            <a href="/shop" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Shop </a>
                            <a href="/about" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                            <a href="/wholesale-signup" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Wholesale Signup </a>
                            <a href="/sizing-chart" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sizing Chart </a>
                            <a href="/gallery-product" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Gallery Product </a>
                            <a href="/gallery-coming-soon" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Gallery Coming Soon </a>
                            <a href="/blog" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Blog </a>
                            <a href="/contact-us" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact </a>
                        </div>
                    </nav>

                    {/* xs */}
                    <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                        <div className="flow-root">
                            <div className="flex flex-col px-6 -my-2 space-y-1">
                                <a href="/" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>
                                <a href="/shop" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Shop </a>
                                <a href="/about" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                                <a href="/wholesale-signup" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Wholesale Signup </a>
                                <a href="/sizing-chart" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sizing Chart </a>
                                <a href="/gallery-product" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Gallery Product </a>
                                <a href="/gallery-coming-soon" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Gallery Coming Soon</a>
                                <a href="/blog" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Blog </a>
                                <a href="/contact-us" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Div đệm — chiều cao khớp với header, tránh nội dung trang bị header fixed đè lên */}
            <div className="h-[100px] lg:h-[60px]" />
        </div>
    )
}

export default Header
