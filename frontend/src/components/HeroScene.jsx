import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const ParticleField = ({ count = 700 }) => {
    const ref = useRef();
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 22;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return arr;
    }, [count]);

    useFrame((state, delta) => {
        if (ref.current) ref.current.rotation.y += delta * 0.02;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.025} color="#08F7FE" transparent opacity={0.5} sizeAttenuation depthWrite={false} />
        </points>
    );
};

const Core = () => {
    const inner = useRef();
    useFrame((state, delta) => {
        if (inner.current) {
            inner.current.rotation.x += delta * 0.15;
            inner.current.rotation.y += delta * 0.22;
        }
    });
    return (
        <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.9}>
            <group ref={inner}>
                <mesh>
                    <icosahedronGeometry args={[1.55, 1]} />
                    <meshBasicMaterial color="#0066FF" wireframe transparent opacity={0.35} />
                </mesh>
                <mesh scale={0.82}>
                    <icosahedronGeometry args={[1.1, 0]} />
                    <meshStandardMaterial color="#0a0a0a" emissive="#08F7FE" emissiveIntensity={0.1} metalness={0.9} roughness={0.3} flatShading />
                </mesh>
            </group>
        </Float>
    );
};

const Orbiters = () => {
    const group = useRef();
    useFrame((state, delta) => {
        if (group.current) group.current.rotation.y -= delta * 0.12;
    });
    const items = useMemo(
        () => [
            { r: 3.1, s: 0.22, c: "#08F7FE", o: 0 },
            { r: 3.6, s: 0.14, c: "#0066FF", o: 2.1 },
            { r: 2.8, s: 0.18, c: "#7122FA", o: 4.2 },
            { r: 4.1, s: 0.1, c: "#08F7FE", o: 1.1 },
        ],
        []
    );
    return (
        <group ref={group} rotation={[0.4, 0, 0.15]}>
            {items.map((it, i) => (
                <mesh key={i} position={[Math.cos(it.o) * it.r, Math.sin(it.o * 1.3) * 0.8, Math.sin(it.o) * it.r]}>
                    <boxGeometry args={[it.s, it.s, it.s]} />
                    <meshStandardMaterial color="#101010" emissive={it.c} emissiveIntensity={0.9} metalness={0.6} roughness={0.3} />
                </mesh>
            ))}
        </group>
    );
};

const Ring = () => (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh rotation={[Math.PI / 2.4, 0.3, 0]}>
            <torusGeometry args={[2.6, 0.008, 8, 96]} />
            <meshBasicMaterial color="#08F7FE" transparent opacity={0.28} />
        </mesh>
    </Float>
);

const Rig = ({ children }) => {
    const ref = useRef();
    useFrame((state, delta) => {
        if (!ref.current) return;
        const { x, y } = state.pointer;
        ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, x * 0.25, 2.5, delta);
        ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, -y * 0.15, 2.5, delta);
    });
    return <group ref={ref}>{children}</group>;
};

const HeroScene = () => (
    <Canvas
        data-testid="hero-webgl-canvas"
        camera={{ position: [0, 0, 7.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        aria-hidden="true"
    >
        <fog attach="fog" args={["#050505", 8, 18]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 4, 4]} intensity={12} color="#08F7FE" />
        <pointLight position={[-5, -3, 2]} intensity={10} color="#0066FF" />
        <pointLight position={[0, 3, -4]} intensity={6} color="#7122FA" />
        <Rig>
            <ParticleField />
            <Core />
            <Orbiters />
            <Ring />
        </Rig>
    </Canvas>
);

export default HeroScene;
