import { Hero, Experience, Project, TechStack } from '../sections';
import { Power } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Portfolio.css';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const scrollToTutoring = () => {
    const element = document.getElementById('tutoring-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
						<a href="#tutoring-section" className="hover:text-blue-700 underline">TRAINING</a>
						<div className="hidden md:block border-l border-gray-600 mx-1"></div>
						<div className="flex items-center gap-1 text-red-700 cursor-pointer hover:bg-gray-300 px-1">
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
  );
};

export default Portfolio;