import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Header />
      <main className="container mx-auto px-4 space-y-20">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/boazgajja" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/boazgajja" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:boazgajja@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:+919177774622" className="hover:text-blue-400 transition-colors">
              <Phone size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2024 Gajja Boaz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;