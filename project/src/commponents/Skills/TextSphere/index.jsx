// TextSphere.js
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import './index.scss';

const Sphere = ({ radius = 15, textArray, mouseX, mouseY, isHovered }) => {
  const groupRef = useRef();
  const [cameraPosition, setCameraPosition] = useState([0, 25, 40]);

  const baseRotationSpeed = 0.005; // Base rotation speed
  const hoverSpeedFactor = 0.00003; // Adjust this factor to control the speed when hovered

   // Update camera position for billboarding
   useFrame(({ camera }) => {
    setCameraPosition(camera.position.toArray());
  });

  // Rotate the sphere continuously and change direction on hover
  useFrame(() => {
    if (groupRef.current) {
      const rotationSpeed = isHovered ? hoverSpeedFactor * Math.max(Math.abs(mouseX), Math.abs(mouseY)) : baseRotationSpeed;
      groupRef.current.rotation.y += rotationSpeed; // Adjust rotation speed
      groupRef.current.rotation.x += rotationSpeed / 2; // Slightly slower rotation for X-axis
    }

     // Ensure text faces the camera
     groupRef.current.children.forEach(child => {
        child.lookAt(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
      });

  });

  const getPosition = (index, total) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;

    return {
      x: radius * Math.cos(theta) * Math.sin(phi),
      y: radius * Math.sin(theta) * Math.sin(phi),
      z: radius * Math.cos(phi)
    };
  };

  return (
    <group ref={groupRef}>
      {textArray.map((text, index) => {
        const { x, y, z } = getPosition(index, textArray.length);
        return (
            <Text
            key={index}
            position={[x, y, z]}
            fontSize={1.3} // Adjust font size for readability
            color="white"
            anchorX="center"
            anchorY="middle"
            align="center"
          >
            {text}
          </Text>
        );
      })}
    </group>
  );
};

const TextSphere = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX - window.innerWidth / 2);
      setMouseY(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const textArray = [
    "React", "JavaScript", "HTML", "CSS", "Node.js", "Express", "Python", "Frontend", "Backend", "Fullstack","SQL","R", "jupyter Labs", "java","ssh","postgress","MongoDB","Postman","bash"
  ];

  return (
    <div 
      className="text-sphere-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [0, 25, 40], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sphere radius={15} textArray={textArray} mouseX={mouseX} mouseY={mouseY} isHovered={isHovered} />
        <OrbitControls enablePan={false}  enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default TextSphere;



