"use client";

import React, { Suspense } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy-load Three.js scene (no SSR — WebGL needs the browser)
const ThreeBackground = dynamic(() => import("./ThreeBackground"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
    ),
});

/* ── Word-by-word reveal heading ── */
function AnimatedHeading({
    text,
    highlight,
    className,
}: {
    text: string;
    highlight: string;
    className?: string;
}) {
    const fullText = text.replace(highlight, `|||${highlight}|||`);
    const segments = fullText.split("|||").filter(Boolean);

    return (
        <motion.h2
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
        >
            {segments.map((segment) => {
                const isHighlight = segment === highlight;
                return segment.split(" ").map((word, wi) => (
                    <motion.span
                        key={`${segment}-${wi}`}
                        className={`inline-block mr-[0.3em] ${isHighlight ? "text-[#D4AF37]" : ""}`}
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {word}
                    </motion.span>
                ));
            })}
        </motion.h2>
    );
}

/* ── Feature data ── */
const features = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Cutting-Edge Tech",
        desc: "State-of-the-art machinery for unmatched output.",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Unmatched Quality",
        desc: "Every print inspected to perfection.",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Since 2006",
        desc: "Nearly two decades of excellence.",
    },
];

/* ── Stagger animation ── */
const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ─────────────────────────── ABOUT COMPONENT ─────────────────────────── */
export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    return (
        <section ref={ref} className="relative overflow-hidden bg-white">
            {/* === THREE.JS BACKGROUND - Optimized for performance === */}
            {isInView && (
                <Suspense
                    fallback={
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
                    }
                >
                    <ThreeBackground />
                </Suspense>
            )}

            {/* Overlay — lighter on mobile so Three.js shows, stronger on desktop for readability */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/30 via-white/15 to-white/30 lg:from-white/70 lg:via-white/40 lg:to-white/70" />

            {/* === CONTENT === */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-14 sm:py-24 lg:py-32">

                {/* ── MOBILE LAYOUT ── */}
                <div className="lg:hidden space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[11px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase font-rajdhani">
                            About Us
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <AnimatedHeading
                        text="Precision Meets Imagination"
                        highlight="Imagination"
                        className="text-[1.6rem] sm:text-3xl font-bold text-gray-900 leading-tight uppercase text-center font-rajdhani"
                    />

                    {/* Image with badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative h-[220px] sm:h-[300px] rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-black/10">
                            <Image
                                src="/machineeeee.jpg"
                                alt="Advanced Printing Machine"
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/30 rounded-tl-2xl" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/30 rounded-br-2xl" />
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="absolute -bottom-3 right-4 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl px-4 py-2.5 shadow-lg"
                        >
                            <div className="text-xl font-bold text-[#D4AF37] font-rajdhani leading-none">18+</div>
                            <div className="text-[9px] text-gray-500 uppercase tracking-widest font-light">Years</div>
                        </motion.div>
                    </motion.div>

                    {/* Body text */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[13px] sm:text-sm text-gray-600 leading-relaxed font-light tracking-wide text-center font-rajdhani"
                    >
                        Since 2006, Digital Line Graphics has been redefining the art of print
                        in Sharjah. We fuse cutting-edge technology with artisanal craftsmanship
                        to bring your wildest visions to vibrant life.
                    </motion.p>

                    {/* Feature cards — horizontal scroll strip */}
                    <motion.div
                        className="grid grid-cols-3 gap-2"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feat, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className="relative p-3 rounded-xl bg-white/70 border border-gray-200/60 backdrop-blur-sm text-center hover:bg-white hover:border-[#D4AF37]/20 hover:shadow-md transition-all duration-500"
                            >
                                <div className="text-[#D4AF37] mb-2 flex justify-center">
                                    {feat.icon}
                                </div>
                                <h3 className="text-[11px] font-semibold text-gray-900 mb-0.5 tracking-wide font-rajdhani leading-tight">
                                    {feat.title}
                                </h3>
                                <p className="text-[9px] text-gray-500 font-light leading-snug font-rajdhani">
                                    {feat.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-white font-bold text-sm font-rajdhani tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
                        >
                            Discover Our Story
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>

                {/* ── DESKTOP LAYOUT ── */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[480px] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl shadow-black/10">
                            <Image
                                src="/machineeeee.jpg"
                                alt="Advanced Printing Machine"
                                fill
                                className="object-cover"
                                sizes="50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-[#D4AF37]/5" />
                            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37]/30 rounded-tl-3xl" />
                            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37]/30 rounded-br-3xl" />
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="absolute -bottom-6 -right-4 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl px-6 py-4 shadow-xl"
                        >
                            <div className="text-3xl font-bold text-[#D4AF37] font-rajdhani">18+</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest font-light">Years</div>
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 font-rajdhani"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
                                About Us
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 mb-6 leading-snug uppercase">
                            Precision Meets <br />
                            <span className="text-[#D4AF37]">Imagination</span>
                        </h2>

                        {/* Body */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-gray-600 leading-relaxed font-light tracking-wide"
                        >
                            Since 2006, Digital Line Graphics has been redefining the art of print
                            in Sharjah. We don&apos;t just put ink on paper; we engineer visual
                            experiences. From intricate designs to large-scale branding, we fuse
                            cutting-edge technology with artisanal craftsmanship to bring your
                            wildest visions to vibrant life.
                        </motion.p>

                        {/* Feature Cards */}
                        <motion.div
                            className="grid grid-cols-3 gap-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {features.map((feat, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    className="group relative p-5 rounded-2xl bg-white/70 border border-gray-200/60 backdrop-blur-sm hover:bg-white hover:border-[#D4AF37]/20 hover:shadow-lg transition-all duration-500"
                                >
                                    <div className="text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {feat.icon}
                                    </div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-1 tracking-wide font-rajdhani">
                                        {feat.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed font-rajdhani">
                                        {feat.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <Link
                                href="/about"
                                className="relative inline-flex items-center space-x-2 text-base text-[#D4AF37] font-semibold hover:space-x-4 transition-all duration-300 group overflow-hidden tracking-wider uppercase"
                            >
                                <span className="relative z-10">Discover Our Story</span>
                                <svg
                                    className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                <span className="absolute inset-0 -translate-x-full animate-about-shimmer bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}