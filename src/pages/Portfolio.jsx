import { Hero, Experience, Project, TechStack } from '../sections';
import { Power } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState, useEffect } from 'react';
import './Portfolio.css';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [isShuttingDown, setIsShuttingDown] = useState(false);

  useEffect(() => {
    // Refresh ScrollTrigger on component mount
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Listen to scroll events and refresh triggers
    const handleScroll = () => {
      ScrollTrigger.update();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    window.addEventListener('orientationchange', () => {
      setTimeout(() => ScrollTrigger.refresh(), 500);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  const scrollToTutoring = () => {
    const element = document.getElementById('tutoring-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShutdown = () => {
    setIsShuttingDown(true);

    // Shutdown animation sequence
    const tl = gsap.timeline();

    // Fade out main content
    tl.to('.portfolio', {
      opacity: 0,
      duration: 1,
      ease: 'power2.in'
    }, 0);

    // Show shutdown screen
    tl.to('.shutdown-overlay', {
      opacity: 1,
      duration: 0.5,
      pointerEvents: 'auto'
    }, 0.5);

    // Shutdown text animation
    tl.from('.shutdown-text', {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, 1);

    // Blinking cursor
    tl.to('.shutdown-cursor', {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true
    }, 1.5);
  };

  useEffect(() => {
    if (isShuttingDown) {
      const timeout = setTimeout(() => {
        // Fade out screen before reload
        gsap.to('.shutdown-overlay', {
          opacity: 0,
          duration: 1,
          ease: 'power2.in',
          onComplete: () => {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        });
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isShuttingDown]);

  return (
    <div className="relative">
      {/* Shutdown Overlay */}
      <div className="shutdown-overlay fixed inset-0 bg-black flex items-center justify-center opacity-0 pointer-events-none z-[999]">
        <div className="text-center">
          <div className="shutdown-text text-green-500 font-mono text-lg mb-4">
            <p>SYSTEM SHUTDOWN IN PROGRESS...</p>
            <p className="text-sm mt-2">Closing all processes...</p>
          </div>
          <div className="shutdown-cursor text-green-500 text-2xl">_</div>
        </div>
      </div>

      <div className="portfolio">
        <div className="min-h-screen text-[#333] font-mono pb-20 selection:bg-black selection:text-[#66c9b1]">
            
          {/* Top OS Bar */}
          <nav className="bg-[#c0c0c0] border-b-2 border-black p-2 flex justify-between items-center sticky top-0 z-50 shadow-md">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-2 py-0.5 text-lg font-bold italic tracking-widest border border-black shadow-[1px_1px_0px_white]">
                  RYAN_OS
              </div>
              <span className="hidden md:block text-xs uppercase font-bold text-gray-600">v1.0.0 (Build 2026)</span>
            </div>
              
            <div className="flex gap-4 text-sm font-bold">
              <a href="#" className="hover:text-blue-700 underline">HOME</a>
              {/* <a href="#tutoring-section" className="hover:text-blue-700 underline">TRAINING</a> */}
              <div className="hidden md:block border-l border-gray-600 mx-1"></div>
              <div 
                  className="flex items-center gap-1 text-red-700 cursor-pointer hover:bg-gray-300 px-1 disabled:opacity-50"
                  onClick={handleShutdown}
                  disabled={isShuttingDown}
              >
                  <Power size={14} />
                  <span>SHUTDOWN</span>
              </div>
            </div>
          </nav>

          {/* Desktop Container */}
          <main className="max-w-5xl mx-auto px-4 pt-10 relative z-10">
              
            {/* Components Stack */}
            <Hero onNavigateToTutoring={scrollToTutoring} />
            
            {/* <Tutoring /> */}
            
            <Experience />
            
            <Project />
            
            <TechStack />

            {/* Footer */}
            <footer className="text-center py-8 text-black/60 text-sm font-bold">
              <p>© 2026 RYAN. SYS_ADMIN PERMISSIONS REQUIRED.</p>
              <p className="mt-1 text-xs">DESIGNED WITH &lt;3 IN REACT</p>
            </footer>

          </main>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;