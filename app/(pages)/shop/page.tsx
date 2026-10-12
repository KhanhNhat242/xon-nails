'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { Pagination, Slider } from 'antd'
import Search from 'antd/es/input/Search'
import { productHomePage } from '@/public/fakeData/fakeapi'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

const ITEMS_PER_PAGE = 16

const categories = [
    { key: 'all', label: 'ALL PRODUCTS' },
    { key: 'best-seller', label: 'BEST SELLERS' },
    { key: 'nails', label: 'HANDMADE PRESS-ON NAILS' },
    { key: 'essential', label: 'NAIL ESSENTIALS' },
]

const shapes = [
    { name: 'ALMOND', img: '/images/shapes/almond.png' },
    { name: 'COFFIN', img: '/images/shapes/coffin.png' },
    { name: 'OVAL', img: '/images/shapes/oval.png' },
    { name: 'ROUND', img: '/images/shapes/round.png' },
    { name: 'SQUARE', img: '/images/shapes/square.png' },
    { name: 'STILETTO', img: '/images/shapes/stiletto.png' },
]

const Shop = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 250])
    const [activeCategory, setActiveCategory] = useState('all')
    const [selectedShape, setSelectedShape] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const router = useRouter()

    const filteredProducts = useMemo(() => {
        return productHomePage.filter((item) => {
            const matchesCategory =
                activeCategory === 'all' || item.category === activeCategory

            const matchesSearch = item.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase().trim())

            const matchesPrice =
                item.price >= priceRange[0] && item.price <= priceRange[1]

            return matchesCategory && matchesSearch && matchesPrice
        })
    }, [searchTerm, priceRange, activeCategory])

    // Reset về trang 1 khi thay đổi bất kỳ bộ lọc nào
    useEffect(() => {
        setTimeout(() => {
            setCurrentPage(1)
        }, 100)
    }, [searchTerm, priceRange, activeCategory, selectedShape])

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE
        return filteredProducts.slice(start, start + ITEMS_PER_PAGE)
    }, [filteredProducts, currentPage])

    const handleResetFilters = () => {
        setSearchTerm('')
        setPriceRange([0, 250])
        setActiveCategory('all')
        setSelectedShape('')
        setCurrentPage(1)
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* Bố cục trang chia thành 2 phần */}
            <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
                    {/* Phần bên trái: bám dính tự động bên trái (sticky/fixed) khi cuộn */}
                    <aside className="w-full md:w-72 xl:w-80 shrink-0 md:sticky md:top-[100px] md:max-h-[calc(100vh-120px)] self-start z-20">
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs space-y-6 overflow-y-auto">
                            <div>
                                <Search
                                    placeholder="Search..."
                                    allowClear
                                    enterButton
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onSearch={(val) => setSearchTerm(val)}
                                    className="w-full"
                                />
                            </div>

                            <hr className="border-gray-100" />

                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                                        FILTER BY PRICE
                                    </h3>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-800">
                                        ${priceRange[0]} - ${priceRange[1]}
                                    </span>
                                </div>

                                <Slider
                                    range
                                    min={0}
                                    max={250}
                                    value={priceRange}
                                    onChange={(value) => setPriceRange(value as [number, number])}
                                    tooltip={{ formatter: (val) => `$${val}` }}
                                />

                                <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
                                    <span>$0</span>
                                    <span>$250</span>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Phân loại hình dạng (shapes) ở dưới filter giá */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                                        NAIL SHAPES
                                    </h3>
                                    {selectedShape && (
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                                            {selectedShape}
                                        </span>
                                    )}
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    {shapes.map((shape) => {
                                        const isSelected = selectedShape === shape.name
                                        return (
                                            <button
                                                key={shape.name}
                                                type="button"
                                                onClick={() => setSelectedShape(isSelected ? '' : shape.name)}
                                                className={`group flex flex-col items-center justify-center p-2 rounded-xl border transition-all cursor-pointer ${isSelected
                                                    ? 'border-black bg-gray-50 shadow-xs ring-1 ring-black/10'
                                                    : 'border-gray-200 bg-white hover:border-gray-400 hover:bg-gray-50/50'
                                                    }`}
                                            >
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                                    <img
                                                        src={shape.img}
                                                        alt={shape.name}
                                                        className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110"
                                                    />
                                                </div>
                                                <span
                                                    className={`mt-1 text-[10px] font-bold tracking-tight uppercase text-center transition-colors ${isSelected ? 'text-black' : 'text-gray-500 group-hover:text-black'
                                                        }`}
                                                >
                                                    {shape.name}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {(searchTerm || priceRange[0] > 0 || priceRange[1] < 250 || activeCategory !== 'all' || selectedShape) && (
                                <button
                                    onClick={handleResetFilters}
                                    className="w-full py-2.5 px-3 text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors cursor-pointer"
                                >
                                    Reset
                                </button>
                            )}
                        </div>
                    </aside>

                    {/* Phần bên phải: tab phân loại sản phẩm ở trên và danh sách 4 phần bằng nhau ở dưới */}
                    <section className="flex-1 w-full min-w-0">
                        {/* Thanh tab phân loại sản phẩm ở trên */}
                        <div className="flex flex-row flex-wrap items-center justify-center lg:justify-center gap-2 sm:gap-3 pb-6 border-b border-gray-100">
                            {categories.map((tab) => {
                                const isActive = activeCategory === tab.key
                                return (
                                    <button
                                        key={tab.key}
                                        onClick={() => setActiveCategory(tab.key)}
                                        className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${isActive
                                            ? 'bg-black text-white shadow-xs'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                )
                            })}
                        </div>


                        {/* Danh sách sản phẩm chia thành 4 phần bằng nhau */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
                            {paginatedProducts.length > 0 ? (
                                paginatedProducts.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group flex flex-col justify-between bg-white border border-gray-100 rounded-2xl p-3 shadow-xs cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                        onClick={() => router.push(`/shop/product/${item.id}`)}
                                    >
                                        <div>
                                            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-50">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                {item.category === 'best-seller' && (
                                                    <span className="absolute top-2 left-2 bg-black/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                        Best Seller
                                                    </span>
                                                )}
                                            </div>

                                            <div className="mt-3">
                                                <h4
                                                    className="text-sm font-semibold text-gray-900 group-hover:text-black line-clamp-1"
                                                    title={item.name}
                                                >
                                                    {item.name}
                                                </h4>

                                                {item.size && item.size.length > 0 && (
                                                    <div className="flex gap-1 mt-2">
                                                        {item.size.map((sz: string) => (
                                                            <span
                                                                key={sz}
                                                                className="text-[10px] font-medium px-1.5 py-0.5 border border-gray-200 rounded text-gray-500"
                                                            >
                                                                {sz}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-3 pt-2.5 border-t border-gray-50 flex items-center justify-between">
                                            <p className="text-base font-bold text-gray-900">
                                                ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-16 text-center">
                                    <p className="text-gray-500 text-base font-medium">
                                        Product not found.
                                    </p>
                                    <button
                                        onClick={handleResetFilters}
                                        className="mt-4 px-5 py-2 bg-black text-white text-xs font-semibold rounded-full hover:bg-gray-800 transition cursor-pointer"
                                    >
                                        Reset Filter
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Thanh phân trang Pagination (16 sản phẩm / trang) */}
                        {filteredProducts.length > ITEMS_PER_PAGE && (
                            <div className="flex justify-center items-center mt-10 pt-6 border-t border-gray-100">
                                <Pagination
                                    current={currentPage}
                                    total={filteredProducts.length}
                                    pageSize={ITEMS_PER_PAGE}
                                    onChange={(page) => {
                                        setCurrentPage(page)
                                        window.scrollTo({ top: 0, behavior: 'smooth' })
                                    }}
                                    showSizeChanger={false}
                                />
                            </div>
                        )}
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Shop
