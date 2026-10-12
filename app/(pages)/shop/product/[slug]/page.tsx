'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { productHomePage } from '@/public/fakeData/fakeapi'
import { InputNumber, message, Rate } from 'antd'
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Ruler, ShieldCheck, ShoppingBag, Truck } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const DetailProduct = () => {
    const params = useParams()
    const router = useRouter()
    const slug = params?.slug

    // Tìm kiếm thông tin chi tiết sản phẩm theo id (slug) trong fakeapi.js
    const product = useMemo(() => {
        if (!slug) return null
        return productHomePage.find((item) => String(item.id) === String(slug))
    }, [slug])

    const [selectedSize, setSelectedSize] = useState<string>('')
    const [quantity, setQuantity] = useState<number>(1)

    // Trạng thái cho form đánh giá (Reviews)
    const [rating, setRating] = useState<number>(5)
    const [reviewContent, setReviewContent] = useState<string>('')
    const [authorName, setAuthorName] = useState<string>('')
    const [authorEmail, setAuthorEmail] = useState<string>('')
    const [saveInfo, setSaveInfo] = useState<boolean>(false)

    // Carousel - You May Also Like (6 random sản phẩm từ toàn bộ danh sách, trừ sản phẩm hiện tại)
    const CARDS_VISIBLE = 4
    const relatedProducts = useMemo(() => {
        const others = productHomePage.filter((p) => String(p.id) !== String(slug))
        // Shuffle & take 6
        const shuffled = [...others].sort(() => Math.random() - 0.5)
        return shuffled.slice(0, 6)
    }, [slug])

    // Triplicate list for seamless infinite illusion
    const carouselItems = useMemo(() => [
        ...relatedProducts,
        ...relatedProducts,
        ...relatedProducts,
    ], [relatedProducts])

    const TOTAL = relatedProducts.length
    // Start at the middle copy so we can scroll both directions
    const [carouselIndex, setCarouselIndex] = useState(TOTAL)
    const [isAnimating, setIsAnimating] = useState(false)
    const animTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        setCarouselIndex(relatedProducts.length)
    }, [relatedProducts])

    // Each card takes up (1/CARDS_VISIBLE) of the visible viewport
    // The track total width = carouselItems.length cards, each card = (100 / carouselItems.length)% of track
    // translateX in % of the track
    const cardWidthPct = 100 / carouselItems.length   // % of full track width per card
    const translateX = -(carouselIndex * cardWidthPct)

    const shiftCarousel = useCallback((dir: 1 | -1) => {
        if (isAnimating || TOTAL === 0) return
        setIsAnimating(true)
        setCarouselIndex((prev) => prev + dir)
        animTimeoutRef.current = setTimeout(() => {
            setIsAnimating(false)
            setCarouselIndex((prev) => {
                if (prev <= 0) return prev + TOTAL
                if (prev >= TOTAL * 2) return prev - TOTAL
                return prev
            })
        }, 420)
    }, [isAnimating, TOTAL])

    useEffect(() => () => {
        if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current)
    }, [])

    // Tự động gán size đầu tiên khi có dữ liệu sản phẩm
    useEffect(() => {
        if (product?.size && product.size.length > 0) {
            setSelectedSize(product.size[0])
        }
    }, [product])

    const handleAddToCart = () => {
        if (!product) return
        const sizeInfo = selectedSize ? ` (Size: ${selectedSize})` : ''
        message.success(`Đã thêm ${quantity} sản phẩm "${product.name}"${sizeInfo} vào giỏ hàng!`)
    }

    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault()
        if (!reviewContent.trim() || !authorName.trim() || !authorEmail.trim()) {
            message.warning('Vui lòng điền đầy đủ các thông tin bắt buộc!')
            return
        }
        message.success('Cảm ơn bạn! Đánh giá của bạn đã được gửi thành công.')
        setReviewContent('')
        if (!saveInfo) {
            setAuthorName('')
            setAuthorEmail('')
        }
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col bg-white">
                <Header />
                <main className="flex-1 max-w-7xl mx-auto px-4 py-20 text-center flex flex-col items-center justify-center">
                    <p className="text-xl font-bold text-gray-800">Product not found!</p>
                    <p className="text-sm text-gray-500 mt-2">Invalid product</p>
                    <button
                        onClick={() => router.push('/shop')}
                        className="mt-6 px-6 py-2.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-gray-800 transition cursor-pointer"
                    >
                        Quay lại Cửa hàng
                    </button>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">

                {/* Bố cục trang chi tiết chia làm 2 phần */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-center">
                    {/* Phần bên trái: width khoảng 40vw là hình ảnh sản phẩm */}
                    <div className="w-full lg:w-[40vw] max-w-[620px] shrink-0">
                        <div className="relative w-full aspect-square overflow-hidden rounded-3xl bg-neutral-50 border border-gray-100 shadow-xs group">
                            <Image
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {product.category === 'best-seller' && (
                                <span className="absolute top-4 left-4 bg-black/85 backdrop-blur-xs text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                                    Best Seller
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Phần bên phải: thông tin chi tiết sản phẩm */}
                    <div className="flex-1 w-full min-w-0 flex flex-col space-y-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                                {product.category === 'essential' ? 'Nail Essentials' : 'Handmade Press-On Nails'}
                            </span>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mt-1.5">
                                {product.name}
                            </h1>
                        </div>

                        {/* Giá tiền */}
                        <div className="flex items-baseline gap-3">
                            <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                                ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                            </span>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Thanh chọn size (nếu sản phẩm có sizes) */}
                        {product.size && product.size.length > 0 && (
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                                        Size: <span className="font-semibold text-neutral-500">{selectedSize}</span>
                                    </span>
                                    <a
                                        href="/sizing-chart"
                                        className="text-xs font-semibold text-neutral-500 hover:text-black flex items-center gap-1 underline underline-offset-4 transition-colors"
                                    >
                                        <Ruler className="w-3.5 h-3.5" /> Sizing Guide
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-2.5">
                                    {product.size.map((size: string) => {
                                        const isSelected = selectedSize === size
                                        return (
                                            <button
                                                key={size}
                                                type="button"
                                                onClick={() => setSelectedSize(size)}
                                                className={`w-12 h-12 rounded-xl font-bold text-sm border transition-all cursor-pointer flex items-center justify-center ${isSelected
                                                    ? 'bg-black text-white border-black shadow-xs ring-2 ring-black/10'
                                                    : 'bg-white text-neutral-700 border-gray-200 hover:border-black'
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Input number để pick số lượng và nút Add to Cart */}
                        <div className="pt-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-2.5">
                                Quantity
                            </span>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                <InputNumber
                                    min={1}
                                    max={99}
                                    value={quantity}
                                    onChange={(val) => setQuantity(val || 1)}
                                    size="large"
                                    className="w-full sm:w-28 text-center rounded-xl"
                                />

                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-black text-white py-3.5 px-8 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-neutral-800 transition-all cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center gap-2 active:scale-[0.99]"
                                >
                                    <ShoppingBag className="w-4 h-4" />
                                    ADD TO CART
                                </button>
                            </div>
                        </div>

                        {/* Điểm nổi bật & cam kết sản phẩm */}
                        <div className="pt-6 border-t border-gray-100 space-y-3">
                            <p>X-ON — Press On. Slay On. Repeat.</p>
                        </div>
                    </div>
                </div>

                {/* Phần Đánh Giá (Reviews) */}
                <div className="mt-16 sm:mt-10 pt-10 border-t border-gray-200">
                    <div className="mb-8">
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Reviews</h2>
                            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">0</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">There are no reviews yet.</p>
                    </div>

                    <div className="border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-10 bg-neutral-50/60 shadow-xs w-full">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                            Be the first to review &ldquo;{product.name}&rdquo;
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 mb-8">
                            Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                        </p>

                        <form onSubmit={handleSubmitReview}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Cột trái: Rating + Review textarea */}
                                <div className="space-y-6 w-full flex flex-col justify-between">
                                    {/* Đánh giá sao (Rating) */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                            Your rating <span className="text-red-500">*</span>
                                        </label>
                                        <Rate value={rating} onChange={setRating} className="text-yellow-400 text-lg" />
                                    </div>

                                    {/* Nội dung đánh giá */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                            Your review <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            rows={7}
                                            required
                                            value={reviewContent}
                                            onChange={(e) => setReviewContent(e.target.value)}
                                            placeholder="Write your review here..."
                                            className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition text-sm text-gray-800 resize-y shadow-2xs"
                                        />
                                    </div>
                                </div>

                                {/* Cột phải: Name, Email, Checkbox & Submit */}
                                <div className="space-y-6 flex flex-col">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={authorName}
                                            onChange={(e) => setAuthorName(e.target.value)}
                                            placeholder="Type your name"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition text-sm text-gray-800 shadow-2xs"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={authorEmail}
                                            onChange={(e) => setAuthorEmail(e.target.value)}
                                            placeholder="Type your email"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition text-sm text-gray-800 shadow-2xs"
                                        />
                                    </div>

                                    {/* Checkbox lưu thông tin */}
                                    <label className="flex items-start gap-3 cursor-pointer select-none text-xs sm:text-sm text-gray-600 !mb-2">
                                        <input
                                            type="checkbox"
                                            checked={saveInfo}
                                            onChange={(e) => setSaveInfo(e.target.checked)}
                                            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                                        />
                                        <span>Save my name, email, and website in this browser for the next time I comment.</span>
                                    </label>

                                    {/* Nút Submit */}
                                    <div className="mt-auto pt-2">
                                        <button
                                            type="submit"
                                            className="w-full px-8 py-3.5 bg-black text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-neutral-800 transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-[0.99]"
                                        >
                                            SUBMIT REVIEW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* You May Also Like Carousel */}
                {relatedProducts.length > 0 && (
                    <div className="mt-16 pt-10 border-t border-gray-200">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-8">You May Also Like</h2>

                        <div className="relative">
                            {/* Prev button */}
                            <button
                                onClick={() => shiftCarousel(-1)}
                                aria-label="Previous"
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Track wrapper */}
                            <div className="overflow-hidden mx-4">
                                <div
                                    className="flex"
                                    style={{
                                        transform: `translateX(${translateX}%)`,
                                        transition: isAnimating ? 'transform 0.42s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none',
                                        // Track must be wide enough so each card = 1/CARDS_VISIBLE of visible area
                                        width: `${(carouselItems.length / CARDS_VISIBLE) * 100}%`,
                                    }}
                                >
                                    {carouselItems.map((item, idx) => (
                                        <div
                                            key={`${item.id}-${idx}`}
                                            style={{ width: `${100 / carouselItems.length}%` }}
                                            className="flex-shrink-0 px-2"
                                        >
                                            <div
                                                onClick={() => router.push(`/shop/product/${item.id}`)}
                                                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                                            >
                                                <div className="relative aspect-square overflow-hidden bg-neutral-50">
                                                    <Image
                                                        src={item.img}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    {item.category === 'best-seller' && (
                                                        <span className="absolute top-2.5 left-2.5 bg-black/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                                            Best Seller
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="p-3">
                                                    <p className="text-xs font-bold text-gray-900 truncate">{item.name}</p>
                                                    <p className="text-xs text-gray-500 mt-1 font-semibold">
                                                        ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Next button */}
                            <button
                                onClick={() => shiftCarousel(1)}
                                aria-label="Next"
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    )
}

export default DetailProduct