'use client'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { blog } from '@/public/fakeData/fakeapi'
import { ArrowRight, CalendarDays, Tag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Blog = () => {

    const router = useRouter()

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* Hero Banner */}
            <div className="relative w-full overflow-hidden" style={{ height: '320px' }}>
                <img
                    src="/images/galleryproductbanner.png"
                    alt="Blog banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70 mb-3">X-ON Blog</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
                        Stories &amp; Tips
                    </h1>
                    <p className="mt-3 text-base text-white/80 max-w-md">
                        Nail inspiration, how-to guides, and the latest trends from X-ON.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                {blog.length === 0 ? (
                    <p className="text-center text-gray-400 py-20">No posts yet. Check back soon!</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blog.map((item) => (
                            <article
                                key={item.id}
                                onClick={() => router.push(`/blog/${item.id}`)}
                                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                {/* Thumbnail */}
                                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-6 gap-3">
                                    {/* Tags */}
                                    {item.tags && item.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.slice(0, 2).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full"
                                                >
                                                    <Tag className="w-2.5 h-2.5" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h2 className="text-base sm:text-lg font-extrabold text-gray-900 leading-snug tracking-tight line-clamp-2 group-hover:text-neutral-600 transition-colors">
                                        {item.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                                        {item.excerpt}
                                    </p>

                                    {/* Footer row */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                                            <CalendarDays className="w-3.5 h-3.5" />
                                            {new Date(item.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-900 group-hover:gap-2 transition-all">
                                            Read More <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    )
}

export default Blog