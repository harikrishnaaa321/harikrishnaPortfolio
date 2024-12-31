import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload } from "@react-three/drei";
import { renderToString } from "react-dom/server";
import { FaReact, FaNode, FaPython } from "react-icons/fa"; // Example icons
import * as THREE from "three";
import CanvasLoader from "../Loader";

const generateIconTexture = (icon) => {
  // Create a canvas element and set its size
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 128;
  canvas.height = 128;

  // Render the React Icon into the canvas
  const iconSvg = renderToString(icon);
  const img = new Image();
  img.src = `data:image/svg+xml;base64,${btoa(iconSvg)}`;

  return new Promise((resolve) => {
    img.onload = () => {
      context.drawImage(img, 0, 0, 128, 128); // Draw the image onto the canvas
      const texture = new THREE.CanvasTexture(canvas); // Create a texture from the canvas
      resolve(texture);
    };
  });
};

const Ball = ({ icon }) => {
  const [decal, setDecal] = useState(null);
  const meshRef = useRef();

  useEffect(() => {
    generateIconTexture(icon).then((texture) => setDecal(texture));
  }, [icon]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[0, 0,0]} // 180-degree rotation on the X-axis
            scale={1}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
