"use client";
import { motion } from "framer-motion";

const processSteps = [
    {
        number: "01",
        title: "Requirement Analysis",
        description: "Understanding client needs and expectations",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Design & Proofing",
        description: "Creative design with client approval",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Printing & Quality Check",
        description: "Precision printing with strict QC",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Finishing & Delivery",
        description: "Timely completion and delivery",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
        ),
    },
];

export default function Ourprocess() {
    return (
        <section className="py-20 bg-[#050505] relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-[#D4AF37] text-2xl">🔷</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            OUR PROCESS
                        </h2>
                    </div>
                    <p className="text-xl text-gray-400 mb-2">How We Work</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] mx-auto rounded-full" />
                </motion.div>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 h-full flex flex-col transition-all duration-500 hover:border-[#D4AF37]/50 hover:bg-white/[0.05] backdrop-blur-sm relative overflow-hidden">
                                {/* Hover gradient effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Step Number */}
                                <div className="relative z-10 text-6xl font-bold text-[#D4AF37]/20 mb-4 transition-all duration-500 group-hover:text-[#D4AF37]/30">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="relative z-10 mb-4 text-[#D4AF37] transform transition-all duration-500 group-hover:scale-110">
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h3 className="relative z-10 text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#D4AF37]">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="relative z-10 text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                                    {step.description}
                                </p>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>

                            {/* Connector Line (hidden on last item and mobile) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#D4AF37]/50 to-transparent z-0" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        This structured workflow ensures <span className="text-[#D4AF37] font-semibold">accuracy</span>,
                        <span className="text-[#D4AF37] font-semibold"> consistency</span>, and
                        <span className="text-[#D4AF37] font-semibold"> customer satisfaction</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
