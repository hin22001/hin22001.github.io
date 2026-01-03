import { useRef, useLayoutEffect } from 'react';
import { Window } from '../../components';
import { Folder, HardDrive } from 'lucide-react';
import { PROJECTS } from '../../constants';
import gsap from 'gsap';

const Project = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Window Restore Animation
      gsap.from(".proj-window", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        scale: 0.1,
        y: 100,
        opacity: 0,
        transformOrigin: "bottom center",
        duration: 0.6,
        ease: "back.out(1.5)"
      });

      // Stagger Cards
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".grid-container",
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.3
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="mb-24" ref={containerRef}>
      <div className="proj-window origin-bottom">
        <Window title="FILE_EXPLORER - D:\PROJECTS" variant="gui" icon={<HardDrive size={16} />}>
          <div className="grid-container grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="project-card border-2 border-black bg-white p-1 hover:bg-blue-50 transition-colors group cursor-pointer"
              >
                <div className="border border-gray-400 p-4 h-full flex flex-col relative">
                  {/* Header Line */}
                  <div className="absolute top-2 right-2 flex gap-1">
                      <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
                      <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <Folder size={32} className="text-yellow-500 fill-yellow-200" />
                    <h3 className="font-bold text-lg leading-tight break-all uppercase">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4 flex-grow border-t border-dotted border-gray-400 pt-2">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs border border-gray-600 bg-gray-200 px-1 text-gray-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-xs font-bold">
                       <span className={`px-2 py-0.5 border border-black text-white ${
                         project.status === 'Deployed' ? 'bg-green-600' :
                         project.status === 'In Development' ? 'bg-yellow-600' : 'bg-gray-600'
                       }`}>
                         {project.status.toUpperCase()}
                       </span>
                       <span className="text-blue-800 hover:underline">DIR &gt;&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Window>
      </div>
    </section>
  );
};

export default Project;