'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { CheckCircleOutlined, RightOutlined, StarFilled, SafetyOutlined } from '@ant-design/icons';


const ContactUs = () => {
    return (
        <div>
            <Header />

            <div className='relative w-full'>
                <img src="./images/signupbanner.png" alt="banner" className="w-full h-full object-cover absolute inset-0" />
                <div className="absolute inset-0 bg-black/55" />

                <div className='relative w-full flex flex-col lg:flex-row lg:items-center justify-between gap-10 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 py-10 sm:py-14 lg:py-16'>

                    <div className='w-full lg:w-[58%] flex flex-col text-white'>
                        <p className="text-xs sm:text-sm font-semibold tracking-wide">LALAFOLIE WHOLESALE</p>
                        <p className='text-[26px] sm:text-[34px] lg:text-[44px] font-bold leading-tight sm:leading-none mt-2'>
                            Manufacturer-Direct
                            <br />
                            Nail & Beauty Supply
                        </p>
                        <p className="text-yellow-500 text-lg sm:text-[22px] lg:text-[28px] mt-4 sm:mt-6">Now Shipping Nationwide Across the US</p>
                        <p className="text-sm sm:text-base lg:text-[18px] leading-snug text-gray-200 mt-2 max-w-xl">
                            Professional-grade nail products delivered coast to coast. Get your custom wholesale quote in 24 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 sm:mt-8">
                            <div className="bg-[#fde9c8] text-black rounded-xl p-4 sm:p-5 flex-1">
                                <p className="font-bold flex text-lg sm:text-[22px] items-center gap-2">
                                    <span>✨</span> Handmade Grip-X Nails
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg leading-snug mt-2">
                                    Premium handmade nails, individually crafted with professional gel and acrylic powder for a true salon finish.
                                </p>
                                <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg mt-3 space-y-1">
                                    <li>Sharp, trend-forward designs for the US market</li>
                                    <li>Elegant rhinestones & charms</li>
                                    <li>Premium glossy top coat</li>
                                    <li>1,000+ styles, from everyday to luxury</li>
                                    <li>In stock and ready to ship in the US</li>
                                </ul>
                            </div>

                            <div className="bg-[#fde9c8] text-black rounded-xl p-4 sm:p-5 flex-1">
                                <p className="font-bold text-lg sm:text-[22px] flex items-center gap-2">
                                    <span>💧</span> Cold Gel Glue
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg leading-snug mt-2">
                                    A next-generation nail adhesive built for handmade nail sets, Lalafolie&apos;s exclusive formula.
                                </p>
                                <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg mt-3 space-y-1">
                                    <li>No UV light needed, air-dries naturally</li>
                                    <li>TPO-free, safe for natural nails</li>
                                    <li>Strong hold, lasts up to 2 weeks</li>
                                    <li>No filing or lamp, ready in 10 minutes</li>
                                    <li>MSDS available, made in the USA</li>
                                    <li>Cost-effective and reusable</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 my-6 sm:my-10 text-sm">
                            <p className="flex text-sm sm:text-lg leading-none items-center gap-2">
                                <CheckCircleOutlined className="!text-yellow-500" />
                                Manufacturer-direct pricing
                            </p>
                            <p className="flex text-sm sm:text-lg leading-none items-center gap-2">
                                <CheckCircleOutlined className="!text-yellow-500" />
                                Free US shipping on orders over $300+
                            </p>
                            <p className="flex text-sm sm:text-lg leading-none items-center gap-2">
                                <CheckCircleOutlined className="!text-yellow-500" />
                                Dedicated wholesale rep
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                            <a href="/wholesale-signup" className="flex items-center justify-center gap-2 bg-black text-white text-sm sm:text-lg font-semibold px-4 sm:px-5 py-2 rounded-[10px]">
                                Get my wholesale quote
                                <RightOutlined />
                            </a>
                            <a href="tel:+3522814104" className="flex items-center justify-center gap-2 border-2 border-solid border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500 text-sm sm:text-lg font-semibold px-4 sm:px-5 py-2 rounded-[10px]">
                                Call (352) 281-4104
                                <RightOutlined />
                            </a>
                            <a href="tel:+3465177888" className="flex items-center justify-center gap-2 border-2 border-solid border-white text-white hover:text-[#000] hover:bg-white text-sm sm:text-lg font-semibold px-4 sm:px-5 py-2 rounded-[10px]">
                                (346) 517-7888
                                <RightOutlined />
                            </a>
                        </div>

                        <div className="flex flex-row gap-6 sm:gap-8 mt-6 text-sm">
                            <p className="flex text-sm sm:text-lg items-center gap-2">
                                <StarFilled className="!text-yellow-500" />
                                1000+ happy salons
                            </p>
                            <p className="flex text-sm sm:text-lg items-center gap-2">
                                <SafetyOutlined className="!text-yellow-500" />
                                Quality guaranteed
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[36%] bg-white border-2 border-solid border-black rounded-2xl p-5 sm:p-8">
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-6">CONTACT LALAFOLIE</p>

                        <input
                            type="text"
                            placeholder='FIRST & LAST NAME'
                            className="w-full border border-solid border-gray-300 rounded-md px-4 py-3 text-sm mb-4 outline-none focus:border-black"
                        />
                        <input
                            type="text"
                            placeholder='EMAIL ADDRESS'
                            className="w-full border border-solid border-gray-300 rounded-md px-4 py-3 text-sm mb-4 outline-none focus:border-black"
                        />
                        <input
                            type="text"
                            placeholder='ORDER NUMBER'
                            className="w-full border border-solid border-gray-300 rounded-md px-4 py-3 text-sm mb-4 outline-none focus:border-black"
                        />
                        <textarea
                            placeholder='TELL US ABOUT YOUR QUESTION, CONCERN OR ISSUE'
                            rows={5}
                            className="w-full border border-solid border-gray-300 rounded-md px-4 py-3 text-sm mb-5 outline-none focus:border-black resize-y"
                        />

                        <button className="w-full sm:w-auto bg-black text-white text-sm font-semibold px-6 py-3 rounded-md">
                            SEND MESSAGE
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ContactUs
