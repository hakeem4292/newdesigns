"use client";

import React from 'react';
import StarField from './StarField';
import { motion } from 'framer-motion';

function About() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-[#050505] via-black to-[#050505] overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background */}
            <div className="absolute inset-0 z-0">
                <StarField />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Print Book Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-orange-900/20 to-[#D4AF37]/20 rounded-3xl blur-3xl"></div>
                            {/* Print Book Image */}
                            <div className="relative w-full">
                                <img
                                    src="/printbook.jpg"
                                    alt="Print Book Showcase"
                                    className="w-full h-auto max-h-120 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <div className="inline-block bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md">
                            <span className="text-sm font-semibold text-white/80">Not Just Another Printing Company</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Digital Line Graphics LLC is a sister concern of <span className="text-[#C9A961]">Al Fajr Graphic</span>, serving Sharjah since 2003.
                        </h2>

                        <p className="text-white/70 leading-relaxed">
                            With near than 20 years of experience and a clear understanding of customer needs, we've made our mark in digital printing and graphic design. Now in <span className="text-white font-medium">Sharjah Muwailah Commercial Area</span>, we utilize the latest technology to execute highly complex jobs with accurate precision.
                        </p>

                        <p className="text-white/60 text-sm italic">
                            "We have the most capable individuals, pre-press infrastructure, and latest printing machines to execute the jobs entrusted to us."
                        </p>

                        {/* CTA Button */}
                        <button className="group flex items-center gap-3 bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-black px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-1">
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            Get Started
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;