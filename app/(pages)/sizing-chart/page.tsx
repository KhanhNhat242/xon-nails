'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { Tabs, TabsProps } from 'antd'
import Image from 'next/image'
import { useState } from 'react'

const tabs = [
  { key: 1, label: 'SIZE' },
  { key: 2, label: 'NAIL SHAPES & LENGTH' },
  { key: 3, label: 'LENGTH DETAILS' },
];

const SizingChart = () => {

    const [activeTab, setActiveTab] = useState<number>(1);

    return (
        <div>
            <Header />

            <div className='pb-10 md:pb-20'>
                <img src="./images/sizingchartbanner.png" alt="sizing-chart-banner" className="w-full h-auto" />

                <div className='w-full flex flex-col items-center mt-10 px-4 text-center'>
                <p className='text-[28px] sm:text-[36px] md:text-[45px] font-bold'>Sizing Chart</p>
                <p className='text-sm sm:text-base md:text-[18px] mt-5 font-semibold text-red-500'>NOT SURE WHAT SIZE YOU WEAR?</p>
                <p className='text-sm sm:text-base md:text-[18px] mt-2'>USE OUR EASY NAIL SIZING CHART TO FIND YOUR PERFECT FIT!</p>
                <p className='text-sm sm:text-base md:text-[18px] mt-2 font-semibold'>FIND YOUR SIZE IN JUST A FEW SIMPLE STEPS</p>
                <p className='text-sm sm:text-base md:text-[18px] mt-2'>FOR A COMFORTABLE, NATURAL AND BEAUTIFUL FIT.</p>
                <p className='text-sm sm:text-base md:text-[18px] mt-2 font-semibold'>THE PERFECT NAILS START WITH THE PERFECT SIZE!</p>
                </div>

                <Image
                    src="/images/sizingchartbanner2.png"
                    alt="banner"
                    width={1920}
                    height={1080}
                    sizes="100vw"
                    className="w-full h-auto my-5 px-4 sm:px-10"
                    quality={100}
                    priority
                />

                <div className='w-full px-4 sm:px-10 md:px-20 lg:px-60 pt-10'>
                <div className='flex flex-row flex-wrap items-center justify-center sm:gap-6'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors cursor-pointer whitespace-nowrap ${
                            activeTab === tab.key
                                ? 'bg-black text-white'
                                : 'text-gray-400'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {activeTab === 1 && (
                    <div className='mt-10 text-center sm:text-left'>
                        <p className='text-lg sm:text-[25px] font-semibold'>Size: Thumb-Index-Middle-Ring-Pinky</p>
                        <p className='mt-3'>XS: 3, 6, 5, 7, 9</p>
                        <p className='mt-3'>S: 2, 5, 4, 6, 9</p>
                        <p className='mt-3'>M: 1, 5, 4, 6, 8</p>
                        <p className='mt-3'>L: 0, 4, 3, 5, 7</p>
                        <p className='mt-3 mb-5'>Custom: Pls send us a message with your unique size during check out</p>
                        <img src="/images/sizechart.png" alt="sizechart-img" className="w-full h-auto" />
                    </div>
                )}

                {activeTab === 2 && (
                    <div className='mt-10 text-center sm:text-left'>
                        <p className='text-lg sm:text-[25px] font-semibold mb-3'>Nail Shapes & Length</p>
                        <img src="/images/nailshape.png" alt="sizechart-img" className="w-full h-auto" />
                    </div>
                )}

                {activeTab === 3 && (
                    <div className='mt-10 text-center sm:text-left'>
                        <p className='text-lg sm:text-[25px] font-semibold mb-3'>Length Details</p>
                        <img src="/images/lengthdetail.png" alt="sizechart-img" className="w-full h-auto" />
                    </div>
                )}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SizingChart
