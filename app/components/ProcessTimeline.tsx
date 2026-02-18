"use client";

import React from "react";
import Image from "next/image";
import StarField from "./StarField";
import { motion } from "framer-motion";

const steps = [
    {
        image: "/service/consultancy.avif",
        title: "Consultation",
        description: "We discuss your needs and recommend the best solutions.",
    },
    {
        image: "/service/designn.avif",
        title: "Design",
        description: "Our expert designers create or refine your artwork.",
    },
    {
        image: "/service/production.webp",
        title: "Production",
        description: "High-quality printing using state-of-the-art technology.",
    },
    {
        image: "/service/deliveryyy.jpg",
        title: "Delivery",
        description: "Fast and secure delivery to your doorstep.",
    }
];

/* ── Animation Variants ── */
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
};

const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -15 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 400, damping: 15, delay: 0.3 },
    },
};

export default function ProcessTimeline() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <StarField />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-rajdhani"
                        initial={{ opacity: 0, y: 20, letterSpacing: "0.2em" }}
                        whileInView={{ opacity: 1, y: 0, letterSpacing: "0em" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        How We <span className="text-[#D4AF37]">Work</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 max-w-2xl mx-auto font-rajdhani"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        A seamless process from concept to completion
                    </motion.p>
                    {/* Animated underline */}
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4 rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: 96, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 right-0 h-1 bg-gray-200 -z-10">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37] to-[#D4AF37]/30"
                        />
                    </div>

                    {/* Connecting Line (Mobile) */}
                    <div className="md:hidden absolute left-12 top-0 bottom-0 w-0.5 bg-gray-200 -z-10">
                        <motion.div
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                            className="w-full bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37] to-[#D4AF37]/30"
                        />
                    </div>

                    <motion.div
                        className="flex flex-col md:grid md:grid-cols-4 md:items-stretch gap-8 md:gap-4 relative"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-20px" }}
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={stepVariants}
                                className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center group h-full"
                            >
                                {/* Image Circle — spin-in animation */}
                                <motion.div
                                    variants={imageVariants}
                                    whileHover={{
                                        scale: 1.08,
                                        borderColor: "#D4AF37",
                                        boxShadow: "0 0 25px rgba(212, 175, 55, 0.3)",
                                    }}
                                    className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-[#D4AF37]/20 bg-white flex items-center justify-center mb-0 md:mb-6 shadow-md z-10 relative overflow-hidden mr-6 md:mr-0 cursor-pointer transition-colors duration-300"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Shimmer overlay on hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                                        initial={{ x: "-100%", opacity: 0 }}
                                        whileHover={{ x: "100%", opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    {/* Mobile Step Badge — bouncy spring */}
                                    <motion.div
                                        variants={badgeVariants}
                                        className="md:hidden absolute -top-1 -right-1 w-8 h-8 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white z-20"
                                    >
                                        {index + 1}
                                    </motion.div>
                                </motion.div>

                                {/* Content Card — slide in with hover lift */}
                                <motion.div
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -6,
                                        borderColor: "rgba(212, 175, 55, 0.3)",
                                        boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 w-full shadow-sm cursor-default flex-1 flex flex-col justify-between"
                                >
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#D4AF37] transition-colors duration-300 font-rajdhani">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-rajdhani">
                                        {step.description}
                                    </p>

                                    {/* Animated progress bar inside card */}
                                    <motion.div
                                        className="mt-3 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/30 rounded-full origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                                    />
                                </motion.div>

                                {/* Step Number (Desktop Decor) — fade & scale */}
                                <motion.div
                                    className="hidden md:block absolute -top-4 -right-2 text-6xl font-bold text-gray-100 select-none font-serif"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                                    whileHover={{ color: "rgba(212, 175, 55, 0.15)", scale: 1.1 }}
                                >
                                    0{index + 1}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
