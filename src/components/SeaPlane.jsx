import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export function SeaPlane({ nodes, materials, planeColor }) {
  const planeRef = useRef();
  const propellerRef = useRef();
  const [propellerSpeed, setPropellerSpeed] = useState(10);

  useFrame((_state, delta) => {
    propellerRef.current.rotation.z += delta * propellerSpeed;
  });

  return (
    <Float
      floatIntensity={1}
      rotationIntensity={0.3}
      speed={2}
      floatingRange={[0, 0.2]}
    >
      <group
        ref={planeRef}
        position={[-0.24, 0.58, 3.22]}
        rotation={[0, -0.01, 0]}
        scale={0.52}
        onClick={() =>
          propellerSpeed < 50 ? setPropellerSpeed(50) : setPropellerSpeed(10)
        }
      >
        <mesh
          geometry={nodes.Sea_Plane_1.geometry}
          material={materials.Planebody}
        >
          <meshStandardMaterial color={planeColor}></meshStandardMaterial>
        </mesh>
        <mesh
          geometry={nodes.Sea_Plane_2.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Sea_Plane_3.geometry}
          material={materials.Wings}
        />
      </group>
      <group ref={propellerRef} position={[-0.25, 0.58, 4.3]} scale={0.52}>
        <mesh
          geometry={nodes.Propeller_1.geometry}
          material={materials["tower-top"]}
        />
        <mesh
          geometry={nodes.Propeller_2.geometry}
          material={materials.Wings}
        />
      </group>
    </Float>
  );
}
