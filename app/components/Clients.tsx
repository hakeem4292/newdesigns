'use client';

import React from 'react';
import Image from 'next/image';
import StarField from './StarField';

import { motion } from "framer-motion";

function Clients() {
    const clients = [
        { name: 'Trade Links Group', logo: '/1652359856-34-trade-links-group.png' },
        { name: 'Bank of Baroda', logo: '/BankOfBarodaLogo.svg' },
        { name: 'Justmop Plus', logo: '/Justmop-Plus.jpg' },
        { name: 'Peugeot', logo: '/Peugeot_2021_Logo.svg' },
        { name: 'Aram Group', logo: '/aram group.jpg' },
        { name: 'Lincoln Electric', logo: '/lincoln_electric_india_logo.jpg' },
        { name: 'Mehar Link', logo: '/meharlink.jpg' },
        { name: 'Rational', logo: '/rational.jpg' },
        { name: 'TCIS Inspect', logo: '/tcisinspect_logo.jpg' },
        { name: 'Top Rider', logo: '/top rider.jpg' },
        { name: 'Zwei', logo: '/zwei.jpg' },
    ];

    return (
        <section className="relative py-12 bg-gradient-to-b from-[#050505] via-black to-[#050505] overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background */}
            <div className="absolute inset-0 z-0">
                <StarField />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 md:px-10 relative z-10"
            >
                {/* Simple Heading */}
                <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-white/80">
                        Some of our <span className="text-[#D4AF37]">happy clients</span>
                    </h3>
                    <div className="w-16 h-0.5 bg-[#D4AF37] mt-2"></div>
                </div>

                {/* Auto-scrolling Container */}
                <div className="relative">
                    <div className="flex gap-4 animate-scroll w-max">
                        {/* First set of logos */}
                        {clients.map((client, i) => (
                            <div
                                key={`first-${i}`}
                                className="flex-shrink-0 w-40 h-30 bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex items-center justify-center transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-white/[0.05] backdrop-blur-sm relative overflow-hidden"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain p-3"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {clients.map((client, i) => (
                            <div
                                key={`second-${i}`}
                                className="flex-shrink-0 w-40 h-30 bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex items-center justify-center transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-white/[0.05] backdrop-blur-sm relative overflow-hidden"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain p-3"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Clients;