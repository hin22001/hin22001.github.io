import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Computers } from "../components";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import './Landing.css'


const Landing = (props) => {
  
  const { onDistanceReached } = props
  const [showBackdrop, setShowBackdrop] = useState(true);

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
        if (distance <= 70) {
          setShowBackdrop(false);
        }
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
    <>
      {/* Backdrop with scroll notification */}
      <div
        className={`fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 transition-opacity duration-500 pointer-events-none ${
          showBackdrop ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-8 text-center">
          EXPLORE THE COMPUTER
        </h2>
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-green-500 text-sm font-mono">SCROLL DOWN TO CONTINUE</p>
          <ChevronDown size={32} className="text-green-500" />
        </div>
      </div>

      <Canvas camera={{ position: [-21, 14, 97], fov: 5 }}>
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[5, 5, 5]} intensity={0.75} />
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
        <ControlsListener controlsRef={controlsRef} onDistanceReached={onDistanceReached} />
        <group position={[0, -2.5, 0]} rotation={[0, -Math.PI / 30, 0]}>
          <Computers />
        </group>
      </Canvas>
    </>
  );
}
export default Landing;