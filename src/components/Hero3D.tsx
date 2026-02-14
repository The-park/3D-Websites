"use client"
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <Suspense fallback={null}>
          <mesh>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial color="#22D3EE" metalness={0.1} roughness={0.6} />
          </mesh>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 3]} intensity={0.8} />
        </Suspense>
      </Canvas>
    </div>
  )
}
