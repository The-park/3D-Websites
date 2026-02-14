"use client"
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

function RotatingBadge() {
  const groupRef = useRef<THREE.Group>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Center icon background */}
      <mesh position={[0, 0, 0.1]}>
        <circleGeometry args={[0.8, 64]} />
        <meshStandardMaterial color="#4F46E5" />
      </mesh>

      {/* Arrow icon (simplified) */}
      <mesh position={[0, 0, 0.15]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.3, 0.08, 0.05]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.1, 0.1, 0.15]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.2, 0.08, 0.05]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.1, -0.05, 0.15]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.15, 0.08, 0.05]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Outer rotating ring with text */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.15, 16, 100]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Text dots around the ring */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i / 8) * Math.PI * 2
        const x = Math.cos(angle) * 1.2
        const y = Math.sin(angle) * 1.2
        return (
          <mesh key={i} position={[x, y, 0.1]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#f97316" />
          </mesh>
        )
      })}
    </group>
  )
}

function FloatingBooks() {
  const book1Ref = useRef<THREE.Mesh>(null)
  const book2Ref = useRef<THREE.Mesh>(null)
  const book3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (book1Ref.current) {
      book1Ref.current.position.y = Math.sin(t * 0.8) * 0.2 + 0.5
      book1Ref.current.rotation.z = Math.sin(t * 0.5) * 0.1
    }
    if (book2Ref.current) {
      book2Ref.current.position.y = Math.sin(t * 0.6 + 1) * 0.15 - 0.3
      book2Ref.current.rotation.z = Math.sin(t * 0.4 + 1) * 0.08
    }
    if (book3Ref.current) {
      book3Ref.current.position.y = Math.sin(t * 0.7 + 2) * 0.18 + 0.1
      book3Ref.current.rotation.z = Math.sin(t * 0.6 + 2) * 0.12
    }
  })

  return (
    <group position={[2.5, 0, -1]}>
      {/* Book 1 - Red */}
      <mesh ref={book1Ref} position={[-0.3, 0.5, 0]} rotation={[0.1, 0.2, 0.1]}>
        <boxGeometry args={[0.6, 0.8, 0.1]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      {/* Book 2 - Green */}
      <mesh ref={book2Ref} position={[0, -0.3, 0.2]} rotation={[0.05, -0.1, -0.05]}>
        <boxGeometry args={[0.55, 0.75, 0.1]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>
      {/* Book 3 - Blue */}
      <mesh ref={book3Ref} position={[0.3, 0.1, 0.4]} rotation={[-0.1, 0.15, 0.08]}>
        <boxGeometry args={[0.5, 0.7, 0.1]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    </group>
  )
}

function GraduationCap() {
  const capRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (capRef.current) {
      capRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      capRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
  })

  return (
    <group ref={capRef} position={[-2, 1, 0]} scale={0.8}>
      {/* Cap top (mortarboard) */}
      <mesh position={[0, 0.3, 0]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[1.2, 0.08, 1.2]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      {/* Cap base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      {/* Tassel */}
      <mesh position={[0.5, 0.3, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>
      <mesh position={[0.5, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>
    </group>
  )
}

export default function Hero3DEducation() {
  return (
    <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-3, 2, 2]} intensity={0.4} color="#f97316" />
        
        <RotatingBadge />
        <FloatingBooks />
        <GraduationCap />
      </Canvas>
    </div>
  )
}
