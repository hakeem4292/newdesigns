"use client";

import React, { useRef, useMemo, useCallback, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    Float,
    MeshDistortMaterial,
    MeshTransmissionMaterial,
    Sparkles,
    Environment,
    MeshReflectorMaterial,
} from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

/* ============================================================
   GOLD METALLIC SHAPE — MeshDistortMaterial for organic warping
   ============================================================ */
function GoldShape({
    position,
    geometry,
    scale = 1,
    speed = 0.3,
    distort = 0.2,
}: {
    position: [number, number, number];
    geometry: "torus" | "icosahedron" | "octahedron";
    scale?: number;
    speed?: number;
    distort?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const basePos = useRef(position);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x += 0.003;
        meshRef.current.rotation.y += 0.005;
        // Subtle mouse-follow
        const mx = state.pointer.x * 0.4;
        const my = state.pointer.y * 0.3;
        meshRef.current.position.x =
            basePos.current[0] + mx + Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        meshRef.current.position.y =
            basePos.current[1] + my + Math.cos(state.clock.elapsedTime * 0.25) * 0.15;
    });

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
        <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position} scale={scale} castShadow>
                {geo}
                <MeshDistortMaterial
                    color="#D4AF37"
                    metalness={0.95}
                    roughness={0.08}
                    distort={distort}
                    speed={1.8}
                    envMapIntensity={2.5}
                />
            </mesh>
        </Float>
    );
}

/* ===========================================================
   GLASS CRYSTAL SHAPE — MeshTransmissionMaterial for refraction
   =========================================================== */
function GlassCrystal({
    position,
    scale = 1,
}: {
    position: [number, number, number];
    scale?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    });

    return (
        <Float speed={0.4} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={position} scale={scale} castShadow>
                <dodecahedronGeometry args={[1, 0]} />
                <MeshTransmissionMaterial
                    backside
                    samples={6}
                    thickness={0.5}
                    chromaticAberration={0.3}
                    anisotropy={0.3}
                    distortion={0.2}
                    distortionScale={0.3}
                    temporalDistortion={0.1}
                    ior={1.5}
                    color="#F5E6A3"
                    roughness={0}
                    transmission={1}
                    envMapIntensity={2}
                />
            </mesh>
        </Float>
    );
}

/* ========================================
   GOLD RING — Simple spinning ring shape
   ======================================== */
function GoldRing({
    position,
    scale = 1,
}: {
    position: [number, number, number];
    scale?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
        meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    });

    return (
        <Float speed={0.5} rotationIntensity={1} floatIntensity={0.8}>
            <mesh ref={meshRef} position={position} scale={scale} castShadow>
                <torusGeometry args={[1, 0.15, 16, 32]} />
                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={0.98}
                    roughness={0.05}
                    envMapIntensity={3}
                />
            </mesh>
        </Float>
    );
}

/* =============================
   PARTICLE CLOUD — Gold dust
   ============================= */
