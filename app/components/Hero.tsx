"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clientImages } from "../data/clientImages";

const Hero = () => {
    return (
        <section className="relative min-h-[82vh] lg:h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                >
                    <source src="/vedio/HEROvedio.mp4" type="video/mp4" />
                </video>
                {/* 0.45 dark overlay */}
                <div className="absolute inset-0 bg-black/45" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10 pt-20 sm:pt-40 lg:pt-32">
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
                        <h1
                            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-[#ccc754] leading-[1.05] tracking-tight font-milkyway"
                            style={{
                                fontFamily: "'Milkyway', sans-serif",
                                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                                WebkitTextStroke: "1px white"
                            }}
                        >
                            Premium <br />
                            Printing. <br />
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F4A8B] to-[#5F4A8B]"
                                style={{
                                    WebkitTextStroke: "1px white"
                                }}
                            >
                                Exceptional <br />
                                Design.
                            </span>
                        </h1>

                        {/* Supporting Line */}
                        <p className="text-lg sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-medium drop-shadow-sm">
                            Fast, reliable digital printing & creative design solutions in Sharjah.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 sm:gap-4 md:gap-5 pt-4 sm:pt-4">
                            <Link
                                href="/contact"
                                className="group relative w-auto flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#5F4A8B] to-[#9F7AEA] text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(95,74,139,0.5)] hover:-translate-y-1 font-milkyway uppercase tracking-wider border border-white/20"
                            >
                                <svg className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-active:translate-x-1 md:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                Get a Quote
                            </Link>

                            <Link
                                href="/services"
                                className="group relative w-auto flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-white/40 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 hover:border-white hover:bg-white hover:text-[#1A1A2E] hover:-translate-y-1 shadow-none hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] font-lexend uppercase tracking-wider backdrop-blur-none"
                            >
                                <svg className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-active:translate-x-1 md:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                Our Services
                            </Link>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="hidden lg:block lg:col-span-5 relative">
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:pl-10">
                            {/* Description box */}
                            <div className="bg-white/5 border border-white/10 backdrop-blur-[2px] p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] relative group shadow-lg">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-[2rem]" />
                                <p className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed relative z-10 font-medium drop-shadow-md">
                                    Digital Line Graphics LLC brings more than 20 years of expertise in digital printing and graphic design. With state-of-the-art technology and skilled professionals, we are committed to constantly delivering products of international quality to our clients.
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
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#C9A84C] font-bold text-sm sm:text-base drop-shadow-sm">2000+</span>
                                        <span className="text-gray-200 text-xs sm:text-sm font-medium drop-shadow-sm">Happy Clients</span>
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
