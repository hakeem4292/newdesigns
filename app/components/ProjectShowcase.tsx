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
        <section className="py-16 bg-gradient-to-b from-[#050505] via-black to-[#050505] relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background */}
            <div className="absolute inset-0 z-0">
                <StarField />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6"
                >
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Recent <span className="text-[#D4AF37]">Work</span>
                        </h2>
                        <p className="text-gray-400">
                            See how we bring brands to life through print.
                        </p>
                    </div>
                </motion.div>

                {/* Main Showcase */}
                <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden group">
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
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
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
                            <p className="text-gray-300 md:text-xl">
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
            </div>
        </section>
    );
}
