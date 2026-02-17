"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const features = [
    {
        icon: (<span>🏆</span>),
        title: "Premium Quality",
        description: "State-of-the-art printing technology ensuring exceptional quality in every project",
        color: "from-yellow-500 to-amber-600",
        bgColor: "bg-yellow-500/10"
    },
    {
        icon: (<span>⚡</span>),
        title: "Fast Turnaround",
        description: "Quick delivery without compromising on quality, meeting your deadlines consistently",
        color: "from-blue-500 to-cyan-600",
        bgColor: "bg-blue-500/10"
    },
    {
        icon: (<span>💰</span>),
        title: "Competitive Pricing",
        description: "Best value for money with transparent pricing and no hidden costs",
        color: "from-green-500 to-emerald-600",
        bgColor: "bg-green-500/10"
    },
    {
        icon: (<span>👥</span>),
        title: "Expert Team",
        description: "Experienced professionals dedicated to bringing your vision to life",
        color: "from-purple-500 to-violet-600",
        bgColor: "bg-purple-500/10"
    },
    {
        icon: (<span>❤️</span>),
        title: "Customer Satisfaction",
        description: "Dedicated support and personalized service for every client's unique needs",
        color: "from-pink-500 to-rose-600",
        bgColor: "bg-pink-500/10"
    },
    {
        icon: (<span>🚀</span>),
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
        <section className="py-10 md:py-16 bg-gradient-to-b from-white via-pink-50 to-white relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background - Opacity Reduced */}
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
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose Us
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] mx-auto rounded-full" />
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="text-[#D4AF37] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {feature.icon.props.children}
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D4AF37] transition-colors">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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