function GoldParticles({ count = 60 }: { count?: number }) {
    const points = useRef<THREE.Points>(null!);

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 20;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return arr;
    }, [count]);

    useFrame((state) => {
        if (!points.current) return;
        points.current.rotation.y = state.clock.elapsedTime * 0.012;
        points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.008) * 0.04;
    });

    return (
        <points ref={points}>
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

/* ==============================================
   SCROLL-LINKED CAMERA — subtle parallax on cam
   ============================================== */
function CameraRig() {
    const { camera } = useThree();

    useFrame((state) => {
        // Gentle breathing motion + mouse influence
        const t = state.clock.elapsedTime;
        camera.position.x = Math.sin(t * 0.1) * 0.3 + state.pointer.x * 0.5;
        camera.position.y = Math.cos(t * 0.15) * 0.2 + state.pointer.y * 0.3;
        camera.lookAt(0, 0, 0);
    });

    return null;
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
   SCENE — Composition of all 3D elements
   ========================================= */
function Scene({ isMobile }: { isMobile: boolean }) {
    return (
        <>
            {/* Environment — realistic reflections */}
            <Environment preset="city" environmentIntensity={isMobile ? 0.5 : 0.8} />

            {/* Lighting */}
            <ambientLight intensity={isMobile ? 1.5 : 0.8} color="#FFF8E1" />
            <pointLight position={[5, 5, 5]} intensity={isMobile ? 2.5 : 2} color="#D4AF37" castShadow={!isMobile} />
            <pointLight position={[-5, -3, 3]} intensity={isMobile ? 1.5 : 1} color="#C9A84C" />
            {!isMobile && (
                <>
                    <pointLight position={[0, 4, -5]} intensity={0.6} color="#FFD700" />
                    <spotLight
                        position={[0, 8, 0]}
                        angle={0.4}
                        penumbra={1}
                        intensity={0.5}
                        color="#FFF8E1"
                        castShadow
                    />
                </>
            )}

            {/* Gold Metallic Shapes — fewer on mobile */}
            <GoldShape position={isMobile ? [-2, 2, -1] : [-3.5, 1.5, -2]} geometry="torus" scale={isMobile ? 0.55 : 0.55} speed={0.4} distort={isMobile ? 0.15 : 0.25} />
            <GoldShape position={isMobile ? [2.5, -1.5, -1] : [3.5, -1, -1]} geometry="icosahedron" scale={isMobile ? 0.6 : 0.7} speed={0.3} distort={0.15} />
            {!isMobile && (
                <GoldShape position={[0, 2.5, -3]} geometry="octahedron" scale={0.45} speed={0.5} distort={0.3} />
            )}

            {/* Glass Crystal Shapes — desktop only (heavy on GPU) */}
            {!isMobile && (
                <>
                    <GlassCrystal position={[-2, -1.5, -1.5]} scale={0.5} />
                    <GlassCrystal position={[4, 2.5, -3.5]} scale={0.35} />
                </>
            )}

            {/* Gold Rings */}
            <GoldRing position={isMobile ? [0, 0, -1.5] : [2, 1.8, -2]} scale={isMobile ? 0.45 : 0.4} />
            {!isMobile && <GoldRing position={[-4, -0.5, -3]} scale={0.3} />}

            {/* Drei Sparkles — reduced counts */}
            <Sparkles
                count={isMobile ? 20 : 40}
                size={isMobile ? 3 : 2.5}
                speed={0.4}
                color="#D4AF37"
                scale={isMobile ? [10, 8, 6] : [15, 10, 8]}
                opacity={0.6}
            />

            {/* Custom gold particles — reduced */}
            <GoldParticles count={isMobile ? 30 : 60} />

            {/* Camera Rig for subtle motion */}
            <CameraRig />

            {/* Post-processing — desktop only for performance */}
            {!isMobile && (
                <EffectComposer>
                    <Bloom
                        intensity={0.4}
                        luminanceThreshold={0.6}
                        luminanceSmoothing={0.9}
                        mipmapBlur
                    />
                    <ChromaticAberration
                        blendFunction={BlendFunction.NORMAL}
                        offset={new THREE.Vector2(0.0005, 0.0005)}
                        radialModulation={false}
                        modulationOffset={0}
                    />
                </EffectComposer>
            )}
        </>
    );
}

/* ============================
   MAIN EXPORT — Canvas wrapper
   ============================ */
export default function ThreeBackground() {
    const isMobile = useIsMobile();

    // Pause rendering when tab is inactive
    const handleCreated = useCallback((state: { gl: THREE.WebGLRenderer }) => {
        const gl = state.gl;
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

        const handleVisibility = () => {
            if (document.hidden) {
                gl.setAnimationLoop(null);
            }
        };
        document.addEventListener("visibilitychange", handleVisibility);
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 7], fov: isMobile ? 55 : 50 }}
                dpr={[1, Math.min(window.devicePixelRatio ?? 1, 1.5)]}
                gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
                style={{ background: "transparent" }}
                shadows={!isMobile}
                onCreated={handleCreated}
            >
                <Scene isMobile={isMobile} />
            </Canvas>
        </div>
    );
}
