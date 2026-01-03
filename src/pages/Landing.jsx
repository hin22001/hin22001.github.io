import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Computers } from "../components";
import { useEffect, useRef } from "react";
import './Landing.css'


const Landing = (props) => {
  
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });  
  const { onDistanceReached } = props

  // Add: component that runs inside the Canvas to read controls + camera
  const ControlsListener = ({ controlsRef, logOnChange = true, logOnEnd = true }) => {
    const camera = useThree((state) => state.camera);
    const rafRef = useRef(null);

    useEffect(() => {
      const controls = controlsRef?.current;
      if (!controls || !camera) return;

      if (!controls.__wheelInverted) {
        controls.zoomSpeed = -(controls.zoomSpeed ?? 1);
        controls.__wheelInverted = true;
      }

      const report = () => {
        const distance = camera.position.distanceTo(controls.target);
        // replace console.log with any handler you want (state update, callback, etc.)
        if (distance <= 5 && onDistanceReached) {
          onDistanceReached(distance);
        }
      };

      const onChange = () => {
        // throttle to animation frame to avoid spamming
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
          report();
          rafRef.current = null;
        });
      };

      if (logOnChange) controls.addEventListener('change', onChange);
      if (logOnEnd) controls.addEventListener('end', report);

      // initial report
      report();

      return () => {
        if (logOnChange) controls.removeEventListener('change', onChange);
        if (logOnEnd) controls.removeEventListener('end', report);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [controlsRef, camera, logOnChange, logOnEnd]);

    return null;
  };

  // create ref and pass it to OrbitControls + ControlsListener
  const controlsRef = useRef();

  return (
    <Canvas camera={{ position: [-21, 14, 97], fov: 5 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={0.75} />
      {/* pass ref to OrbitControls so we can read the instance */}
      <OrbitControls
        ref={controlsRef}
        enableRotate={false}
        enableZoom={true}
        enablePan={false}
        maxDistance={100}
        minDistance={1}
        zoomSpeed={3}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      {/* mount listener inside the Canvas so it can access camera + controls */}
      <ControlsListener controlsRef={controlsRef} onDistanceReached={onDistanceReached} />
      {/* <mesh>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="#3f51b5" />
      </mesh> */}
      {/* <Computers /> */}
      <group scale={isMobile? 0.7: 1} position={[0, -2.5, 0]} rotation={[0, -Math.PI / 30, 0]}>
        <Computers />
      </group>
    </Canvas>
  );
}
export default Landing;