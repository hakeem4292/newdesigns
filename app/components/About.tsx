"use client";

import React, { useRef } from 'react';
import StarField from './StarField';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Word-by-word reveal for headings
function AnimatedHeading({ text, highlight, className }: { text: string; highlight: string; className?: string }) {
    const fullText = text.replace(highlight, `|||${highlight}|||`);
    const parts = fullText.split('|||');

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.06 },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <motion.h2
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
        >
            {parts.map((part, pIdx) => {
                const isHighlight = part === highlight;
                const words = part.split(' ').filter(Boolean);
                return words.map((word, wIdx) => (
                    <motion.span
                        key={`${pIdx}-${wIdx}`}
                        variants={wordVariants}
                        className={`inline-block mr-[0.3em] ${isHighlight ? 'text-[#D4AF37]' : ''}`}
                    >
                        {word}
                    </motion.span>
                ));
            })}
        </motion.h2>
    );
}

const features = [
    {
        icon: (
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Quality First",
        desc: "International standards in every project.",
    },
    {
        icon: (
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Fast Delivery",
        desc: "Quick turnaround without compromising quality.",
    },
    {
        icon: (
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Since 2006",
        desc: "Nearly two decades of printing excellence.",
    },
];


// Stagger container for feature cards
const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const featureCardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    // Parallax: image moves slower than scroll (mobile only effect, applied via style)
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <section ref={sectionRef} className="relative py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent opacity-50" />

            {/* Star Field */}
            <div className="absolute inset-0 z-0 opacity-30">
                <StarField />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

                    {/* ── IMAGE SECTION ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group order-last lg:order-first"
                    >
                        {/* Mobile: full-bleed parallax image */}
                        <div className="relative h-[280px] sm:h-[500px] w-full rounded-b-[2rem] sm:rounded-b-[2.5rem] lg:rounded-t-none lg:rounded-b-[3rem] overflow-hidden border border-gray-200 shadow-2xl">
                            <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay z-10" />
                            <motion.div
                                className="absolute inset-0 lg:!transform-none"
                                style={{ y: imageY }}
                            >
                                <Image
                                    src="/printbook.jpg"
                                    alt="Modern printing facility"
                                    fill
                                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                            {/* Gradient overlay — stronger on mobile for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent z-10" />
                        </div>

                        {/* Decorative Elements (hidden on small mobile, shown sm+) */}
                        <div className="hidden sm:block absolute -z-10 top-[-20px] left-[-20px] w-2/3 h-2/3 border-2 border-[#D4AF37]/20 rounded-t-none rounded-b-[3rem]" />
                        <div className="hidden sm:block absolute -z-10 bottom-[-20px] right-[-20px] w-2/3 h-2/3 border-2 border-[#D4AF37]/20 rounded-t-none rounded-b-[3rem]" />

                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-orange-500/10 to-[#D4AF37]/20 rounded-b-[2.5rem] lg:rounded-t-none lg:rounded-b-[3rem] blur-3xl opacity-50" />
                    </motion.div>

                    {/* ── CONTENT SECTION ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 sm:space-y-8 lg:space-y-8 font-rajdhani"
                    >
                        {/* Heading — word-by-word on mobile, normal on desktop */}
                        <div>
                            {/* Mobile animated heading */}
                            <div className="block lg:hidden">
                                <AnimatedHeading
                                    text="Where Imagination Meets Precision Printing"
                                    highlight="Precision Printing"
                                    className="text-xl sm:text-3xl font-semibold text-gray-900 mb-4 leading-tight font-rajdhani uppercase"
                                />
                            </div>
                            {/* Desktop static heading */}
                            <h2 className="hidden lg:block text-3xl xl:text-4xl font-semibold text-gray-900 mb-6 leading-tight font-rajdhani uppercase">
                                Where Imagination Meets <br /> <span className="text-[#D4AF37]">Precision Printing</span>
                            </h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-sm sm:text-lg text-gray-600 leading-relaxed font-light tracking-wide"
                            >
                                Since 2006, Digital Line Graphics has been redefining the art of print in Sharjah. We don&apos;t just put ink on paper; we engineer visual experiences. From intricate designs to large-scale branding, we fuse cutting-edge technology with artisanal craftsmanship to bring your wildest visions to vibrant life.
                            </motion.p>
                        </div>

                        {/* ── FEATURE CARDS ── */}
                        <motion.div
                            className="grid grid-cols-3 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-8 mt-2"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-30px" }}
                        >
                            {features.map((feat, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={featureCardVariant}
                                    className={`
                                        flex flex-col items-center text-center
                                        p-2 sm:p-0
                                        rounded-2xl sm:rounded-none
                                        bg-white/70 sm:bg-transparent
                                        backdrop-blur-sm sm:backdrop-blur-none
                                        border border-gray-100 sm:border-0
                                        shadow-sm sm:shadow-none
                                        sm:flex-row sm:items-start sm:text-left
                                        sm:space-x-4
                                        ${idx === 2 ? 'sm:col-span-2 sm:max-w-[50%]' : ''}
                                    `}
                                >
                                    <div className="p-1.5 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200 text-[#D4AF37] shadow-sm shrink-0 mb-1.5 sm:mb-0">
                                        {feat.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-[11px] sm:text-xl font-semibold text-gray-900 mb-0 sm:mb-2 leading-tight tracking-wide">{feat.title}</h3>
                                        <p className="text-[9px] leading-snug sm:text-sm text-gray-500 font-light tracking-wide">{feat.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>


                        {/* ── CTA LINK ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="pt-2 lg:pt-4"
                        >
                            <Link
                                href="/about"
                                className="relative inline-flex items-center space-x-2 text-sm sm:text-base text-[#D4AF37] font-semibold hover:space-x-4 transition-all duration-300 group overflow-hidden tracking-wider uppercase"
                            >
                                <span className="relative z-10">Discover Our Story</span>
                                <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                {/* Shimmer effect on mobile */}
                                <span className="lg:hidden absolute inset-0 -translate-x-full animate-about-shimmer bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;