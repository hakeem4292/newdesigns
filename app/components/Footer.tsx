"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StarField from './StarField';

export default function Footer() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add actual submission logic here
    };

    return (
        <footer className="relative pt-16 pb-8 bg-gradient-to-b from-[#050505] via-black to-[#050505] border-t border-white/10 overflow-hidden text-white">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background */}
            <div className="absolute inset-0 z-0">
                <StarField />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">

                    {/* Brand Column (Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-1 sm:gap-1.5 md:gap-2 group transition-transform duration-300 hover:scale-105">
                            {/* Left Side - English Text */}
                            <div className="flex flex-col leading-none">
                                <div className="flex items-baseline">
                                    <span className="text-xl md:text-2xl font-bold text-[#C9A961]">Digital</span>
                                    <span className="text-xl md:text-2xl font-bold text-white">Line</span>
                                </div>
                                <span className="text-[9px] md:text-[10px] text-white/40 tracking-[0.15em] uppercase mt-1">GRAPHICS L.L.C</span>
                            </div>

                            {/* Center - Decorative D Image */}
                            <div className="flex items-center mx-2">
                                <div className="relative w-8 h-8 md:w-10 md:h-10">
                                    <Image
                                        src="/ddddddd.png"
                                        alt="D Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Right Side - Arabic Text */}
                            <div className="flex flex-col leading-none text-right">
                                <div className="flex items-baseline">
                                    <span className="text-lg md:text-xl font-bold text-[#C9A961]">الرقمي</span>
                                    <span className="text-lg md:text-xl font-bold text-white">الخط</span>
                                </div>
                                <span className="text-[9px] md:text-[10px] text-white/40 tracking-wide mt-1">للتصميم والطباعة ش.ذ.م.م</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Digital Line Graphics delivers premium printing solutions with precision and speed. From business cards to large format, we bring your vision to life.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 group" aria-label="Facebook">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300 group" aria-label="Instagram">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-black hover:text-white hover:border-white/20 border border-transparent transition-all duration-300 group" aria-label="X (Twitter)">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links (Span 2) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-lg font-bold text-white">Company</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link></li>
                            <li><Link href="/projects" className="hover:text-[#D4AF37] transition-colors">Projects</Link></li>
                            <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services Links (Span 2) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-lg font-bold text-white">Services</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link href="/services/printing" className="hover:text-[#D4AF37] transition-colors">Printing</Link></li>
                            <li><Link href="/services/branding" className="hover:text-[#D4AF37] transition-colors">Branding</Link></li>
                            <li><Link href="/services/design" className="hover:text-[#D4AF37] transition-colors">Design</Link></li>
                            <li><Link href="/services/marketing" className="hover:text-[#D4AF37] transition-colors">Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Contact Form (Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <h4 className="text-lg font-bold text-white">Quick Inquiry</h4>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                                    value={formData.number}
                                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <button className="w-full bg-[#D4AF37] text-black font-bold py-3 rounded-lg hover:bg-[#F4D03F] transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {isMounted ? new Date().getFullYear() : '2024'} Digital Line Graphics. All rights reserved.
                    </p>

                    {/* Scroll Top Button */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300 group"
                        aria-label="Scroll to top"
                    >
                        <svg className="w-5 h-5 text-white group-hover:text-black transition-colors transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}
