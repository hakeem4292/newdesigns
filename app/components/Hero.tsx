"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                >
                    <source src="/vedio/Video Project 1.mp4" type="video/mp4" />
                </video>
                {/* Lighter overlay for brighter background */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20" />
                <div className="absolute inset-0 bg-[#050505]/20" />
            </div>

            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full z-[1]" />
            <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-[#FF5C00]/5 blur-[100px] rounded-full z-[1]" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-6 md:space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 sm:px-4 py-2 sm:py-2 rounded-full w-fit backdrop-blur-md">
                            <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
                            <span className="text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                                20+ Years of Excellence in Printing & Design
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight">
                            Premium Printing. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                                Exceptional Design.
                            </span>
                        </h1>

                        {/* Supporting Line */}
                        <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                            Fast, reliable digital printing & creative design solutions in Sharjah.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 sm:gap-4 md:gap-5 pt-4 sm:pt-4">
                            <Link
                                href="/contact"
                                className="group relative flex items-center justify-center gap-3 sm:gap-3 bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-black px-7 sm:px-7 md:px-8 py-4 sm:py-4 md:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-base md:text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.3)] active:shadow-[0_15px_40px_rgba(212,175,55,0.5)] active:-translate-y-1 md:hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] md:hover:-translate-y-1 touch-manipulation"
                            >
                                <svg className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-active:translate-x-1 md:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                Get a Quote
                            </Link>

                            <Link
                                href="/services"
                                className="group relative flex items-center justify-center gap-3 sm:gap-3 bg-white/5 active:bg-white/10 md:hover:bg-white/10 border border-white/10 text-white px-7 sm:px-7 md:px-8 py-4 sm:py-4 md:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-base md:text-lg transition-all duration-300 active:-translate-y-1 md:hover:-translate-y-1 touch-manipulation"
                            >
                                <svg className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-active:translate-x-1 md:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                Our Services
                            </Link>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-5 relative">
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:pl-10">
                            {/* Description box */}
                            <div className="bg-white/[0.01] border border-white/5 backdrop-blur-2xl p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-[2rem]" />
                                <p className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl text-white/60 leading-relaxed relative z-10">
                                    Digital Line Graphics LLC brings 20+ years of expertise in digital printing, graphic design, and pre-press services. With state-of-the-art technology and skilled professionals, we deliver international quality printing solutions in Sharjah.
                                </p>

                                {/* Social Proof */}
                                <div className="hidden sm:flex items-center gap-3 sm:gap-4 mt-5 sm:mt-6 md:mt-8 pt-5 sm:pt-6 md:pt-8 border-t border-white/5 relative z-10">
                                    <div className="flex -space-x-2 sm:-space-x-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#050505] overflow-hidden bg-white p-1">
                                            <Image
                                                src="/Peugeot_2021_Logo.svg"
                                                alt="Peugeot"
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#050505] overflow-hidden bg-white p-1">
                                            <Image
                                                src="/BankOfBarodaLogo.svg"
                                                alt="Bank of Baroda"
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#050505] overflow-hidden bg-white p-1">
                                            <Image
                                                src="/lincoln_electric_india_logo.jpg"
                                                alt="Lincoln Electric"
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold text-sm sm:text-base">2000+</span>
                                        <span className="text-white/40 text-xs sm:text-sm">Happy Clients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
