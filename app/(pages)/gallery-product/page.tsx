'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { productHomePage } from '@/public/fakeData/fakeapi'
import { ScissorOutlined, StopOutlined } from '@ant-design/icons';
import React from 'react'

const allSizes = ["S", "M", "L"];

const GalleryProduct = () => {
    return (
        <div>
            <Header />

            <div className='pb-10'>
                <img src="./images/galleryproductbanner.png" alt="gallery-product-banner" className="w-full h-auto" />
                <div className='w-full flex flex-col items-center my-6 sm:my-10 px-4 text-center'>
                    <p className='text-base sm:text-[20px] font-semibold'>Now Selling</p>
                    <p className='text-[28px] sm:text-[36px] md:text-[45px] font-bold'>Product Gallery</p>
                    <p className='text-sm sm:text-base md:text-[18px] font-semibold'>Explore the products currently available in our collection.</p>
                    <a
                        href="/shop"
                        className="mt-4 px-6 py-2 bg-black text-white text-sm sm:text-base font-semibold rounded-full"
                    >
                        SHOP NOW
                    </a>
                </div>
                <div className='px-4 sm:px-6 md:px-10'>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                        {
                            productHomePage.map((item) => (
                                <div key={item.id}>
                                    <img src={item.img} alt="item-img" className="w-full aspect-square object-cover rounded-lg" />

                                    <div className="flex flex-row items-center gap-1.5 sm:gap-2 mt-2">
                                        {/* <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-solid border-gray-300 rounded-md">
                                            <ScissorOutlined className="text-gray-500 text-xs" />
                                        </div> */}

                                        {allSizes.map((size) => {
                                            const inStock = item.size?.includes(size) ?? false;
                                            return inStock ? (
                                                <div
                                                    key={size}
                                                    className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-solid border-blue-400 text-blue-500 text-[10px] sm:text-xs font-semibold rounded-md"
                                                >
                                                    {size}
                                                </div>
                                            ) : (
                                                <div
                                                    key={size}
                                                    className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-solid border-gray-200 rounded-md"
                                                >
                                                    <StopOutlined className="text-gray-300 text-[10px] sm:text-xs" />
                                                </div>
                                            );
                                        })}
                                    </div>
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

export default GalleryProduct
