'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { comingSoonProduct } from '@/public/fakeData/fakeapi'
import React, { useState } from 'react'

const tabs = [
  { key: 'cn', label: 'Christmas Nail Collection' },
  { key: 'fn', label: 'Fall Nail Collection' },
  { key: 'hn', label: 'Halloween Nail Collection' },
  { key: 'nf', label: 'NEW FAVOURITE COLLECTION' },
];

const GalleryComingSoon = () => {

  const [activeTab, setActiveTab] = useState<string>('cn');

  const filteredProducts = comingSoonProduct.filter((item) => item.type === activeTab);

  return (
        <div>
          <Header />

          <div className='py-10 sm:py-14 md:py-20'>
            <div className='w-full flex flex-row flex-wrap items-center justify-center gap-y-2 gap-x-1 sm:gap-x-3 px-4 pb-6 sm:pb-8'>
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-[15px] font-semibold tracking-wide transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'border border-solid border-black text-black'
                      : 'border border-solid border-transparent text-gray-400'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className='px-4 sm:px-6 md:px-10'>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {
                  filteredProducts.map((item, index) => (
                    <div key={`${item.type}-${index}`}>
                      <img
                        src={item.img}
                        alt={`${item.type}-product-img`}
                        className="w-full aspect-square object-cover rounded-lg transition-shadow duration-200 hover:shadow-xl"
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <Footer />
      </div>
  )
}

export default GalleryComingSoon
