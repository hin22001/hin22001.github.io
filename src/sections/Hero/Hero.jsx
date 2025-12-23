import React from 'react'
import Typed from 'typed.js'
import { GitHub, LinkedIn } from '@mui/icons-material';
import { HeroExperience } from '../../components'
import './Hero.css'


const Hero = (props) => {

  const {} = props

  const typedSpan = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(typedSpan.current, {
      strings: ['Ryan Tam', 'DevOpser', 'Coder', 'IT Dog'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1200,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero-section">
      <span>Hello</span>
      <h1 className="hero-text">
        I'm
        <span ref={typedSpan} className="typing-span" />
      </h1>
      <p>
        Placeholder for self description
      </p>
        <GitHub sx={{ fontSize: 40 }} className="icon" />
        <LinkedIn sx={{ fontSize: 40 }} className="icon" />
      <figure>
        <div className="hero-3d-layout border-red-200 border-2">
        </div>
      </figure>
    </section>
  )
}

export default Hero