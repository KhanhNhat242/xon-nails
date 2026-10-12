'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/wholesale-signup', label: 'Wholesale Signup' },
    { href: '/sizing-chart', label: 'Sizing Chart' },
    { href: '/gallery-product', label: 'Gallery Product' },
    { href: '/gallery-coming-soon', label: 'Gallery Coming Soon' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact-us', label: 'Contact' },
]

const Header = () => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    return (
        <div>
            <header className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm ${menuOpen ? 'pb-4' : 'pb-0'}`}>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* lg */}
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <Link href="/" title="" className="flex items-center">
                                <img className="h-10 lg:h-14 w-auto object-contain" src="/images/IMG_7111.JPG" alt="main-logo" />
                            </Link>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        title=""
                                        className={`text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ${isActive ? 'text-blue-600 font-semibold' : 'text-black'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </div>

                        <button
                            type="button"
                            onClick={() => setMenuOpen((open) => !open)}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-neutral-900 hover:bg-neutral-100 transition-colors lg:hidden"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </nav>

                    {/* xs */}
                    {menuOpen && (
                        <nav className="pt-2 pb-4 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                            <div className="flow-root">
                                <div className="flex flex-col px-6 -my-2 space-y-1">
                                    {navLinks.map((link) => {
                                        const isActive = pathname === link.href
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                title=""
                                                onClick={() => setMenuOpen(false)}
                                                className={`inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ${isActive ? 'text-blue-600 font-semibold' : 'text-black'
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            {/* Div đệm — khớp chiều cao thanh header fixed */}
            <div className="h-16 lg:h-20" />
        </div>
    )
}

export default Header
