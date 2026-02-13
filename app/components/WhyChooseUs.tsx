"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const reasons = [
    {
        icon: "🏆",
        title: "Premium Quality",
        description: "State-of-the-art printing technology ensuring exceptional quality in every project",
        color: "from-yellow-500 to-amber-600",
        bgColor: "bg-yellow-500/10"
    },
    {
        icon: "⚡",
        title: "Fast Turnaround",
        description: "Quick delivery without compromising on quality, meeting your deadlines consistently",
        color: "from-blue-500 to-cyan-600",
        bgColor: "bg-blue-500/10"
    },
    {
        icon: "💰",
        title: "Competitive Pricing",
        description: "Best value for money with transparent pricing and no hidden costs",
        color: "from-green-500 to-emerald-600",
        bgColor: "bg-green-500/10"
    },
    {
        icon: "👥",
        title: "Expert Team",
        description: "Experienced professionals dedicated to bringing your vision to life",
        color: "from-purple-500 to-violet-600",
        bgColor: "bg-purple-500/10"
    },
    {
        icon: "❤️",
        title: "Customer Satisfaction",
        description: "Dedicated support and personalized service for every client's unique needs",
        color: "from-pink-500 to-rose-600",
        bgColor: "bg-pink-500/10"
    },
    {
        icon: "🚀",
        title: "Latest Technology",
        description: "Cutting-edge equipment and innovative techniques for superior results",
        color: "from-orange-500 to-red-600",
        bgColor: "bg-orange-500/10"
    }
];

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="inline-block mb-4"
                    >
                        <span className="text-5xl md:text-6xl">⭐</span>
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                        <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
                            Why Choose Us
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        Discover what makes us the preferred choice for thousands of satisfied clients
                    </p>
                </motion.div>

                {/* Reasons Grid - Bento Box Style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="group relative"
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className={`relative h-full min-h-[280px] sm:min-h-[300px] rounded-3xl overflow-hidden ${reason.bgColor} backdrop-blur-xl border border-white/10 p-6 sm:p-8`}
                            >
                                {/* Animated gradient background */}
                                <motion.div
                                    animate={{
                                        opacity: hoveredIndex === index ? 1 : 0,
                                    }}
                                    className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 transition-opacity duration-500`}
                                />

                                {/* Shimmer effect */}
                                <motion.div
                                    animate={{
                                        x: hoveredIndex === index ? ["0%", "200%"] : "0%",
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                                />

                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Icon */}
                                    <motion.div
                                        animate={{
                                            scale: hoveredIndex === index ? 1.2 : 1,
                                            rotate: hoveredIndex === index ? 360 : 0,
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="text-6xl sm:text-7xl mb-4 sm:mb-6"
                                    >
                                        {reason.icon}
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                                        {reason.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {reason.description}
                                    </p>

                                    {/* Decorative corner accent */}
                                    <motion.div
                                        animate={{
                                            scale: hoveredIndex === index ? 1 : 0,
                                        }}
                                        className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-3xl"
                                    />
                                    <motion.div
                                        animate={{
                                            scale: hoveredIndex === index ? 1 : 0,
                                        }}
                                        className="absolute bottom-4 left-4 w-16 h-16 sm:w-20 sm:h-20 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-3xl"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                >
                    {[
                        { number: "500+", label: "Happy Clients" },
                        { number: "10K+", label: "Projects Done" },
                        { number: "15+", label: "Years Experience" },
                        { number: "99%", label: "Satisfaction Rate" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent mb-2"
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-xs sm:text-sm md:text-base text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-bold text-black rounded-full overflow-hidden group"
                    >
                        <motion.div
                            animate={{
                                x: ["-100%", "100%"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37]"
                        />
                        <span className="relative z-10">Start Your Project Today</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
