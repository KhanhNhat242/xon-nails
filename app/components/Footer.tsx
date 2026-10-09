import React from 'react'
import { InstagramOutlined, TikTokOutlined, FacebookOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <section className="border-t border-solid border-black py-10 bg-gray-50 sm:pt-16 lg:pt-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <p className="text-base leading-none text-[20px] font-bold">X-ON — Press On. Slay On. Repeat.</p>
                        <a href="tel:+16892128888" className="block text-base leading-relaxed text-gray-600 mt-2 hover:underline">
                            Phone: 689-212-8888
                        </a>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Brand</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="/shop" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Shop </a>
                            </li>
                            <li>
                                <a href="/about" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                            </li>
                            <li>
                                <a href="/wholesale-signup" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Wholesale Signup </a>
                            </li>
                            {/* <li>
                            <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Bundle and Save </a>
                        </li> */}
                            <li>
                                <a href="/gallery-product" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Gallery Product </a>
                            </li>
                            <li>
                                <a href="/blog" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Blog </a>
                            </li>
                            <li>
                                <a href="/contact-us" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact Us </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Social</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> <InstagramOutlined className='mr-2' /> Instagram </a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">  <TikTokOutlined className='mr-2' /> Tiktok </a>
                            </li>
                            <li>
                                <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">  <FacebookOutlined className='mr-2' /> Facebook </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">X-On VIP</p>
                        <p className='mt-6'>Sign up for emails and texts to be the first to know about exclusive deals, launches & more!</p>
                        <form action="#" method="POST" className="mt-6">
                            <div>
                                <label className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>

                            <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Subscribe</button>
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <p className="text-sm text-center text-gray-600">© Copyright 2021, All Rights Reserved by Postcraft</p>
            </div>
        </section>
    )
}

export default Footer
