"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import StarField from "./StarField";

const testimonials = [
    {
        id: 1,
        name: "Karan Maheshwar",
        role: "Business Owner",
        review: "The t-shirts looked amazing. Soft fabric and the print quality too is really good.",
        rating: 5,
        company: "Tech Startup",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
        verified: true
    },
    {
        id: 2,
        name: "Sarah Ahmed",
        role: "Marketing Director",
        review: "Outstanding service! The brochures were delivered on time and exceeded our expectations.",
        rating: 5,
        company: "Digital Agency",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
        verified: true
    },
    {
        id: 3,
        name: "Rajesh Kumar",
        role: "Event Manager",
        review: "Professional team with great attention to detail. Our event banners turned out perfect.",
        rating: 5,
        company: "Events Co.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
        verified: true
    },
    {
        id: 4,
        name: "Priya Sharma",
        role: "Restaurant Owner",
        review: "The menu cards and signage for our restaurant are stunning. Great quality and fast turnaround time.",
        rating: 5,
        company: "Culinary Delights",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
        verified: true
    },
];

export default function CustomerReviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section className="py-12 bg-gradient-to-b from-white via-pink-50 to-white relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

            {/* Star Field Background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <StarField />
            </div>

            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What our Customers Say,
                    </h2>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative min-h-[400px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            className="absolute w-full"
                        >
                            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-16 shadow-lg relative overflow-hidden">
                                {/* Decorative gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent opacity-50" />

                                <div className="relative z-10 text-center">
                                    {/* Star Rating */}
                                    <div className="flex justify-center gap-2 mb-8">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <motion.svg
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="w-8 h-8 fill-[#D4AF37]"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </motion.svg>
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                                        {testimonials[currentIndex].review}
                                    </p>

                                    {/* Customer Profile */}
                                    <div className="flex flex-col items-center mb-6">
                                        <div className="relative w-20 h-20 mb-4">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="rounded-full object-cover w-full h-full border-2 border-[#D4AF37]"
                                            />
                                            {testimonials[currentIndex].verified && (
                                                <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    VERIFIED
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-lg font-bold text-gray-900 mb-1">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {testimonials[currentIndex].role} • <span className="text-[#D4AF37]">{testimonials[currentIndex].company}</span>
                                        </p>
                                    </div>

                                    {/* Navigation Dots */}
                                    <div className="flex justify-center gap-2 mt-8">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                    ? "w-8 bg-[#D4AF37]"
                                                    : "w-2 bg-gray-300 hover:bg-[#D4AF37]/50"
                                                    }`}
                                                aria-label={`Go to testimonial ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
