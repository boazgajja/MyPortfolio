import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-20">
      <h2 className="section-heading">Let's Connect!</h2>
      <div className="card">
        <p className="text-lg text-gray-300 mb-6 text-center">
          I'm always open to exciting collaborations and tech discussions. 
          If you're interested in working together please reach out
          Let's innovate and build something extraordinary!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="mailto:boazgajja@gmail.com"
            className="flex items-center justify-center gap-2 p-4 bg-gray-800/50 rounded-lg 
                     hover:bg-gray-700/50 transition-colors group"
          >
            <Mail className="text-emerald-400 group-hover:text-emerald-300" />
            <span className="text-gray-300 group-hover:text-emerald-300">Email</span>
          </a>
          <a
            href="https://github.com/boazgajja"
            className="flex items-center justify-center gap-2 p-4 bg-gray-800/50 rounded-lg 
                     hover:bg-gray-700/50 transition-colors group"
          >
            <Github className="text-emerald-400 group-hover:text-emerald-300" />
            <span className="text-gray-300 group-hover:text-emerald-300">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/boazgajja"
            className="flex items-center justify-center gap-2 p-4 bg-gray-800/50 rounded-lg 
                     hover:bg-gray-700/50 transition-colors group"
          >
            <Linkedin className="text-emerald-400 group-hover:text-emerald-300" />
            <span className="text-gray-300 group-hover:text-emerald-300">LinkedIn</span>
          </a>
          <a
            href="tel:+919177774622"
            className="flex items-center justify-center gap-2 p-4 bg-gray-800/50 rounded-lg 
                     hover:bg-gray-700/50 transition-colors group"
          >
            <Phone className="text-emerald-400 group-hover:text-emerald-300" />
            <span className="text-gray-300 group-hover:text-emerald-300">Phone</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;