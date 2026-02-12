"use client";

import React, { useEffect, useRef, useState } from 'react';

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
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
        <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-[#050505] to-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Print Book Image */}
                    <div className={`relative transition-all duration-800 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
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
                    </div>

                    {/* Right Side - Content */}
                    <div className={`space-y-6 transition-all duration-800 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        {/* Badge */}
                        <div className="inline-block bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md">
                            <span className="text-sm font-semibold text-white/80">Not Just Another Printing Company</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            We build bold ideas, powered by technology and creativity.
                        </h2>

                        {/* CTA Button */}
                        <button className="group flex items-center gap-3 bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-black px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-1">
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            Find Out More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;