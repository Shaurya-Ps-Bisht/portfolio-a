import { Suspense, useRef, useMemo } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { smokeTexture, smokeTexture2, github } from "../../assets";
import { isMobile } from "react-device-detect";
import * as THREE from "three";

import {
  BakeShadows,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Cube = () => {
  const particlesRef = useRef([]);
  const smokesRef = useRef([]);
  const mesh = useRef();
  const colorMap = useLoader(TextureLoader, smokeTexture);
  const colorMap2 = useLoader(TextureLoader, smokeTexture2);
  const clock = useRef(new THREE.Clock());
  const lightRef = useRef();
  const frameCount = useRef(0);

  function createParticles() {
    let particles = [];
    const probability = isMobile ? 0.2 : 1.0;
    for (var i = 880; i > 250; i--) {
      if (Math.random() < probability) {
        var x = 0.5 * i * Math.cos((4 * i * Math.PI) / 180);
        var y = 0.5 * i * Math.sin((4 * i * Math.PI) / 180);
        var z = 0.1 * i;
        particles.push([x, y, z]);
      }
    }
    return particles;
  }

  function createSmoke() {
    let particles = [];
    for (var i = 0; i < 40; i++) {
      var x = Math.random() * 1000 - 550;
      var y = Math.random() * 700 - 400;
      var z = 25;
      particles[i] = [x, y, z];
    }
    return particles;
  }

  const particles = createParticles().map((cords, i) => (
    <mesh
      key={i}
      position={cords}
      rotation-z={Math.random() * 360}
      ref={(el) => (particlesRef.current[i] = el)}
    >
      <planeGeometry args={[250, 250, 1, 1]} />
      <meshStandardMaterial transparent={true} map={colorMap} />
    </mesh>
  ));
  const smokes = createSmoke().map((cords, i) => (
    <mesh
      key={i}
      position={cords}
      rotation-z={Math.random() * 360}
      ref={(el) => (smokesRef.current[i] = el)}
    >
      <planeGeometry args={[700, 700, 1, 1]} />
      <meshStandardMaterial transparent={true} map={colorMap2} opacity={0.3} />
    </mesh>
  ));

  useFrame(() => {
    frameCount.current++;
    const updateFrequency = isMobile ? 80 : 1;
    if (frameCount.current % updateFrequency === 0) {
      let delta = clock.current.getDelta();
      particlesRef.current.forEach((p) => {
        if (p) {
          p.rotation.z -= delta * 1.5;
        }
      });
      smokesRef.current.forEach((p) => {
        if (p) {
          p.rotation.z -= delta * 0.8;
        }
      });

      if (lightRef.current) {
        if (Math.random() > 0.9) {
          lightRef.current.power = 350 + Math.random() * 500;
        }
      }
    }
  });

  return (
    <>
      {particles}
      {smokes}
      <ambientLight intensity={0.5} />
      <pointLight
        ref={lightRef}
        color={0x4c00b0}
        intensity={0}
        distance={600}
        decay={0.3}
        position={[0, 0, 250]}
      />
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      // frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 80, near: 1, far: 1000, position: [0, 0, 1000] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Cube />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
