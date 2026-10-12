'use client'

import { Product } from '@/type'
import Link from 'next/link'

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const priceLabel =
        typeof product.price === 'number' ? product.price.toFixed(2) : product.price

    return (
        <Link
            href={`/shop/product/${product.id}`}
            className="group flex flex-col justify-between bg-white border border-gray-100 rounded-2xl p-3 shadow-xs cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
            <div>
                <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-50">
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.category === 'best-seller' && (
                        <span className="absolute top-2 left-2 bg-black/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Best Seller 
                        </span>
                    )}
                </div>

                <div className="mt-3">
                    <h4
                        className="text-lg font-semibold text-gray-900 group-hover:text-black line-clamp-1"
                        title={product.name}
                    >
                        {product.name}
                    </h4>
                </div>
            </div>

            <div className="pt-2.5 border-t border-gray-50 flex items-center justify-between">
                <p className="text-base font-bold text-gray-900">${priceLabel}</p>
            </div>
        </Link>
    )
}

export default ProductCard
