import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Window } from '../../components';
import Typed from 'typed.js'
import { Terminal, ArrowDownCircle } from 'lucide-react';
import gsap from 'gsap';

const Hero = ({ onNavigateToTutoring }) => {
  const [text, setText] = useState('');
  const fullText = "HELLO, I'M ";
  const containerRef = useRef(null);
  const typedSpan = useRef(null);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const typed = new Typed(typedSpan.current, {
      strings: ['RYAN TAM', 'DEVOPSER', 'CODER', 'IT TRAINER', 'PRIVATE TUTOR'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1200,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [text]);

  useLayoutEffect(() => {
    // Window Restore Animation
    const ctx = gsap.context(() => {
      gsap.to(".hero-window", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", 
          scrub: true,
        },
        scale: 0.1,
        y: 100,
        opacity: 0,
        transformOrigin: "bottom center",
        duration: 0.6,
        ease: "back.out(1.5)"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mb-12 min-h-[80vh] flex flex-col justify-center" ref={containerRef}>
      <div className="hero-window origin-bottom">
        <Window title="C:\SYSTEM\BOOT_LOADER.EXE" variant="terminal" icon={<Terminal size={16} />}>
          <div className="space-y-4">
            <div className="animate-pulse">
              <p>&gt; KERNEL LOADED...</p>
              <p>&gt; INITIALIZING USER_PROFILE [RYAN]...</p>
              <p>&gt; SUCCESS.</p>
            </div>
            
            <div className="mt-8 border-2 border-green-500 p-6 md:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 bg-green-500 text-black px-2 text-sm font-bold">
                USER_INFO
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-shadow-retro min-h-[3rem] md:min-h-[4rem]">
                {text}<span ref={typedSpan} />
              </h1>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg md:text-xl">
                <span className="bg-green-900 text-green-100 px-2 py-1">DevOps Engineer</span>
                <span className="hidden md:inline">|</span>
                <span className="bg-green-900 text-green-100 px-2 py-1">Private Tutor</span>
                <span className="hidden md:inline">|</span>
                <span className="bg-green-900 text-green-100 px-2 py-1">IT Trainer</span>
              </div>

              <p className="mt-6 max-w-2xl mx-auto text-green-300 opacity-90 leading-relaxed">
                Automating infrastructure, deploying scalable systems, and empowering the next generation of tech talent. 
                Whether it's configuring Kubernetes clusters or explaining Python loops, I optimize performance.
              </p>
              
              <div className="mt-10">
                 <button 
                  onClick={onNavigateToTutoring}
                  className="group relative inline-flex items-center justify-center px-8 py-3 bg-green-500 text-black font-bold text-xl uppercase tracking-wider hover:bg-green-400 active:translate-y-1 active:shadow-none transition-all box-shadow-hard border-2 border-black"
                >
                  <span className="mr-2">Explore Training</span>
                  <ArrowDownCircle size={24} className="group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="text-xs text-green-700 mt-4">
              MEMORY CHECK: 640K OK
            </div>
          </div>
        </Window>
      </div>
    </section>
  );
};

export default Hero;