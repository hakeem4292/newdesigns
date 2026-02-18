"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Crown,
    Star,
    CheckCircle2,
    Trophy,
    Clock,
    ShieldCheck,
    Zap
} from "lucide-react";

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label, icon: Icon }: { value: string; label: string; icon: any }) => (
    <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default group">
        <div className="mb-1.5 sm:mb-2 p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#C9A84C]/20 transition-colors">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A84C]" />
        </div>
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-white font-lexend">{value}</span>
        <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider text-zinc-400 font-medium text-center">{label}</span>
    </div>
);

// --- ANIMATED BACKGROUND ---
function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let W = 0, H = 0;

        const PARTICLE_COUNT = 80;
        type Particle = {
            x: number; y: number;
            vx: number; vy: number;
            size: number; opacity: number;
            opacityDir: number;
            color: string;
        };
        let particles: Particle[] = [];

        const GOLD_COLORS = [
            "rgba(201,168,76,",
            "rgba(212,175,55,",
            "rgba(255,215,100,",
            "rgba(180,140,40,",
        ];

        const init = () => {
            W = canvas.width = canvas.offsetWidth;
            H = canvas.height = canvas.offsetHeight;
            particles = Array.from({ length: PARTICLE_COUNT }, () => ({
                x: Math.random() * W,
                y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3 - 0.08,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
                opacityDir: Math.random() > 0.5 ? 0.004 : -0.004,
                color: GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)],
            }));
        };

        let t = 0;
        const draw = () => {
            t += 0.003;
            ctx.clearRect(0, 0, W, H);

            // Deep dark base
            const bg = ctx.createLinearGradient(0, 0, W, H);
            bg.addColorStop(0, "#08080a");
            bg.addColorStop(0.5, "#0e0d08");
            bg.addColorStop(1, "#0a0906");
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            // Gold glow center-right
            const glow1 = ctx.createRadialGradient(W * 0.72, H * 0.38, 0, W * 0.72, H * 0.38, W * 0.5);
            glow1.addColorStop(0, "rgba(201,168,76,0.1)");
            glow1.addColorStop(0.5, "rgba(180,130,30,0.04)");
            glow1.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = glow1;
            ctx.fillRect(0, 0, W, H);




            // Animated diagonal light beam
            ctx.save();
            ctx.globalAlpha = 0.03 + 0.015 * Math.sin(t * 0.7);
            const beam = ctx.createLinearGradient(W * 0.3, 0, W * 0.7, H);
            beam.addColorStop(0, "rgba(201,168,76,0)");
            beam.addColorStop(0.4, "rgba(201,168,76,0.7)");
            beam.addColorStop(0.6, "rgba(201,168,76,0.7)");
            beam.addColorStop(1, "rgba(201,168,76,0)");
            ctx.fillStyle = beam;
            ctx.beginPath();
            const beamShift = 50 * Math.sin(t * 0.25);
            ctx.moveTo(W * 0.45 + beamShift, 0);
            ctx.lineTo(W * 0.55 + beamShift, 0);
            ctx.lineTo(W * 0.72 + beamShift, H);
            ctx.lineTo(W * 0.62 + beamShift, H);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

            // Gold particles
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.opacity += p.opacityDir;
                if (p.opacity > 0.6 || p.opacity < 0.05) p.opacityDir *= -1;
                if (p.x < 0) p.x = W;
                if (p.x > W) p.x = 0;
                if (p.y < 0) p.y = H;
                if (p.y > H) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${p.opacity.toFixed(2)})`;
                ctx.fill();
            });

            // Bottom fade
            const bottomFade = ctx.createLinearGradient(0, H * 0.7, 0, H);
            bottomFade.addColorStop(0, "rgba(9,9,9,0)");
            bottomFade.addColorStop(1, "rgba(9,9,9,0.9)");
            ctx.fillStyle = bottomFade;
            ctx.fillRect(0, 0, W, H);

            animId = requestAnimationFrame(draw);
        };

        const onResize = () => init();
        window.addEventListener("resize", onResize);
        init();
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: "block" }}
        />
    );
}

// --- MAIN COMPONENT ---
export default function Hero() {
    return (
        <div className="relative w-full h-[85svh] md:h-[100svh] bg-zinc-950 text-white overflow-hidden font-sans flex items-center">
            <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-in {
          animation: fadeSlideIn 0.9s cubic-bezier(0.22,1,0.36,1) forwards;
          opacity: 0;
        }
        .hfi-1 { animation-delay: 0.1s; }
        .hfi-2 { animation-delay: 0.25s; }
        .hfi-3 { animation-delay: 0.4s; }
        .hfi-4 { animation-delay: 0.55s; }
        .hfi-5 { animation-delay: 0.7s; }
      `}</style>

            {/* === LAYER 1: ANIMATED CANVAS === */}
            <div className="absolute inset-0 z-0">
                <AnimatedBackground />
            </div>

            {/* === LAYER 2: HERO VIDEO === */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-78"
                    style={{ filter: "sepia(0.3) saturate(1.2) hue-rotate(-10deg)" }}
                >
                    <source src="/vedio/HEROvedio.mp4" type="video/mp4" />
                </video>
                {/* Warm overlay to neutralize any remaining blue cast */}
                <div className="absolute inset-0 bg-amber-950/20" />
                {/* Left-side text protection — lighter so image shows through */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                {/* Top and bottom edge blending */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-zinc-950/80" />
            </div>

            {/* === CONTENT === */}
            <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-6 lg:px-8 pt-[9rem] pb-8 sm:pt-[10rem] sm:pb-12 md:pt-[11rem] md:pb-14 lg:pt-[12rem] lg:pb-20">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">

                    {/* --- LEFT COLUMN --- */}
                    <div className="flex-1 max-w-2xl space-y-4 sm:space-y-5">



                        {/* Heading */}
                        <h1 className="hero-fade-in hfi-2 font-lexend font-bold tracking-tight leading-[1.05]">
                            <span className="block text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#C9A961] via-[#D4AF37] to-[#E8C84A]">
                                Premium Printing.
                            </span>
                            <span className="block text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mt-1 sm:mt-2">
                                Exceptional Design.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="hero-fade-in hfi-3 max-w-lg text-base sm:text-lg md:text-xl text-zinc-300/90 leading-relaxed font-light">
                            Premium digital printing & creative design in Sharjah — precision meets passion.
                        </p>

                        {/* CTA Buttons - side by side on mobile */}
                        <div className="hero-fade-in hfi-4 grid grid-cols-2 sm:flex sm:flex-row gap-3">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#C9A961] to-[#D4AF37] px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(201,168,76,0.45)] active:scale-[0.98]"
                            >
                                Get a Quote
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/services"
                                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-[#C9A84C]/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                            >
                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A84C]" />
                                Our Services
                            </Link>
                        </div>

                        {/* Mobile-only compact stats */}
                        <div className="hero-fade-in hfi-5 flex lg:hidden items-center justify-between gap-2 mt-2 px-1">
                            <div className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-[#C9A84C]" />
                                <span className="text-xs font-semibold text-white">20+ Years</span>
                            </div>
                            <div className="w-px h-4 bg-white/15" />
                            <div className="flex items-center gap-2">
                                <Zap className="w-3.5 h-3.5 text-[#C9A84C]" />
                                <span className="text-xs font-semibold text-white">24/7 Support</span>
                            </div>
                            <div className="w-px h-4 bg-white/15" />
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
                                <span className="text-xs font-semibold text-white">100% Quality</span>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: STATS CARD (hidden on mobile) --- */}
                    <div className="hero-fade-in hfi-5 hidden lg:block lg:w-auto lg:min-w-[340px] lg:max-w-[400px]">
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-black/40 p-4 sm:p-5 md:p-6 backdrop-blur-2xl shadow-2xl shadow-black/40">
                            {/* Glow */}
                            <div className="absolute top-0 right-0 -mr-12 -mt-12 h-48 w-48 rounded-full bg-[#C9A84C]/10 blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 h-32 w-32 rounded-full bg-[#C9A84C]/5 blur-2xl pointer-events-none" />

                            <div className="relative z-10">
                                {/* Trophy header */}
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/20">
                                        <Trophy className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#C9A84C]" />
                                    </div>
                                    <div>
                                        <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-lexend">2000+</div>
                                        <div className="text-xs sm:text-sm font-medium text-[#C9A84C] uppercase tracking-wider">Happy Clients</div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                                    <div className="flex justify-between text-xs sm:text-sm">
                                        <span className="text-zinc-400 font-medium">Project Success Rate</span>
                                        <span className="text-[#C9A84C] font-bold">99.9%</span>
                                    </div>
                                    <div className="h-1.5 sm:h-2 w-full overflow-hidden rounded-full bg-white/5">
                                        <div className="h-full w-[99.9%] rounded-full bg-gradient-to-r from-[#C9A961] to-[#D4AF37]" />
                                    </div>
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4 sm:mb-5" />

                                {/* Mini Stats */}
                                <div className="grid grid-cols-5 gap-2 text-center items-center">
                                    <StatItem value="20+" label="Years Exp." icon={Clock} />
                                    <div className="w-px h-10 sm:h-12 bg-white/10 mx-auto" />
                                    <StatItem value="24/7" label="Support" icon={Zap} />
                                    <div className="w-px h-10 sm:h-12 bg-white/10 mx-auto" />
                                    <StatItem value="100%" label="Quality" icon={ShieldCheck} />
                                </div>

                                {/* Tag Pills */}
                                <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 justify-center">
                                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 sm:px-3 text-[9px] sm:text-[10px] font-bold tracking-wide text-zinc-300">
                                        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
                                        </span>
                                        AVAILABLE NOW
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5 px-2.5 py-1 sm:px-3 text-[9px] sm:text-[10px] font-bold tracking-wide text-[#C9A84C]">
                                        <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C9A84C]" />
                                        PREMIUM CHOICE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
