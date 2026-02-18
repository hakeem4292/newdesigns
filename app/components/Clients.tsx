'use client';

import React from 'react';
import Image from 'next/image';
import StarField from './StarField';
import { clientImages } from '../data/clientImages';
import { motion } from "framer-motion";

function Clients() {
    return (
        <section className="relative py-12 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background - Updated for Light Theme */}
            <div className="absolute inset-0 z-0 opacity-30">
                <StarField />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 md:px-10 relative z-10"
            >
                {/* Simple Heading */}
                <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                        Some of our <span className="text-[#D4AF37]">happy clients</span>
                    </h3>
                    <div className="w-16 h-0.5 bg-[#D4AF37] mt-2"></div>
                </div>

                {/* Auto-scrolling Container */}
                <div className="relative flex overflow-hidden group py-4">
                    <div className="flex gap-4 md:gap-8 animate-marquee whitespace-nowrap">
                        {[...clientImages, ...clientImages].map((src, index) => (
                            <div
                                key={`c1-${index}`}
                                className="flex-shrink-0 w-48 h-28 md:w-72 md:h-48 bg-white border border-gray-200 rounded-xl p-2 md:p-4 flex items-center justify-center transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-lg relative overflow-hidden group/card"
                            >

                                <div className="relative w-full h-full">
                                    <Image
                                        src={src}
                                        alt={`Client ${index}`}
                                        fill
                                        className="object-contain p-1 md:p-2 transition-transform duration-300 group-hover/card:scale-110"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-0 flex gap-4 md:gap-8 animate-marquee2 whitespace-nowrap ml-4 md:ml-8 py-4">
                        {[...clientImages, ...clientImages].map((src, index) => (
                            <div
                                key={`c2-${index}`}
                                className="flex-shrink-0 w-48 h-28 md:w-72 md:h-48 bg-white border border-gray-200 rounded-xl p-2 md:p-4 flex items-center justify-center transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-lg relative overflow-hidden group/card"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={src}
                                        alt={`Client ${index}`}
                                        fill
                                        className="object-contain p-1 md:p-2 transition-transform duration-300 group-hover/card:scale-110"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Clients;