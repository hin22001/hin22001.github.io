import { useRef, useLayoutEffect } from 'react';
import { Window } from '../../components';
import { Briefcase, FileText } from 'lucide-react';
import { EXPERIENCES } from '../../constants';
import gsap from 'gsap';

const Experience = ({ isMobile }) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (isMobile) return;
    const ctx = gsap.context(() => {

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
      // Window Restore Animation
      timeline.from(".exp-window", {
        scale: 0.1,
        y: 100,
        opacity: 0,
        transformOrigin: "bottom center",
        duration: 0.6,
        ease: "back.out(1.5)"
      }, 0);

      // Experience items
      const items = gsap.utils.toArray(".exp-item");
      items.forEach((item, i) => {
        timeline.from(item, {
          x: -20,
          opacity: 0,
          duration: 0.4,
          delay: i * 0.1
        });
      }, 0.3);

      // End log pulse trigger
      timeline.from(".end-log", {
        opacity: 0,
        duration: 0.5,
        repeat: 12, 
        yoyo: true
      }, 1);

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section className="mb-24" ref={containerRef}>
      <div className="exp-window origin-bottom">
        <Window title="C:\USERS\RYAN\WORK_HISTORY.LOG" variant="terminal" icon={<Briefcase size={16} />}>
          <div className="space-y-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="exp-item relative pl-6 md:pl-8 border-l-2 border-green-700">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-900 border-2 border-green-500 rounded-full"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-green-300 uppercase">
                    {exp.role}
                  </h3>
                  <span className="text-green-600 font-bold bg-green-900/30 px-2 py-1 text-sm border border-green-800">
                    [{exp.period}]
                  </span>
                </div>
                
                <div className="text-green-500 mb-2 flex items-center gap-2">
                  <FileText size={14} />
                  <span className="underline decoration-dotted">{exp.company}</span>
                </div>
                
                <ul className="list-none space-y-1 mt-2 text-green-400/90 text-sm md:text-base">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600 select-none">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="end-log text-center pt-4 border-t border-green-800/50">
              <span className="animate-pulse text-green-700">END OF LOG_FILE</span>
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default Experience;