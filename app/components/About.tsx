"use client";

import React from 'react';
import StarField from './StarField';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function About() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent opacity-50" />

            {/* Star Field */}
            <div className="absolute inset-0 z-0 opacity-30">
                <StarField />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Section - Order 2 on mobile, Order 1 on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group order-last lg:order-first"
                    >
                        <div className="relative h-[300px] sm:h-[500px] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
                            <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay z-10" />
                            <Image
                                src="/printbook.jpg"
                                alt="Modern printing facility"
                                fill
                                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Light theme overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Decorative Elements - Adjusted for light theme */}
                        <div className="absolute -z-10 top-[-20px] left-[-20px] w-2/3 h-2/3 border-2 border-[#D4AF37]/20 rounded-2xl" />
                        <div className="absolute -z-10 bottom-[-20px] right-[-20px] w-2/3 h-2/3 border-2 border-[#D4AF37]/20 rounded-2xl" />

                        {/* Glow effect - Adjusted for light theme */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-orange-500/10 to-[#D4AF37]/20 rounded-3xl blur-3xl opacity-50"></div>
                    </motion.div>

                    {/* Content Section - Order 1 on mobile, Order 2 on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                                Where Imagination Meets <br />
                                <span className="text-[#D4AF37]">Precision Printing</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Since 2006, Digital Line Graphics has been redefining the art of print in Sharjah. We don't just put ink on paper; we engineer visual experiences. From intricate designs to large-scale branding, we fuse cutting-edge technology with artisanal craftsmanship to bring your wildest visions to vibrant life.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                                <div className="p-2 sm:p-3 bg-gray-50 rounded-xl border border-gray-200 text-[#D4AF37] shadow-sm shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">Quality First</h3>
                                    <p className="hidden sm:block text-gray-500 text-sm">International standards in every project.</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                                <div className="p-2 sm:p-3 bg-gray-50 rounded-xl border border-gray-200 text-[#D4AF37] shadow-sm shrink-0">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">Fast Delivery</h3>
                                    <p className="hidden sm:block text-gray-500 text-sm">Quick turnaround without compromising quality.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/about"
                                className="inline-flex items-center space-x-2 text-[#D4AF37] font-bold hover:space-x-4 transition-all duration-300 group"
                            >
                                <span>Discover Our Story</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;