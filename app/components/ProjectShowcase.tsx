"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import StarField from "./StarField";

const projects = [
    {
        id: 1,
        title: "Coffee Branding & Collateral",
        category: "Branding",
        image: "/service/luxury coffe branding.jpg",
        client: "Morning Brew Café"
    },
    {
        id: 2,
        title: "Custom Eco-Friendly Bags",
        category: "Packaging",
        image: "/service/custombag.jpg",
        client: "Organic Market"
    },
    {
        id: 3,
        title: "Personalized Ceramic Mugs",
        category: "Merchandise",
        image: "/products/mug.jpg",
        client: "Creative Studios"
    },
    {
        id: 4,
        title: "Premium Product Packaging",
        category: "Packaging",
        image: "/service/BAGSPACKAGING.webp",
        client: "Luxe Essentials"
    }
];

export default function ProjectShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 bg-gradient-to-b from-white via-pink-50 to-white relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <StarField />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] mx-auto rounded-full" />
                </motion.div>

                {/* Main Showcase */}
                <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden group shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={projects[currentIndex].image}
                                alt={projects[currentIndex].title}
                                fill
                                className="object-cover"
                            />
                            {/* Overlay - Adjusted for Light Theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-[#D4AF37] font-bold tracking-wider text-sm md:text-base uppercase mb-2 block">
                                {projects[currentIndex].category}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">
                                {projects[currentIndex].title}
                            </h3>
                            <p className="text-gray-200 md:text-xl">
                                Client: <span className="text-white">{projects[currentIndex].client}</span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-8 right-8 flex gap-3 z-30">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "w-8 bg-[#D4AF37]"
                                    : "w-2 bg-white/30 hover:bg-white"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all duration-300 shadow-sm">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
