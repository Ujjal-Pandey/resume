import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A complete, modern e-commerce platform built with MERN stack. Features include robust product management, user authentication, interactive cart functionality, secure payment gateway integration, order management, and fully responsive UI. Built with scalable architecture for modern e-commerce businesses.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop",
      tags: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Payment Gateway"],
      github: "https://github.com/Ujjal-Pandey/Ecommerce-website-mern-stack-",
      demo: "https://ecommerce-website-mern-stack-yta5-three.vercel.app/"
    },
    {
      title: "IT Management System (EventHub)",
      description: "A comprehensive event management system designed for IT professionals and organizations. Features include event scheduling, attendee management, ticketing system, real-time notifications, and analytics. Streamlines the entire event management workflow with an intuitive interface.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express", "Real-time"],
      github: "https://github.com/shubhamgyawali7/EventHub/commits/ujjal",
      demo: "https://event-hub-eight-rho.vercel.app/"
    },
    {
      title: "Password Size Photo Generator",
      description: "A utility tool that generates passport-sized photos from any image. Simply upload your photo, and the application automatically crops, resizes, and formats it to passport size specifications. Perfect for documents, applications, and identification needs.",
      image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=400&fit=crop",
      tags: ["React", "Canvas API", "Image Processing", "TailwindCSS"],
      github: "https://github.com/Ujjal-Pandey/Password-size-Photo",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black text-gray-100 scroll-mt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 text-white">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Work</span></h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">My latest and most advanced projects, focusing on scalable architecture and premium aesthetics.</p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-12 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/60 backdrop-blur-sm border-2 border-cyan-500/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-cyan-400/50 transition-all duration-500 group"
            >
              <div className="relative overflow-hidden h-72 md:h-96 w-full bg-slate-900">
                <img src={project.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute top-6 right-6"
                >
                  <span className="px-4 py-1.5 bg-cyan-500/90 backdrop-blur-md text-white rounded-full text-xs font-bold tracking-wide uppercase border border-cyan-400/50">
                    Featured Project
                  </span>
                </motion.div>
              </div>
              <div className="p-8 md:p-12 relative z-20 bg-slate-800/30">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400 text-lg leading-relaxed mb-8"
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {project.tags.map((tag, tagIdx) => (
                    <motion.span 
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + tagIdx * 0.05 }}
                      className="px-4 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold border-2 border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/30 transition-all cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a 
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(17, 24, 39, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-700/80 text-white rounded-full hover:bg-slate-600 transition font-semibold shadow-lg border border-slate-600/50 hover:border-cyan-400/50"
                  >
                    <FaGithub className="text-xl" /> View Code
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target={project.demo !== "#" ? "_blank" : undefined}
                    rel={project.demo !== "#" ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-600 hover:to-blue-600 transition font-semibold shadow-lg hover:shadow-xl"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
