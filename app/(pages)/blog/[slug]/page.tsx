'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { blog } from '@/public/fakeData/fakeapi'
import { ArrowLeft, ShoppingBag } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React, { useMemo } from 'react'

const DetailBlog = () => {
    const params = useParams()
    const router = useRouter()
    const slug = params?.slug

    const post = useMemo(() => {
        if (!slug) return null
        return blog.find((b) => String(b.id) === String(slug)) ?? null
    }, [slug])

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col bg-white">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
                    <p className="text-xl font-bold text-gray-800">Post not found!</p>
                    <button
                        onClick={() => router.push('/blog')}
                        className="mt-6 px-6 py-2.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-gray-800 transition cursor-pointer"
                    >
                        Back to Blog
                    </button>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Header />

            <main className="flex-1 w-full">

                {/* ── 1. HERO ──────────────────────────────────────────────── */}
                <section className="w-full bg-gradient-to-br from-neutral-950 via-neutral-800 to-neutral-900 text-white py-14 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <button
                            onClick={() => router.push('/blog')}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white mb-6 transition cursor-pointer"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
                        </button>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-3">X-ON Journal</p>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
                            Salon-Quality Beauty,{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-400">
                                Reimagined for Modern Life
                            </span>
                        </h1>
                        <p className="text-base text-white/60 font-medium mb-4">
                            Luxury results. Less time. Smarter technology.
                        </p>
                        <p className="text-sm text-white/45 leading-relaxed max-w-2xl mx-auto">
                            The beauty industry has always demanded sacrifice — hours at the salon, harsh chemicals, and steep bills. But the rules are changing fast. A new generation of smart, handcrafted solutions is delivering professional results at home, on your schedule, without compromise.
                        </p>
                    </div>
                </section>

                {/* ── 2. ẢNH LỚN FULL-WIDTH ────────────────────────────────── */}
                <section className="w-full" style={{ height: '400px' }}>
                    <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </section>

                {/* ── 3 + 4. OLD WAY + SOLUTION — 2 cột song song ─────────── */}
                <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* ❌ The Old Way */}
                        <div className="bg-red-50 border border-red-100 rounded-2xl p-7">
                            <h2 className="text-xl font-extrabold text-gray-900 mb-5 flex items-center gap-2">
                                <span>❌</span> The Old Way No Longer Works
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    'Salon appointments eat 2+ hours of your day — booking, waiting, and drying time included.',
                                    'Cheap press-on nails look fake within days, popping off at the worst moments.',
                                    'UV lamps required for gel sets can damage the skin around your nails with repeated exposure.',
                                    'Low-grade adhesives and tools deliver inconsistent, unprofessional finishes.',
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold">✕</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ✅ The Solution */}
                        <div className="bg-neutral-950 text-white rounded-2xl p-7">
                            <h2 className="text-xl font-extrabold mb-5 flex items-center gap-2">
                                <span>✅</span> The X-ON Solution
                            </h2>
                            <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                                <p>
                                    <strong className="text-white">GripX Nails</strong> are fully handmade press-on nails crafted nail by nail using professional-grade gel and premium acrylic powder — finished to salon standards, but designed to go on in minutes at home, no UV lamp required.
                                </p>
                                <p>
                                    Our exclusive <strong className="text-white">Cold-Gel Adhesive</strong> bonds in under 10 minutes, holds for 2+ weeks, and uses a TPO-free formula that's gentle on natural nails. MSDS-certified, made in the USA, and designed to be reusable.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 5. ẢNH SẢN PHẨM + 6. LỢI ÍCH — layout ngang ───────── */}
                <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        {/* Ảnh */}
                        <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: '380px' }}>
                            <img
                                src="/images/products/p1.JPG"
                                alt="GripX product showcase"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* 3 lợi ích xếp dọc */}
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-extrabold text-gray-900 tracking-tight mb-1">
                                Why GripX Stands Apart
                            </h2>
                            {[
                                {
                                    icon: '✨',
                                    title: 'Salon-Level Results',
                                    checks: ['Hand-crafted by professional nail artists', 'High-gloss finish that rivals any salon'],
                                },
                                {
                                    icon: '🛡️',
                                    title: 'Safe & Easy to Use',
                                    checks: ['TPO-free Cold-Gel — no UV lamp needed', 'Gentle on natural nails, MSDS-certified'],
                                },
                                {
                                    icon: '⏱️',
                                    title: 'Built to Last & Save',
                                    checks: ['Holds for 2+ weeks with a firm press', 'Reusable sets — better value per wear'],
                                },
                            ].map((col) => (
                                <div key={col.title} className="flex gap-4 bg-neutral-50 border border-gray-100 rounded-xl p-4">
                                    <span className="text-2xl flex-shrink-0">{col.icon}</span>
                                    <div>
                                        <h3 className="text-sm font-extrabold text-gray-900 mb-1.5">{col.title}</h3>
                                        <ul className="space-y-1">
                                            {col.checks.map((c) => (
                                                <li key={c} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <span className="text-emerald-500 font-bold flex-shrink-0">✔</span>
                                                    {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 7. 4 BƯỚC SỬ DỤNG ────────────────────────────────────── */}
                <section className="w-full bg-gray-50 py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-xl sm:text-2xl font-extrabold text-center text-gray-900 mb-1 tracking-tight">
                            Done in 10 Minutes — Here's How
                        </h2>
                        <p className="text-center text-xs text-gray-400 mb-8">Four simple steps to a flawless finish.</p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { step: '01', title: 'Prep your natural nails', desc: 'Gently push back cuticles and lightly buff the surface for best adhesion.', img: '/images/products/p4.JPG' },
                                { step: '02', title: 'Apply Cold-Gel adhesive', desc: 'Place a small dot of Cold-Gel on your nail and on the GripX press-on.', img: '/images/products/p5.JPG' },
                                { step: '03', title: 'Press on handmade nails', desc: 'Align the nail and press firmly for 20 seconds. No UV lamp needed.', img: '/images/products/p6.JPG' },
                                { step: '04', title: 'Done in 10 minutes', desc: 'Wear for 2+ weeks. Remove gently by soaking in warm water when ready.', img: '/images/products/p7.JPG' },
                            ].map((s) => (
                                <div key={s.step} className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="relative" style={{ aspectRatio: '4/3' }}>
                                        <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                                        <span className="absolute top-2.5 left-2.5 bg-black text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full tracking-widest">
                                            {s.step}
                                        </span>
                                    </div>
                                    <div className="p-4 flex flex-col gap-1.5">
                                        <h3 className="text-xs font-extrabold text-gray-900 leading-snug">{s.title}</h3>
                                        <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 8. WHO IT'S FOR + 9. CTA — 2 cột song song ──────────── */}
                <section className="w-full bg-neutral-950 text-white py-12 px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Who It's For */}
                        <div>
                            <h2 className="text-xl font-extrabold mb-6 tracking-tight">Who This Is Perfect For</h2>
                            <ul className="space-y-4">
                                {[
                                    'Busy professionals who want a polished look without losing half a day at the salon.',
                                    'Nail enthusiasts who love rotating styles weekly without the damage of repeated gel removal.',
                                    'Brides & event-goers who need a reliable, long-lasting manicure for a special occasion.',
                                    'Anyone allergic to harsh salon chemicals looking for a cleaner, gentler alternative.',
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold">
                                            {i + 1}
                                        </span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA block */}
                        <div className="flex flex-col gap-5 bg-white/5 border border-white/10 rounded-2xl p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">Designed with Professionals in Mind</p>
                            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
                                Every set meets{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-400">
                                    salon standards
                                </span>
                                , not just looks like it.
                            </h2>
                            <p className="text-sm text-white/50 leading-relaxed">
                                X-ON works with professional nail artists to develop every GripX design — delivering at home what you'd pay hundreds for in a top salon.
                            </p>
                            <p className="text-xs text-white/30 italic">
                                "Discover a smarter way to wear luxury nails — without the salon price tag."
                            </p>
                            <button
                                onClick={() => router.push('/shop')}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-extrabold uppercase tracking-widest rounded-full hover:bg-gray-100 transition-all cursor-pointer shadow-lg active:scale-[0.98] w-fit"
                            >
                                <ShoppingBag className="w-4 h-4" />
                                Shop GripX
                            </button>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default DetailBlog
