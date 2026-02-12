"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

function Mission() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#050505] to-black overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-[#D4AF37]/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-[20%] left-[-5%] w-[25%] h-[25%] bg-orange-600/5 blur-[80px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
                        Our <span className="text-[#D4AF37]">Mission</span>
                    </h2>
                </div>

                {/* Mission Content - Two Column Layout */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Left Side - Image */}
                    <div className="relative group">
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
                    </div>

                    {/* Right Side - Content */}
                    <div className="relative">
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
                                Our mission is to provide you with the <span className="text-[#D4AF37] font-semibold">highest-quality products and services</span> possible in a timely fashion and at a competitive price. We promise to <span className="text-white font-semibold">listen to you</span> and help you achieve your business goals. We will always be there with <span className="text-[#D4AF37] font-semibold">honest, expert advice</span> and quick, friendly customer service. Our goal is to <span className="text-white font-semibold">meet and exceed your expectations</span>.
                            </p>

                            {/* Decorative Quote Marks */}
                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-[#D4AF37]/20 text-4xl sm:text-5xl md:text-6xl font-serif leading-none">"</div>
                            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-[#D4AF37]/20 text-4xl sm:text-5xl md:text-6xl font-serif leading-none rotate-180">"</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`mt-8 sm:mt-10 md:mt-12 flex justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
                    <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
                </div>
            </div>
        </section>
    );
}

export default Mission;