"use client";
import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

type Props = { size?: number };

export default function ThreePercent({ size = 1 }: Props) {
  const group = useRef<THREE.Group | null>(null);
  const baseY = useRef(0);
  const offset = useRef({ x: 0, y: 0 });
  const target = useRef({ rotX: 0, rotY: 0, scale: 1 });
  const hover = useRef(false);
  const { size: viewSize } = useThree();

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    // Base slow rotation (radians/sec)
    const baseSpeed = Math.PI / 180; // ~1 deg/s
    const hoverSpeed = Math.PI / 120; // slightly faster when hovered
    const rotationSpeed = hover.current ? hoverSpeed : baseSpeed;

    baseY.current += rotationSpeed * delta;

    // Smoothly lerp offsets for hover tilt
    offset.current.x = THREE.MathUtils.lerp(offset.current.x, target.current.rotX, 0.1);
    offset.current.y = THREE.MathUtils.lerp(offset.current.y, target.current.rotY, 0.1);

    g.rotation.x = offset.current.x;
    g.rotation.y = baseY.current + offset.current.y;

    // Smoothly interpolate scale
    const s = THREE.MathUtils.lerp(g.scale.x, target.current.scale, 0.12);
    g.scale.set(s, s, s);

    // floating
    g.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.18;
  });

  function onPointerOver(e: any) {
    hover.current = true;
    target.current.scale = 1.08;
  }

  function onPointerOut() {
    hover.current = false;
    target.current.scale = 1.0;
    target.current.rotX = 0;
    target.current.rotY = 0;
  }

  function onPointerMove(e: any) {
    // Map screen position to small tilt values
    const nx = (e.clientX / viewSize.width) * 2 - 1; // -1 .. 1
    const ny = -(e.clientY / viewSize.height) * 2 + 1; // -1 .. 1
    const tiltFactor = 0.25; // max tilt in radians
    target.current.rotY = nx * tiltFactor;
    target.current.rotX = ny * tiltFactor * 0.6; // less X tilt
  }

  return (
    <group ref={group} scale={size} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onPointerMove={onPointerMove}>
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <ambientLight intensity={0.6} />
      <spotLight position={[-8, 12, 10]} intensity={0.45} angle={0.6} />

      {/* Top sphere - bright gradient-like color */}
      <mesh position={[0, 2.6, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color={"#007BFF"} metalness={0.45} roughness={0.15} emissive={"#39E6FF"} emissiveIntensity={0.06} />
      </mesh>

      {/* Diagonal cylinder (slash) - cyan/teal accent */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}> 
        <cylinderGeometry args={[0.32, 0.32, 8, 64]} />
        <meshStandardMaterial color={"#22D3CB"} metalness={0.55} roughness={0.12} emissive={"#9FF6EE"} emissiveIntensity={0.05} />
      </mesh>

      {/* Bottom sphere - lighter blue */}
      <mesh position={[0, -2.6, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color={"#4C9FFF"} metalness={0.42} roughness={0.18} emissive={"#CFF8FF"} emissiveIntensity={0.04} />
      </mesh>

      <EffectComposer>
        <Bloom luminanceThreshold={0.28} intensity={0.32} mipmapBlur />
      </EffectComposer>
    </group>
  );
}
