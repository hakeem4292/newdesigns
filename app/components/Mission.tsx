"use client";

import React from 'react';
import Image from 'next/image';
import StarField from './StarField';
import { motion } from 'framer-motion';

function Mission() {
    return (
        <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-white">
            {/* Background Texture & Decorative Elements */}
            <div className="absolute inset-0 z-0 opacity-20">
                <StarField />
            </div>

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left: Text Content (Mission) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 space-y-10"
                    >
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                                <span className="text-sm font-bold tracking-widest text-[#D4AF37] uppercase">Our Purpose</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                Delivering Excellence <br />
                                <span className="text-[#D4AF37]">Our Mission</span>
                            </h2>
                            <div className="w-24 h-2 bg-[#D4AF37] rounded-full" />
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative p-8 sm:p-10 rounded-[2rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(212,175,55,0.1)] group-hover:border-[#D4AF37]/20">
                                <div className="flex items-start gap-6">
                                    <div className="hidden sm:flex shrink-0 p-4 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500 shadow-inner">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                                            To provide you with the highest-quality products and services in a timely fashion and at a competitive price.
                                        </p>
                                        <p className="text-gray-500 leading-relaxed">
                                            We promise to listen to you and help you achieve your business goals. We will always be there with honest, expert advice and quick, friendly customer service. Our goal is to meet and exceed your expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Signature Quote */}
                        <div className="pl-6 border-l-4 border-[#D4AF37]/30 italic text-gray-400 font-medium">
                            "Committed to quality, dedicated to your success."
                        </div>
                    </motion.div>

                    {/* Right: Image Composition */}
                    <div className="lg:col-span-7 relative pt-12 lg:pt-0">
                        {/* Main Image - Large */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="relative h-[350px] sm:h-[450px] md:h-[500px] w-[90%] lg:w-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.12)] border-8 border-white"
                            >
                                <Image
                                    src="/machineeeee.jpg"
                                    alt="Advanced Printing Machine"
                                    fill
                                    className="object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                            </motion.div>
                        </motion.div>

                        {/* Secondary Overlapping Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 60, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="absolute -bottom-12 -right-4 sm:-right-8 z-20 w-[60%] sm:w-[50%] lg:w-[55%]"
                        >
                            <motion.div
                                whileHover={{ y: -12, rotate: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.2)] border-4 sm:border-8 border-white"
                            >
                                <Image
                                    src="/Richo pro c9200.jpg"
                                    alt="Precision Printing Hardware"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        </motion.div>

                        {/* Decorative Badge - Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute -top-6 left-0 sm:-left-12 z-30 p-6 rounded-3xl bg-white/90 backdrop-blur-2xl shadow-xl border border-white/50 hidden sm:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-green-500/10 text-green-500">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900 leading-none">2,000+</div>
                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Happy Clients</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Decorative Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%] border-2 border-[#D4AF37]/10 border-dashed rounded-full animate-spin-slow opacity-60" />
                    </div>

                </div>
            </div>

            {/* Bottom Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        </section>
    );
}

export default Mission;