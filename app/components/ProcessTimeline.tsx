import React, { useState, useEffect } from "react";
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

export default function ProcessTimeline() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
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
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-rajdhani">
                        How We <span className="text-[#D4AF37]">Work</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-rajdhani">
                        A seamless process from concept to completion
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 right-0 h-1 bg-gray-200 -z-10">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"
                        />
                    </div>

                    {/* Connecting Line (Mobile) */}
                    <div className="md:hidden absolute left-12 top-0 bottom-0 w-0.5 bg-gray-200 -z-10">
                        <motion.div
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-50"
                        />
                    </div>

                    <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-4 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center group"
                            >
                                {/* Image Circle */}
                                <div className={`flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-[#D4AF37]/20 bg-white flex items-center justify-center mb-0 md:mb-6 shadow-md group-hover:border-[#D4AF37] group-hover:shadow-lg transition-all duration-500 z-10 relative overflow-hidden mr-6 md:mr-0`}>
                                    <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Mobile Step Badge */}
                                    <div className="md:hidden absolute -top-1 -right-1 w-8 h-8 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white z-20">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 w-full hover:border-[#D4AF37]/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#D4AF37] transition-colors font-rajdhani">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-rajdhani">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Step Number (Desktop Decor) */}
                                <div className="hidden md:block absolute -top-4 -right-2 text-6xl font-bold text-gray-100 select-none font-serif group-hover:text-[#D4AF37]/10 transition-colors">
                                    0{index + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
