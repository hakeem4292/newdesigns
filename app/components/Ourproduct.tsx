"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

function Ourproduct() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

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

    return (
        <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-black to-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                {/* Section Header */}
                <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
                        Our <span className="text-[#D4AF37]">Products</span>
                    </h2>
                    <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto px-4">
                        Premium printing solutions for all your business needs
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm active:bg-white/[0.05] active:border-[#D4AF37]/30 md:hover:bg-white/[0.05] md:hover:border-[#D4AF37]/30 transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-active:scale-105 md:group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>

                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg group-active:text-[#D4AF37] md:group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
                                    {product.title}
                                </h3>
                            </div>

                            {/* Hover Border Glow */}
                            <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-active:opacity-100 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                                }}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className={`text-center mt-8 sm:mt-12 md:mt-16 transition-all duration-800 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <button className="group flex items-center gap-2 sm:gap-3 mx-auto bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 active:shadow-[0_0_30px_rgba(212,175,55,0.5)] active:-translate-y-1 md:hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] md:hover:-translate-y-1 touch-manipulation">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-active:translate-x-1 md:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Ourproduct;
