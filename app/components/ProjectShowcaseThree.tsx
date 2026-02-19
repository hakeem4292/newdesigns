"use client";

import React, { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ==========================================
   WIREFRAME FLOATING SHAPE
   ========================================== */
function WireframeShape({
    position,
    geometry,
    scale = 1,
    rotationSpeed = 0.3,
}: {
    position: [number, number, number];
    geometry: "torus" | "octahedron" | "icosahedron" | "torusKnot";
    scale?: number;
    rotationSpeed?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const basePos = useRef(position);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.elapsedTime;
        meshRef.current.rotation.x += 0.002 * rotationSpeed;
        meshRef.current.rotation.y += 0.003 * rotationSpeed;
        meshRef.current.rotation.z += 0.001 * rotationSpeed;
        // Gentle floating drift
        meshRef.current.position.x =
            basePos.current[0] + Math.sin(t * 0.2) * 0.3;
        meshRef.current.position.y =
            basePos.current[1] + Math.cos(t * 0.15) * 0.25;
    });

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
        <Float speed={0.3} rotationIntensity={0.4} floatIntensity={0.8}>
            <mesh ref={meshRef} position={position} scale={scale}>
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
        </Float>
    );
}

/* ==========================================
   SOLID GOLD MINI SHAPES — Small accents
   ========================================== */
function GoldAccent({
    position,
    scale = 0.15,
}: {
    position: [number, number, number];
    scale?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    });

    return (
        <Float speed={0.6} rotationIntensity={1.2} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#D4AF37"
                    metalness={0.95}
                    roughness={0.08}
                    emissive="#D4AF37"
                    emissiveIntensity={0.15}
                />
            </mesh>
        </Float>
    );
}

/* ==========================================
   PARTICLE DRIFT — Gold dust floating across
   ========================================== */
function ParticleDrift({ count = 60 }: { count?: number }) {
    const points = useRef<THREE.Points>(null!);

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 20;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
        }
        return arr;
    }, [count]);

    useFrame((state) => {
        if (!points.current) return;
        points.current.rotation.y = state.clock.elapsedTime * 0.008;
        points.current.rotation.x =
            Math.sin(state.clock.elapsedTime * 0.005) * 0.03;
    });

    return (
        <points ref={points}>
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
   SUBTLE CAMERA RIG
   ========================================== */
function CameraRig() {
    const { camera } = useThree();

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        camera.position.x = Math.sin(t * 0.08) * 0.2 + state.pointer.x * 0.3;
        camera.position.y = Math.cos(t * 0.1) * 0.15 + state.pointer.y * 0.2;
        camera.lookAt(0, 0, 0);
    });

    return null;
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
   SCENE — All 3D elements composed
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

            {/* Wireframe Shapes — Large background elements */}
            <WireframeShape
                position={isMobile ? [-2.5, 2, -3] : [-5, 2, -4]}
                geometry="torus"
                scale={isMobile ? 0.6 : 0.9}
                rotationSpeed={0.8}
            />
            <WireframeShape
                position={isMobile ? [2.5, -1.5, -3] : [5.5, -1.5, -3]}
                geometry="octahedron"
                scale={isMobile ? 0.5 : 0.75}
                rotationSpeed={1.2}
            />
            {!isMobile && (
                <>
                    <WireframeShape
                        position={[0, 3, -5]}
                        geometry="torusKnot"
                        scale={0.5}
                        rotationSpeed={0.6}
                    />
                    <WireframeShape
                        position={[-4, -2.5, -4]}
                        geometry="icosahedron"
                        scale={0.55}
                        rotationSpeed={1}
                    />
                    <WireframeShape
                        position={[4, 3, -5]}
                        geometry="torus"
                        scale={0.4}
                        rotationSpeed={1.5}
                    />
                </>
            )}

            {/* Small solid gold accents */}
            <GoldAccent position={isMobile ? [-1, 1.5, -1] : [-2, 1.5, -1]} scale={0.12} />
            <GoldAccent position={isMobile ? [1.5, -1, -1.5] : [3, -0.5, -1.5]} scale={0.1} />
            {!isMobile && (
                <>
                    <GoldAccent position={[-3.5, -1, -2]} scale={0.08} />
                    <GoldAccent position={[1, 2.5, -2]} scale={0.14} />
                    <GoldAccent position={[5, 0.5, -2.5]} scale={0.09} />
                </>
            )}

            {/* Drei Sparkles — reduced counts */}
            <Sparkles
                count={isMobile ? 20 : 40}
                size={isMobile ? 2.5 : 2}
                speed={0.3}
                color="#D4AF37"
                scale={isMobile ? [8, 6, 4] : [14, 8, 6]}
                opacity={0.5}
            />

            {/* Custom particle drift — reduced */}
            <ParticleDrift count={isMobile ? 30 : 60} />

            {/* Camera */}
            <CameraRig />

            {/* Post-processing — desktop only */}
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
   MAIN EXPORT — Canvas wrapper
   ========================================== */
export default function ProjectShowcaseThree() {
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
                gl={{
                    antialias: !isMobile,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                style={{ background: "transparent" }}
                onCreated={handleCreated}
            >
                <ProjectScene isMobile={isMobile} />
            </Canvas>
        </div>
    );
}
