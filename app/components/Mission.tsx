"use client";

import React from 'react';
import Image from 'next/image';
import StarField from './StarField';
import { motion } from 'framer-motion';

function Mission() {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#050505] via-black to-[#050505] overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background */}
            <div className="absolute inset-0 z-0">
                <StarField />
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-[#D4AF37]/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-[20%] left-[-5%] w-[25%] h-[25%] bg-orange-600/5 blur-[80px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 sm:mb-10 md:mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
                        Our <span className="text-[#D4AF37]">Mission</span>
                    </h2>
                </motion.div>

                {/* Mission Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                            <Image
                                src="/our mission.webp"
                                alt="Our Mission"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-[#D4AF37]/20" />

                            {/* Golden Border Glow on Hover */}
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    boxShadow: 'inset 0 0 40px rgba(212, 175, 55, 0.3)'
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 group hover:bg-white/[0.03] transition-all duration-500">
                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl pointer-events-none" />

                            {/* Golden Border Glow on Hover */}
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)'
                                }}
                            />

                            {/* Mission Text */}
                            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed relative z-10">
                                Our aim is to <span className="text-[#D4AF37] font-semibold">satisfy the customer</span> by providing any type of printing with the <span className="text-white font-semibold">latest technology</span> at the <span className="text-[#D4AF37] font-semibold">fastest service and lowest cost</span>. We are capable of producing highly complex print & design jobs with accurate precision and customer delight.
                            </p>

                            {/* Decorative Quote Marks */}
                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-[#D4AF37]/20 text-4xl sm:text-5xl md:text-6xl font-serif leading-none">"</div>
                            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-[#D4AF37]/20 text-4xl sm:text-5xl md:text-6xl font-serif leading-none rotate-180">"</div>
                        </div>
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
        </section>
    );
}

export default Mission;