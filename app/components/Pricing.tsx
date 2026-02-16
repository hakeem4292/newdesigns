"use client";
import { motion } from "framer-motion";

const pricingPlans = [
    {
        title: "Business Essentials",
        price: "150",
        description: "Perfect for startups and small businesses",
        features: ["500 Business Cards", "100 Letterheads", "Premium Matte Finish", "Basic Design Support"],
        highlight: false,
        icon: "💼"
    },
    {
        title: "Marketing Pro",
        price: "450",
        description: "Comprehensive branding for growth",
        features: ["1000 Brochures", "5 Roll-up Banners", "Social Media Graphics", "Priority Support"],
        highlight: true,
        icon: "📈"
    },
    {
        title: "Corporate Identity",
        price: "999",
        description: "Complete solution for established brands",
        features: ["Full Stationery Suite", "Custom Gift Items", "Premium Finishes", "Dedicated Designer"],
        highlight: false,
        icon: "🏢"
    }
];

import StarField from "./StarField";

export default function Pricing() {
    return (
        <section className="py-12 bg-gradient-to-b from-[#050505] via-black to-[#050505] relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background */}
            <div className="absolute inset-0 z-0">
                <StarField />
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                        Transparent <span className="text-[#D4AF37]">Pricing</span>
                    </h2>
                    <p className="text-sm text-gray-400 max-w-xl mx-auto">
                        Competitive rates with no hidden costs for every business need.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group rounded-3xl p-6 border backdrop-blur-sm transition-all duration-500 ${plan.highlight
                                ? "bg-white/[0.08] border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.1)] md:scale-105 z-10"
                                : "bg-white/[0.03] border-white/10 hover:bg-white/[0.05] hover:border-[#D4AF37]/30"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                                    POPULAR
                                </div >
                            )}

                            <div className="text-3xl mb-4">{plan.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-1.5">{plan.title}</h3>
                            <p className="text-xs text-gray-400 mb-5">{plan.description}</p>

                            <div className="mb-6">
                                <span className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">Starting at</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[#D4AF37] text-lg font-bold">AED</span>
                                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                                        <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${plan.highlight
                                ? "bg-[#D4AF37] text-black hover:bg-[#F4D03F] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                                : "bg-white/10 text-white hover:bg-white/20"
                                }`}>
                                Get Quote
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
