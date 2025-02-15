import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Software Engineer', 'Data Engineer', 'Web Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden animated-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-7xl font-bold mb-8 gradient-text leading-tight tracking-normal">Gajja Boaz</h1>
        <h2 className="text-3xl mb-8 text-emerald-400">
          I am a <span ref={el} className="text-emerald-500"></span>
        </h2>
        <div className="flex justify-center space-x-4">
          <a 
            href="#contact" 
            className="border-2 border-emerald-500/50 text-emerald-400 px-8 py-3 rounded-full font-semibold
                     hover:bg-emerald-500/10 transition-all duration-300
                     shadow-lg hover:shadow-emerald-500/25"
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="border-2 border-emerald-500/50 text-emerald-400 px-8 py-3 rounded-full font-semibold
                     hover:bg-emerald-500/10 transition-all duration-300
                     shadow-lg hover:shadow-emerald-500/25"
          >
            View Projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;