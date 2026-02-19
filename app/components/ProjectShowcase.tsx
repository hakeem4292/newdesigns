"use client";
import { motion, AnimatePresence, useSpring, useTransform, useMotionValue, useInView } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";

const ProjectShowcaseThree = dynamic(() => import("./ProjectShowcaseThree"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-pink-50/40" />,
});

const projects = [
    {
        id: 1,
        title: "Coffee Branding & Collateral",
        category: "Branding",
        image: "/service/luxury coffe branding.jpg",
        client: "Morning Brew Café",
        description:
            "Complete brand identity system including logo, packaging, and marketing collateral for a premium café.",
        year: "2024",
    },
    {
        id: 2,
        title: "Custom Eco-Friendly Bags",
        category: "Packaging",
        image: "/service/custombag.jpg",
        client: "Organic Market",
        description:
            "Sustainable packaging design with custom prints, eco-friendly materials, and vibrant brand colors.",
        year: "2024",
    },
    {
        id: 3,
        title: "Personalized Ceramic Mugs",
        category: "Merchandise",
        image: "/products/mug.jpg",
        client: "Creative Studios",
        description:
            "High-quality ceramic mug printing with custom artwork, perfect for corporate gifting and brand promotion.",
        year: "2023",
    },
    {
        id: 4,
        title: "Premium Product Packaging",
        category: "Packaging",
        image: "/service/BAGSPACKAGING.webp",
        client: "Luxe Essentials",
        description:
            "Luxury product packaging with gold foil accents, embossing, and premium unboxing experience.",
        year: "2025",
    },
];

/* ==========================================
   3D TILT CONTAINER — Subtle perspective
   ========================================== */
function TiltContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
        stiffness: 150,
        damping: 20,
    });

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    }

    function handleLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{
                perspective: 1000,
            }}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            className="w-full h-full relative z-10"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

/* ==========================================
   MAIN COMPONENT
   ========================================== */
export default function ProjectShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const timerRef = useRef<NodeJS.Timeout>(null);
    const progressIntervalRef = useRef<NodeJS.Timeout>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    const AUTO_DELAY = 3000; // 3 seconds per slide

    // Reset progress whenever index changes
    useEffect(() => {
        setProgress(0);
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

        const startTime = Date.now();
        progressIntervalRef.current = setInterval(() => {
            const passed = Date.now() - startTime;
            const percentage = Math.min((passed / AUTO_DELAY) * 100, 100);
            setProgress(percentage);
        }, 50);

        return () => {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, [currentIndex]);

    // Auto-advance logic
    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            nextSlide();
        }, AUTO_DELAY);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-white">
            {/* Three.js Background — Only render when in view for performance */}
            <div ref={ref} className="absolute inset-0 z-0 opacity-30">
                {isInView && <ProjectShowcaseThree />}
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.3em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[#D4AF37] font-semibold text-xs md:text-sm uppercase tracking-[0.2em] block mb-3"
                    >
                        Our Portfolio
                    </motion.span>
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-5 font-[var(--font-oswald)]">
                        Featured Projects
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="h-[3px] bg-gradient-to-r from-transparent to-[#D4AF37] rounded-full"
                        />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="h-[3px] bg-gradient-to-l from-transparent to-[#D4AF37] rounded-full"
                        />
                    </div>
                    <p className="mt-5 text-gray-500 max-w-xl mx-auto text-sm md:text-lg font-[var(--font-sora)]">
                        A showcase of our finest work — from luxury branding to
                        premium packaging solutions
                    </p>
                </motion.div>

                {/* Main Carousel Area */}
                <div className="relative h-[650px] md:h-[550px] w-full">
                    <TiltContainer>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                                className="w-full h-full bg-white/80 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-2xl border border-white/40 flex flex-col md:flex-row group"
                            >
                                {/* Image Half */}
                                <div className="w-full md:w-1/2 h-[50%] md:h-full relative overflow-hidden">
                                    <Image
                                        src={projects[currentIndex].image}
                                        alt={projects[currentIndex].title}
                                        fill
                                        className="object-cover transition-transform duration-[4s] ease-linear scale-100 group-hover:scale-110"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                    {/* Category Floating Badge */}
                                    <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
                                        <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20 shadow-lg">
                                            {projects[currentIndex].category}
                                        </span>
                                    </div>

                                    {/* Mobile Client Overlay */}
                                    <div className="absolute bottom-4 left-6 md:hidden z-10 text-white">
                                        <p className="text-[10px] uppercase tracking-wider opacity-80">Client</p>
                                        <p className="font-semibold text-sm">{projects[currentIndex].client}</p>
                                    </div>
                                </div>

                                {/* Content Half */}
                                <div className="w-full md:w-1/2 h-[50%] md:h-full p-8 md:p-14 flex flex-col justify-center relative bg-gradient-to-br from-white/50 to-amber-50/50">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="relative z-10"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-[2px] bg-[#D4AF37]" />
                                            <span className="text-[#D4AF37] font-bold text-sm tracking-widest font-[var(--font-sora)]">
                                                0{projects[currentIndex].id} / 0{projects.length}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1] font-[var(--font-oswald)]">
                                            {projects[currentIndex].title}
                                        </h3>

                                        <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-8 md:mb-12 font-[var(--font-sora)]">
                                            {projects[currentIndex].description}
                                        </p>

                                        <div className="hidden md:flex items-center justify-between border-t border-gray-200 pt-8">
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                                                    Client
                                                </p>
                                                <p className="text-gray-900 font-bold text-lg font-[var(--font-sora)]">
                                                    {projects[currentIndex].client}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                                                    Year
                                                </p>
                                                <p className="text-gray-900 font-bold text-lg font-[var(--font-sora)]">
                                                    {projects[currentIndex].year}
                                                </p>
                                            </div>
                                            <button className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-white shadow-lg shadow-[#D4AF37]/30 hover:bg-[#B8960F] transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                            </button>
                                        </div>
                                    </motion.div>

                                    {/* Large decorative number bg */}
                                    <div className="absolute -bottom-10 -right-10 text-[200px] font-bold text-[#D4AF37]/5 font-[var(--font-oswald)] leading-none select-none pointer-events-none">
                                        {projects[currentIndex].id}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </TiltContainer>

                    {/* Progress Bar (Bottom Line) */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 z-20 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#D4AF37]"
                            style={{ width: `${progress}%` }}
                            transition={{ ease: "linear", duration: 0.1 }}
                        />
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-10">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "w-8 bg-[#D4AF37]"
                                : "w-2 bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
