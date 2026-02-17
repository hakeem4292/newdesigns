"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clientImages } from "../data/clientImages";

const Hero = () => {
    return (
        <section className="relative min-h-[calc(100vh-20px)] lg:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-pink-50 to-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-printing.jpg"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-center brightness-125"
                />
                {/* Overlay for readability - lighter as requested */}
                <div className="absolute inset-0 bg-white/50" />
            </div>

            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full z-[1]" />
            <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-[#FF5C00]/5 blur-[100px] rounded-full z-[1]" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10 pt-32 sm:pt-40 lg:pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center h-full">

                    {/* Left Content */}
                    <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6 md:space-y-8 justify-center">
                        {/* Badge */}
                        {/* <div className="inline-flex items-center space-x-2 bg-white/80 border border-gray-200 px-4 sm:px-4 py-2 sm:py-2 rounded-full w-fit backdrop-blur-md shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
                            <span className="text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-widest text-gray-800">
                                20+ Years of Excellence in Printing & Design
                            </span>
                        </div> */}

                        {/* Headline */}
                        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-gray-900 leading-[1.05] tracking-tight">
                            Premium <br />
                            Printing. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-500">
                                Exceptional <br />
                                Design.
                            </span>
                        </h1>

                        {/* Supporting Line */}
                        <p className="text-lg sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                            Fast, reliable digital printing & creative design solutions in Sharjah.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 sm:gap-4 md:gap-5 pt-4 sm:pt-4">
                            <Link
                                href="/contact"
                                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 sm:gap-3 bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-black px-7 sm:px-7 md:px-8 py-4 sm:py-4 md:py-4 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-base md:text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.3)] active:shadow-[0_15px_40px_rgba(212,175,55,0.5)] active:-translate-y-1 md:hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] md:hover:-translate-y-1 touch-manipulation"
                            >
                                <svg className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-active:translate-x-1 md:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                Get a Quote
                            </Link>

                            <Link
                                href="/services"
                                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 sm:gap-3 bg-white/80 active:bg-white md:hover:bg-white border border-gray-200 text-gray-900 px-7 sm:px-7 md:px-8 py-4 sm:py-4 md:py-4 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-base md:text-lg transition-all duration-300 active:-translate-y-1 md:hover:-translate-y-1 touch-manipulation shadow-sm"
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
                            <div className="bg-transparent border border-white/20 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] relative group shadow-none">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-[2rem]" />
                                <p className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed relative z-10 font-medium">
                                    Digital Line Graphics LLC brings near than 20 years of expertise in digital printing and graphic design. With state-of-the-art technology and skilled professionals, we are committed to constantly delivering products of international quality to our clients.
                                </p>

                                {/* Social Proof */}
                                <div className="hidden sm:flex items-center gap-3 sm:gap-4 mt-5 sm:mt-6 md:mt-8 pt-5 sm:pt-6 md:pt-8 border-t border-gray-900/10 relative z-10">
                                    <div className="flex -space-x-2 sm:-space-x-3">
                                        {clientImages.slice(0, 4).map((src, index) => (
                                            <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden bg-white p-0.5 shadow-sm">
                                                <Image
                                                    src={src}
                                                    alt={`Client ${index + 1}`}
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-900 font-bold text-sm sm:text-base">2000+</span>
                                        <span className="text-gray-700 text-xs sm:text-sm font-medium">Happy Clients</span>
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
