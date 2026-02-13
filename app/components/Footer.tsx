"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <footer className="bg-[#1a1a1a] text-white relative overflow-hidden">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

                    {/* Company Info - Column 1 */}
                    <div className="lg:col-span-1">
                        {/* Logo */}
                        <div className="mb-6">
                            <Image
                                src="/logo.png"
                                alt="Digital Line Graphics"
                                width={180}
                                height={60}
                                className="h-12 w-auto"
                            />
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Digital Line Graphics LLC have with us the most capable individuals, computers, pre-press and digital printing machines to execute the jobs entrusted to us.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                                <span className="text-[#D4AF37] mt-1">📍</span>
                                <span className="text-gray-400">Maliha Rd, Muwaileh, Sharjah</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#D4AF37]">📞</span>
                                <div className="flex flex-col">
                                    <a href="tel:+971557741411" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                        +971 65774411
                                    </a>
                                    <a href="tel:+971670043577" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                        +971 670043577
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#D4AF37]">📠</span>
                                <div className="flex flex-col">
                                    <span className="text-gray-400">+971 65130911</span>
                                    <span className="text-gray-400">+971 70346487</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#D4AF37]">📱</span>
                                <a href="tel:+971503520946" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                    +971 503520946
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#D4AF37]">✉️</span>
                                <a href="mailto:dllinegraphics@gmail.com" className="text-gray-400 hover:text-[#D4AF37] transition-colors break-all">
                                    dllinegraphics@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#D4AF37]">🌐</span>
                                <a href="https://www.digitallinegraphics.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                    www.digitallinegraphics.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Enquiry Form - Column 2 */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-6">Enquiry Form</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Enter Your Number"
                                value={formData.number}
                                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
                            >
                                Submit
                            </button>
                        </form>

                        {/* Social Media Icons */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services - Column 3 */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Printing Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/services/printing" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                    Printing Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/designing" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                    Designing Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/metalic" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                    Metalic Printing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/3d-rolling" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                    3D Rolling
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Useful Links - Column 4 */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Useful Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/why-choose-us" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                                    Why Choose Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>© 2024 Digital Line Graphics LLC. All rights reserved.</p>
                        <p>
                            Designed by{' '}
                            <a href="#" className="text-[#D4AF37] hover:underline">
                                Sysbreeze
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#C9A961] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
                aria-label="Scroll to top"
            >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    );
}
