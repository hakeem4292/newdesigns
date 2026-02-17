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
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
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

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Crafting Excellence in <br />
                                <span className="text-[#D4AF37]">Every Print</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Since 2006, Digital Line Graphics has been at the forefront of the digital printing revolution in Sharjah. We don't just print; we bring visions to life with unparalleled precision and creativity.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-[#D4AF37] shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
                                    <p className="text-gray-500 text-sm">International standards in every project we undertake.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-[#D4AF37] shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
                                    <p className="text-gray-500 text-sm">Quick turnaround times without compromising quality.</p>
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