'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import ProductCard from '@/app/components/ProductCart'
import { productHomePage } from '@/public/fakeData/fakeapi'
import { useMemo } from 'react'

const BundleAndSave = () => {
    const comboProducts = useMemo(
        () => productHomePage.filter((item) => item.category === 'combo'),
        []
    )

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
                        Bundle and Save
                    </h1>
                </div>

                {comboProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {comboProducts.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                ) : (
                    <div className="py-16 text-center">
                        <p className="text-gray-500 text-base font-medium">
                            No combo products yet.
                        </p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    )
}

export default BundleAndSave
