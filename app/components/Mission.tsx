"use client";

import React from 'react';
import Image from 'next/image';
import StarField from './StarField';
import { motion } from 'framer-motion';

function Mission() {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-30">
                <StarField />
            </div>

            {/* Decorative Blobs - Lighter for light theme */}
            <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-[#D4AF37]/5 blur-[80px] rounded-full" />
            <div className="absolute bottom-[20%] left-[-5%] w-[25%] h-[25%] bg-orange-200/20 blur-[60px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Our Mission & <br />
                                <span className="text-[#D4AF37]">Vision</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-[#D4AF37] rounded-full" />
                        </div>

                        <div className="space-y-6">
                            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-pink-50/50 border border-white/60 hover:border-[#D4AF37]/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                                    <span className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </span>
                                    Our Mission
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our mission is to provide you with the highest-quality products and services possible in a timely fashion and at a competitive price. We promise to listen to you and help you achieve your business goals. We will always be there with honest, expert advice and quick, friendly customer service. Our goal is to meet and exceed your expectations.
                                </p>
                            </div>

                            <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-pink-50/50 border border-white/60 hover:border-[#D4AF37]/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                                    <span className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </span>
                                    Our Vision
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To become the foremost designer & printer in the UAE area capable of delivering high quality print jobs for both small & medium enterprises as well as the large industrial organizations in the region.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative h-[400px] sm:h-[500px] w-full rounded-[2rem] overflow-hidden border border-gray-200 shadow-2xl">
                            <Image
                                src="/machineeeee.jpg"
                                alt="Our Mission - Advanced Printing Technology"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60" />

                            {/* Floating Stats Card - Light Theme */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-600 font-medium uppercase tracking-wider">Clients Trust Us</p>
                                        <p className="text-3xl font-bold text-gray-900 mt-1">100%</p>
                                    </div>
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center text-white shadow-lg">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 rounded-full border-2 border-[#D4AF37]/20 border-dashed animate-spin-slow" />
                    </motion.div>
                </div>
                {/* Bottom Accent Line */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-8 sm:mt-10 md:mt-12 flex justify-center"
                >
                    <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
                </motion.div>
            </div>
        </section >
    );
}

export default Mission;