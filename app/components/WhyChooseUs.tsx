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

import StarField from "./StarField";

export default function WhyChooseUs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-10 md:py-16 bg-gradient-to-b from-[#050505] via-black to-[#050505] relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background */}
            <div className="absolute inset-0 z-0">
                <StarField />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-10"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3">
                        Why <span className="text-[#D4AF37]">Choose Us</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-4">
                        Exceptional quality and service tailored to your business needs
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className={`relative rounded-2xl ${reason.bgColor} border border-white/5 p-5 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-white/[0.05]`}>
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl shrink-0">{reason.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                                            {reason.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Compact Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-10 md:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {[
                        { number: "500+", label: "Clients" },
                        { number: "10K+", label: "Projects" },
                        { number: "15+", label: "Years" },
                        { number: "99%", label: "Success" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                            <div className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-0.5">{stat.number}</div>
                            <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
