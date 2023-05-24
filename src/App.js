import { OrbitControls, Stage } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { TowerScene } from "./components/TowerScene";

function App() {
  const { color, planeColor } = useControls({
    color: "#b78135",
    planeColor: "#b78135",
  });

  return (
    <div className="container" style={{ background: color }}>
      <Canvas shadows camera={{ position: [4, 0, -12], fov: 12 }}>
        <Stage
          intensity={0.2}
          environment="sunset"
          shadows={{ type: "accumulative", color, colorBlend: 2, opacity: 2 }}
          adjustCamera={1}
        >
          <TowerScene planeColor={planeColor} />
        </Stage>
        <OrbitControls
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default App;
