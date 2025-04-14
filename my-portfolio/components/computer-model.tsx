"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, PerspectiveCamera } from "@react-three/drei"
import type { Group } from "three"

function Computer() {
  const computerRef = useRef<Group>(null)

  const { scene } = useGLTF("assets/3d/JunasSetUp.glb")

  useFrame(() => {
    if (computerRef.current) {
      computerRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={computerRef}>
      <primitive object={scene.clone()} position={[0, 0, 0]} scale={[1 , 1, 1]} />
    </group>
  )
}

export default function ComputerModel() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return <div className="w-full h-full bg-muted flex items-center justify-center">Loading 3D Model...</div>

  return (
    <div className="w-full h-full bg-muted flex items-center justify-center">
      <Canvas>
        <PerspectiveCamera makeDefault 
        position={[1, 6, 10]}
        rotation={[-Math.PI / 8, 0, 0]}
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <Computer />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
