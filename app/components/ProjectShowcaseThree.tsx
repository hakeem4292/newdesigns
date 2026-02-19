"use client";

import React, { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ==========================================
   STATIC WIREFRAME SHAPE
   ========================================== */
function WireframeShape({
    position,
    geometry,
    scale = 1,
    rotation = [0, 0, 0],
}: {
    position: [number, number, number];
    geometry: "torus" | "octahedron" | "icosahedron" | "torusKnot";
    scale?: number;
    rotation?: [number, number, number];
}) {
    const geo = useMemo(() => {
        switch (geometry) {
            case "torus":
                return <torusGeometry args={[1, 0.3, 12, 24]} />;
            case "octahedron":
                return <octahedronGeometry args={[1, 0]} />;
            case "icosahedron":
                return <icosahedronGeometry args={[1, 0]} />;
            case "torusKnot":
                return <torusKnotGeometry args={[0.8, 0.25, 32, 8]} />;
        }
    }, [geometry]);

    return (
        <mesh position={position} scale={scale} rotation={rotation}>
            {geo}
            <meshStandardMaterial
                color="#D4AF37"
                wireframe
                transparent
                opacity={0.35}
                metalness={0.9}
                roughness={0.1}
            />
        </mesh>
    );
}

/* ==========================================
   STATIC GOLD MINI SHAPES
   ========================================== */
function GoldAccent({
    position,
    scale = 0.15,
    rotation = [0, 0, 0],
}: {
    position: [number, number, number];
    scale?: number;
    rotation?: [number, number, number];
}) {
    return (
        <mesh position={position} scale={scale} rotation={rotation}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
                color="#D4AF37"
                metalness={0.95}
                roughness={0.08}
                emissive="#D4AF37"
                emissiveIntensity={0.15}
            />
        </mesh>
    );
}

/* ==========================================
   STATIC PARTICLES
   ========================================== */
function StaticParticles({ count = 60 }: { count?: number }) {
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 20;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
        }
        return arr;
    }, [count]);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#D4AF37"
                transparent
                opacity={0.45}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.NormalBlending}
            />
        </points>
    );
}

/* ==========================================
   MOBILE DETECTION
   ========================================== */
function useIsMobile() {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
}

/* ==========================================
   SCENE — All Static Elements
   ========================================== */
function ProjectScene({ isMobile }: { isMobile: boolean }) {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={isMobile ? 1.2 : 0.6} color="#FFF8E1" />
            <pointLight
                position={[5, 4, 5]}
                intensity={isMobile ? 1.8 : 1.5}
                color="#D4AF37"
            />
            <pointLight
                position={[-5, -3, 3]}
                intensity={isMobile ? 1 : 0.8}
                color="#C9A84C"
            />

            {/* Wireframe Shapes — Visible on Mobile too */}
            <WireframeShape
                position={isMobile ? [-2.5, 2, -3] : [-5, 2, -4]}
                geometry="torus"
                scale={isMobile ? 0.6 : 0.9}
                rotation={[0.5, 0.5, 0]}
            />
            <WireframeShape
                position={isMobile ? [2.5, -1.5, -3] : [5.5, -1.5, -3]}
                geometry="octahedron"
                scale={isMobile ? 0.5 : 0.75}
                rotation={[1, 1, 0]}
            />

            {/* Previously hidden on mobile — now visible */}
            <WireframeShape
                position={[0, 3, -5]}
                geometry="torusKnot"
                scale={0.5}
                rotation={[0.2, 0.4, 0]}
            />
            <WireframeShape
                position={[-4, -2.5, -4]}
                geometry="icosahedron"
                scale={0.55}
                rotation={[0.8, 0.2, 0]}
            />
            <WireframeShape
                position={[4, 3, -5]}
                geometry="torus"
                scale={0.4}
                rotation={[1.5, 0.5, 0]}
            />

            {/* Solid Gold Accents */}
            <GoldAccent position={isMobile ? [-1, 1.5, -1] : [-2, 1.5, -1]} scale={0.12} />
            <GoldAccent position={isMobile ? [1.5, -1, -1.5] : [3, -0.5, -1.5]} scale={0.1} />
            <GoldAccent position={[-3.5, -1, -2]} scale={0.08} />
            <GoldAccent position={[1, 2.5, -2]} scale={0.14} />
            <GoldAccent position={[5, 0.5, -2.5]} scale={0.09} />

            {/* Static Sparkles */}
            <Sparkles
                count={isMobile ? 30 : 50}
                size={isMobile ? 2.5 : 2}
                speed={0} // Static
                color="#D4AF37"
                scale={isMobile ? [8, 6, 4] : [14, 8, 6]}
                opacity={0.5}
            />

            {/* Static Particles */}
            <StaticParticles count={isMobile ? 40 : 80} />

            {/* Post-processing — Keep on desktop for visuals, disable on mobile for perf */}
            {!isMobile && (
                <EffectComposer>
                    <Bloom
                        intensity={0.3}
                        luminanceThreshold={0.5}
                        luminanceSmoothing={0.9}
                        mipmapBlur
                    />
                </EffectComposer>
            )}
        </>
    );
}

/* ==========================================
   MAIN EXPORT
   ========================================== */
/* ==========================================
   MAIN EXPORT
   ========================================== */
export default function ProjectShowcaseThree() {
    // 1. Fix Hydration Mismatch & Window Access
    const [mounted, setMounted] = React.useState(false);
    // Reuse the existing hook logic but validly
    const isMobile = useIsMobile();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                frameloop="demand" // Critical for preventing lag
                camera={{ position: [0, 0, 7], fov: isMobile ? 55 : 50 }}
                dpr={[1, typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.5) : 1]}
                gl={{
                    antialias: !isMobile,
                    alpha: true,
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: false,
                }}
                style={{ background: "transparent" }}
            >
                <ProjectScene isMobile={isMobile} />
            </Canvas>
        </div>
    );
}
