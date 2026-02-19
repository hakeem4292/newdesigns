"use client";

import React, { useRef, useMemo, useCallback, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
    MeshDistortMaterial,
    MeshTransmissionMaterial,
    Sparkles,
    Environment,
} from "@react-three/drei";
import * as THREE from "three";

/* ============================================================
   STATIC GOLD METALLIC SHAPE
   ============================================================ */
function GoldShape({
    position,
    geometry,
    scale = 1,
    distort = 0.2,
    rotation = [0, 0, 0],
    isMobile,
}: {
    position: [number, number, number];
    geometry: "torus" | "icosahedron" | "octahedron";
    scale?: number;
    distort?: number;
    rotation?: [number, number, number];
    isMobile?: boolean; // Mobile Override
}) {
    const geo = useMemo(() => {
        switch (geometry) {
            case "torus":
                return <torusKnotGeometry args={[1, 0.35, 48, 12]} />;
            case "icosahedron":
                return <icosahedronGeometry args={[1, 1]} />;
            case "octahedron":
                return <octahedronGeometry args={[1, 0]} />;
        }
    }, [geometry]);

    return (
        <mesh position={position} scale={scale} castShadow rotation={rotation}>
            {geo}
            {/* Ultra-Performance: Standard Material Only */}
            <meshStandardMaterial
                color={isMobile ? "#FFD700" : "#D4AF37"}
                metalness={0.95}
                roughness={0.1}
                emissive={isMobile ? "#FFD700" : "#000000"}
                emissiveIntensity={isMobile ? 0.2 : 0}
            />
        </mesh>
    );
}

/* ===========================================================
   STATIC GLASS CRYSTAL SHAPE
   =========================================================== */
function GlassCrystal({
    position,
    scale = 1,
    rotation = [0, 0, 0],
}: {
    position: [number, number, number];
    scale?: number;
    rotation?: [number, number, number];
}) {
    return (
        <mesh position={position} scale={scale} castShadow rotation={rotation}>
            <dodecahedronGeometry args={[1, 0]} />
            {/* Ultra-Performance: Physical Material (Simulated Glass) */}
            <meshPhysicalMaterial
                color="#F5E6A3"
                metalness={0.1}
                roughness={0.1}
                transparent
                opacity={0.4}
                transmission={0.6} // Just simulates
                thickness={0.5}
                ior={1.5}
            />
        </mesh>
    );
}

/* ========================================
   STATIC GOLD RING
   ======================================== */
function GoldRing({
    position,
    scale = 1,
    rotation = [0, 0, 0],
}: {
    position: [number, number, number];
    scale?: number;
    rotation?: [number, number, number];
}) {
    return (
        <mesh position={position} scale={scale} castShadow rotation={rotation}>
            <torusGeometry args={[1, 0.15, 16, 32]} />
            <meshStandardMaterial
                color="#D4AF37"
                metalness={0.98}
                roughness={0.05}
                envMapIntensity={3}
            />
        </mesh>
    );
}

/* =============================
   STATIC PARTICLE CLOUD
   ============================= */
function StaticGoldParticles({ count = 60 }: { count?: number }) {
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 20;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return arr;
    }, [count]);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#D4AF37"
                transparent
                opacity={0.5}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.NormalBlending}
            />
        </points>
    );
}

/* ============================
   MOBILE DETECTION HOOK
   ============================ */
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

/* =========================================
   SCENE — Composition of all Static elements
   ========================================= */
function Scene({ isMobile }: { isMobile: boolean }) {
    return (
        <>
            {/* Environment — realistic reflections */}
            <Environment preset="city" environmentIntensity={isMobile ? 1.2 : 0.8} />

            {/* Lighting */}
            <ambientLight intensity={isMobile ? 1.5 : 0.8} color="#FFF8E1" />
            <pointLight position={[5, 5, 5]} intensity={isMobile ? 2.5 : 2} color="#D4AF37" castShadow={!isMobile} />
            <pointLight position={[-5, -3, 3]} intensity={isMobile ? 1.5 : 1} color="#C9A84C" />

            <pointLight position={[0, 4, -5]} intensity={0.6} color="#FFD700" />
            <spotLight
                position={[0, 8, 0]}
                angle={0.4}
                penumbra={1}
                intensity={0.5}
                color="#FFF8E1"
                castShadow
            />

            {/* Gold Metallic Shapes — Adjusted for Mobile */}
            <GoldShape position={isMobile ? [-2.5, 3.5, -2] : [-3.5, 1.5, -2]} geometry="torus" scale={isMobile ? 0.5 : 0.55} distort={isMobile ? 0.15 : 0.25} rotation={[0.4, 0.4, 0]} isMobile={isMobile} />
            <GoldShape position={isMobile ? [2.5, -1.5, -1] : [3.5, -1, -1]} geometry="icosahedron" scale={isMobile ? 0.6 : 0.7} distort={0.15} rotation={[0.2, 0.6, 0]} isMobile={isMobile} />

            {/* Previously hidden on mobile — now visible */}
            <GoldShape position={[0, 2.5, -3]} geometry="octahedron" scale={0.45} distort={0.3} rotation={[0.5, 0.2, 0]} isMobile={isMobile} />

            {/* Glass Crystal Shapes — Visible on Mobile too */}
            <GlassCrystal position={[-2, -1.5, -1.5]} scale={0.5} rotation={[0.2, 0.2, 0]} />
            <GlassCrystal position={[4, 2.5, -3.5]} scale={0.35} rotation={[0.5, 0.5, 0]} />

            {/* Gold Rings */}
            <GoldRing position={isMobile ? [0, 0, -1.5] : [2, 1.8, -2]} scale={isMobile ? 0.45 : 0.4} rotation={[0.4, 0.2, 0]} />
            <GoldRing position={[-4, -0.5, -3]} scale={0.3} rotation={[1, 0.5, 0]} />

            {/* Static Sparkles */}
            <Sparkles
                count={isMobile ? 30 : 50}
                size={isMobile ? 3 : 2.5}
                speed={0} // Static
                color="#D4AF37"
                scale={isMobile ? [10, 8, 6] : [15, 10, 8]}
                opacity={0.6}
            />

            {/* Static Gold Particles */}
            <StaticGoldParticles count={isMobile ? 40 : 80} />

            {/* Post-processing — REMOVED for Maximum Performance */}
        </>
    );
}

/* ============================
   MAIN EXPORT
   ============================ */
/* ============================
   MAIN EXPORT
   ============================ */
const ThreeBackground = React.memo(() => {
    const isMobile = useIsMobile();

    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                frameloop="demand"
                camera={{ position: [0, 0, 7], fov: isMobile ? 55 : 50 }}
                dpr={[1, 1]}
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: false,
                }}
                style={{ background: "transparent" }}
                shadows={false} // Disabled shadows for max perf
            >
                <Scene isMobile={isMobile} />
            </Canvas>
        </div>
    );
});

ThreeBackground.displayName = "ThreeBackground";
export default ThreeBackground;
