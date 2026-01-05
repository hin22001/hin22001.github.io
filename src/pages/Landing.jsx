import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Computers } from "../components";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import './Landing.css'

const Landing = (props) => {
  
  const { onDistanceReached } = props
  const [showBackdrop, setShowBackdrop] = useState(true);

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
        console.log(`Distance to target: ${distance.toFixed(2)}`);
        if (distance <= 85) {
          setShowBackdrop(false);
        }
        if (distance <= 5 && onDistanceReached) {
          onDistanceReached(distance);
        }
      };

      const onChange = () => {
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
          report();
          rafRef.current = null;
        });
      };

      if (logOnChange) controls.addEventListener('change', onChange);
      if (logOnEnd) controls.addEventListener('end', report);

      report();

      return () => {
        if (logOnChange) controls.removeEventListener('change', onChange);
        if (logOnEnd) controls.removeEventListener('end', report);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [controlsRef, camera, logOnChange, logOnEnd]);

    return null;
  };

  const controlsRef = useRef();
  const lastTouchYRef = useRef(0);

  // Handle touch scroll to zoom
  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const handleTouchMove = (e) => {
      const controls = controlsRef?.current;
      if (!controls) return;

      const currentY = e.touches[0].clientY;
      const deltaY = lastTouchYRef.current - currentY;

      if (Math.abs(deltaY) > 5) {
        // Simulate wheel zoom event
        const zoomSpeed = 0.1;
        const zoomDelta = deltaY > 0 ? zoomSpeed : -zoomSpeed;
        
        controls.dollyOut(1 + zoomDelta);
        controls.dispatchEvent({ type: 'change' });
        
        lastTouchYRef.current = currentY;
      }
    };

    const handleTouchStart = (e) => {
      lastTouchYRef.current = e.touches[0].clientY;
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

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
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate={false}
          maxDistance={100}
          minDistance={1}
          zoomSpeed={3}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          touches={{
            ONE: 1,
            TWO: 2
          }}
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