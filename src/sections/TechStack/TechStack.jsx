import { useRef, useLayoutEffect } from 'react';
import { Window } from '../../components';
import { Cpu } from 'lucide-react';
import { SKILLS } from '../../constants';
import gsap from 'gsap';

const TechStack = ({ isMobile }) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (isMobile) return;
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Window Restore Animation
      timeline.from(".tech-window", {
        scale: 0.1,
        y: 100,
        opacity: 0,
        transformOrigin: "bottom center",
        duration: 0.6,
        ease: "back.out(1.5)"
      }, 0);

      // Columns appear
      timeline.from(".skill-col", {
        scaleY: 0,
        transformOrigin: "top",
        opacity: 0,
        duration: 0.4,
        stagger: 0.15,
        delay: 0.3
      }, 0.3);

      // Files appear
      timeline.from(".file-item", {
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
        delay: 0.6
      }, 0.6);

    }, containerRef);
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section className="mb-12" ref={containerRef}>
      <div className="tech-window origin-bottom">
        <Window title="SYSTEM_DIAGNOSTICS.EXE - SKILLS" variant="terminal" icon={<Cpu size={16} />}>
          <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx} className="skill-col border border-green-800 p-4 bg-green-900/10">
                <h3 className="text-green-300 font-bold border-b border-green-700 pb-1 mb-3 uppercase tracking-wider">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="flex justify-between items-center text-sm">
                      <span className="text-green-500">{item}</span>
                      <span className="text-green-800">
                        [OK]
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="files-container mt-8 border-t-2 border-dashed border-green-800 pt-4 font-mono text-xs text-green-600">
            <p>CERTIFICATES FOUND: 0</p>
            <div className="flex flex-col md:flex-row gap-4 mt-2 text-green-400">
              {/* <span className="file-item">&gt; AWS_CERTIFIED_SOLUTIONS_ARCHITECT.PDF</span>
              <span className="file-item">&gt; CKA_KUBERNETES_ADMIN.PDF</span>
              <span className="file-item">&gt; RED_HAT_CERTIFIED_ENGINEER.PDF</span> */}
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default TechStack;