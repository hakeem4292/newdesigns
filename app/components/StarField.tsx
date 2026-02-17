"use client";

import React, { useEffect, useRef } from 'react';

export default function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
        let animationFrameId: number;

        const init = () => {
            width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;

            stars = [];
            const numStars = Math.floor((width * height) / 4000); // Density adjustment

            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1 + 1, // Increased size range (1px to 4px)
                    speed: Math.random() * 0.5 + 0.1,
                    opacity: Math.random() * 0.5 + 0.5 // Minimum opacity 0.5
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach(star => {
                ctx.fillStyle = `rgba(236, 72, 153, ${star.opacity})`; // Pink stars
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Move star
                star.y -= star.speed;

                // Loop
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }

                // Twinkle
                star.opacity += (Math.random() - 0.5) * 0.05;
                if (star.opacity < 0.3) star.opacity = 0.3; // Higher minimum opacity
                if (star.opacity > 1) star.opacity = 1;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);
        init();
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 1 }} // Full opacity
        />
    );
}
