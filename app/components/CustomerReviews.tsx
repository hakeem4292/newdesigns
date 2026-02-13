"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
    {
        id: 1,
        name: "Karan Maheshwar",
        role: "Business Owner",
        review: "The t-shirts looked amazing. Soft fabric and the print quality too is really good.",
        rating: 4,
        company: "Tech Startup"
    },
    {
        id: 2,
        name: "Sarah Ahmed",
        role: "Marketing Director",
        review: "Outstanding service! The brochures were delivered on time and exceeded our expectations. The quality is exceptional.",
        rating: 5,
        company: "Digital Agency"
    },
    {
        id: 3,
        name: "Rajesh Kumar",
        role: "Event Manager",
        review: "Professional team with great attention to detail. Our event banners turned out perfect. Highly recommend!",
        rating: 3,
        company: "Events Co."
    },
    {
        id: 4,
        name: "Priya Sharma",
        role: "Restaurant Owner",
        review: "The menu cards and signage for our restaurant are stunning. Great quality and fast turnaround time.",
        rating: 1,
        company: "Culinary Delights"
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
        <section className="py-20 bg-[#050505] relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
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
                            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-12 md:p-16 backdrop-blur-sm relative overflow-hidden">
                                {/* Decorative gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-50" />

                                <div className="relative z-10 text-center">
                                    {/* Star Rating */}
                                    <div className="flex justify-center gap-2 mb-8">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <motion.svg
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="w-8 h-8 fill-purple-500"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </motion.svg>
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                                        {testimonials[currentIndex].review}
                                    </p>

                                    {/* Customer Name */}
                                    <div className="mb-6">
                                        <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 italic">
                                            – {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                                        </p>
                                    </div>

                                    {/* Navigation Dots */}
                                    <div className="flex justify-center gap-2 mt-8">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                    ? "w-8 bg-purple-500"
                                                    : "w-2 bg-gray-400 hover:bg-purple-400"
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
