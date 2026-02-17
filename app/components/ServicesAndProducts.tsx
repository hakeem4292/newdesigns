"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import StarField from "./StarField";

const services = [
    {
        title: "Business Cards",
        subtitle: "Printing Services",
        image: "/service/printingservice.webp",
    },
    {
        title: "Dairy & Calendar",
        subtitle: "Custom Designs",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&q=80",
    },
    {
        title: "Bags & Packaging",
        subtitle: "Premium Quality",
        image: "/service/BAGSPACKAGING.webp",
    },
    {
        title: "Gift Items",
        subtitle: "Corporate Gifting",
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500&q=80",
    },
    {
        title: "Badges & Indoor Signs",
        subtitle: "Professional Signage",
        image: "/service/badges.jpg",
    },
    {
        title: "T-Shirt & Uniform",
        subtitle: "Custom Apparel",
        image: "/service/uniform.jpg",
    },
    {
        title: "Indoor & Outdoor",
        subtitle: "Advertising Solutions",
        image: "/service/IndoorOutdoor.jpg",
    },
    {
        title: "Plaques & Trophies",
        subtitle: "Awards & Recognition",
        image: "/service/Wooden-Printed-Plaques-Trophies.jpg",
    },
];

const products = [
    { title: "Business Cards", image: "/products/bussiness cards1.jpg" },
    { title: "Brochures", image: "/products/brochures 31.jpg" },
    { title: "Catalogs", image: "/products/catalouge 21.jpg" },
    { title: "Banners", image: "/products/fabric-banners-dubai.webp" },
    { title: "Letterheads", image: "/products/letter head 11.jpg" },
    { title: "Folders", image: "/products/folder 11.jpg" },
    { title: "Stickers", image: "/products/sticker 31.jpg" },
    { title: "Posters", image: "/products/posters.jpg" },
    { title: "ID Cards", image: "/products/idcard.jpg" },
    { title: "Calendars", image: "/products/calender.jpg" },
    { title: "Shopping Bags", image: "/products/shoopingbags.jpg" },
    { title: "Mugs", image: "/products/mug.jpg" },
];

export default function ServicesAndProducts() {
    const [activeTab, setActiveTab] = useState<"services" | "products">("services");

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-pink-50 to-white relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <StarField />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What We <span className="text-[#D4AF37]">Offer</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mb-6" />
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                        Explore our comprehensive range of printing <span className="text-[#D4AF37]">services</span> and <span className="text-[#D4AF37]">products</span>
                    </p>

                    {/* Tab Navigation */}
                    <div className="flex justify-center gap-4 sm:gap-6">
                        <button
                            onClick={() => setActiveTab("services")}
                            className={`relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 ${activeTab === "services"
                                ? "text-gray-900 bg-white border border-[#D4AF37]/50 shadow-md"
                                : "text-gray-500 bg-white/50 border border-gray-200 hover:bg-white hover:text-gray-900"
                                }`}
                        >
                            Our Services
                            {activeTab === "services" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/50"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab("products")}
                            className={`relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 ${activeTab === "products"
                                ? "text-gray-900 bg-white border border-[#D4AF37]/50 shadow-md"
                                : "text-gray-500 bg-white/50 border border-gray-200 hover:bg-white hover:text-gray-900"
                                }`}
                        >
                            Our Products
                            {activeTab === "products" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/50"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    </div>
                </motion.div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    {activeTab === "services" ? (
                        <motion.div
                            key="services"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Services Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="group relative"
                                    >
                                        {/* Card */}
                                        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden aspect-square transition-all duration-500 hover:border-[#D4AF37] hover:shadow-lg relative cursor-pointer group-hover:-translate-y-2">
                                            {/* Background Image */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${service.image})` }}
                                            />

                                            {/* Light overlay for readability */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 group-hover:to-black/80 transition-all duration-500" />

                                            {/* Hover gradient effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Content */}
                                            <div className="relative z-10 h-full flex flex-col items-start justify-end text-left p-4 sm:p-6">
                                                {/* Title */}
                                                <h3 className="text-sm sm:text-base font-bold text-white mb-1 transition-all duration-300 group-hover:text-[#D4AF37] drop-shadow-md">
                                                    {service.title}
                                                </h3>

                                                {/* Subtitle */}
                                                <p className="text-xs text-gray-200 transition-colors duration-300 group-hover:text-white drop-shadow-sm">
                                                    {service.subtitle}
                                                </p>
                                            </div>

                                            {/* Bottom accent line */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="products"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Products Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                                {products.map((product, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="group relative bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#D4AF37] hover:shadow-lg transition-all duration-500 cursor-pointer hover:-translate-y-2"
                                    >
                                        {/* Image Container */}
                                        <div className="relative aspect-square overflow-hidden">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 transition-opacity duration-500 group-hover:to-black/80" />

                                            {/* Hover gradient effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Title Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 z-10">
                                            <h3 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight drop-shadow-md">
                                                {product.title}
                                            </h3>
                                        </div>

                                        {/* Bottom accent line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12 md:mt-16"
                >
                    <button className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 touch-manipulation w-full sm:w-auto">
                        <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Request Custom Printing
                    </button>
                    <button className="group flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 touch-manipulation w-full sm:w-auto hover:border-[#D4AF37]/50">
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View Full Catalogue
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
