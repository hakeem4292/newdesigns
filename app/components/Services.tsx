"use client";
import { motion } from "framer-motion";

const services = [
    {
        title: "Printing Services",
        subtitle: "Business Cards Printing in Dubai",
        image: "/service/printingservice.webp",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
    },
    {
        title: "Dairy & Calendar",
        subtitle: "Business Cards Printing in Dubai",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&q=80",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Bags & Packaging",
        subtitle: "Business Cards Printing in Dubai",
        image: "/service/BAGSPACKAGING.webp",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        ),
    },
    {
        title: "Gift Item",
        subtitle: "Business Cards Printing in Dubai",
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
        ),
    },
    {
        title: "Badges & Indoor Signs",
        subtitle: "Business Cards Printing in Dubai",
        image: "/service/badges.jpg",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
            </svg>
        ),
    },
    {
        title: "T-Shirt & Uniform",
        subtitle: "Business Cards Printing in Dubai",
        image: "/service/uniform.jpg",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Indoor & Outdoor",
        subtitle: "Business Cards Printing in Dubai",
        image: "/service/indoorOutdoor.jpg",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "Plaques & Trophies",
        subtitle: "Business Cards Printing in Dubai",
        image: "/service/Wooden-Printed-Plaques-Trophies.jpg",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-gradient-to-b from-white via-pink-50 to-white relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

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
                        Our Services
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] mx-auto rounded-full" />
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden aspect-square transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10 relative shadow-sm">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-10 group-hover:opacity-20"
                                    style={{ backgroundImage: `url(${service.image})` }}
                                />

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col items-start justify-end text-left p-6">
                                    {/* Icon container */}
                                    <div className="mb-3 text-[#D4AF37] transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-md">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {service.icon.props.children}
                                        </svg>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base font-bold text-gray-900 mb-1 transition-all duration-300 group-hover:text-[#D4AF37]">
                                        {service.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
                                        {service.subtitle}
                                    </p>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}