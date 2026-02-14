"use client"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useRef, useMemo } from 'react'
import * as THREE from 'three'

function FloatingParticles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null)
  const { mouse } = useThree()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    const speeds = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      scales[i] = Math.random() * 0.5 + 0.5
      speeds[i] = Math.random() * 0.5 + 0.2
    }

    return { positions, scales, speeds }
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.elapsedTime

    const positions = mesh.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3 + 1] += Math.sin(time * particles.speeds[i] + i) * 0.002
      positions[i3] += Math.cos(time * particles.speeds[i] * 0.5 + i) * 0.001
    }
    mesh.current.geometry.attributes.position.needsUpdate = true

    // Mouse influence
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, mouse.y * 0.1, 0.05)
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, mouse.x * 0.1, 0.05)
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#22D3EE"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function AnimatedSphere() {
  const mesh = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.elapsedTime

    // Morphing effect
    mesh.current.rotation.x = time * 0.1
    mesh.current.rotation.y = time * 0.15

    // Mouse tracking
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, mouse.x * 0.5, 0.05)
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, mouse.y * 0.3, 0.05)

    // Breathing effect
    const scale = 1 + Math.sin(time * 0.5) * 0.05
    mesh.current.scale.setScalar(scale)
  })

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial
        color="#4F46E5"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

function FloatingRings() {
  const group = useRef<THREE.Group>(null)
  const { mouse } = useThree()

  useFrame((state) => {
    if (!group.current) return
    const time = state.clock.elapsedTime

    group.current.rotation.x = Math.sin(time * 0.2) * 0.2 + mouse.y * 0.1
    group.current.rotation.y = time * 0.1 + mouse.x * 0.1
    group.current.rotation.z = Math.cos(time * 0.15) * 0.1
  })

  return (
    <group ref={group}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[i * 0.5, i * 0.3, 0]}>
          <torusGeometry args={[2 + i * 0.5, 0.02, 16, 100]} />
          <meshStandardMaterial
            color={i === 0 ? '#22D3EE' : i === 1 ? '#7C3AED' : '#EC4899'}
            transparent
            opacity={0.4}
            emissive={i === 0 ? '#22D3EE' : i === 1 ? '#7C3AED' : '#EC4899'}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

function GlowingSphere() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.elapsedTime
    const material = mesh.current.material as THREE.MeshStandardMaterial
    material.emissiveIntensity = 0.3 + Math.sin(time * 2) * 0.1
  })

  return (
    <mesh ref={mesh} position={[0, 0, -2]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#7C3AED"
        emissive="#7C3AED"
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

export default function Hero3DAdvanced() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={['#0A0A0F', 5, 25]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} />
          <pointLight position={[-5, -5, -5]} intensity={0.4} color="#7C3AED" />
          <pointLight position={[5, -5, 5]} intensity={0.3} color="#22D3EE" />

          <FloatingParticles count={300} />
          <AnimatedSphere />
          <FloatingRings />
          <GlowingSphere />
        </Suspense>
      </Canvas>
    </div>
  )
}
