import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFileDownload, FaArrowDown } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
const profileImg = '/profile.jpeg';

const cvPdf = '/intership_cv.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black via-slate-900 to-black pt-20 relative overflow-hidden">
      {/* Soft Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-sm shadow-sm">
            <p className="text-cyan-400 font-semibold tracking-wide text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Available for work
            </p>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ujjal Pandey
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold tracking-wide mt-2">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Crafting modern, highly performant web applications with elegant design and scalable backend architecture.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: <FaReact className="text-cyan-400" />, name: "React" },
              { icon: <FaNodeJs className="text-green-400" />, name: "Node.js" },
              { icon: <SiExpress className="text-gray-300" />, name: "Express" },
              { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
              { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" }
            ].map((tech, idx) => (
              <motion.span 
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/60 backdrop-blur-md rounded-xl text-sm font-semibold border border-cyan-500/30 text-gray-300 shadow-md hover:shadow-lg hover:border-cyan-400 hover:bg-slate-800 transition-all cursor-default group"
              >
                <span className="group-hover:scale-110 transition-transform">{tech.icon}</span> {tech.name}
              </motion.span>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>View My Work</span>
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(100, 100, 100, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              href={cvPdf} 
              download="intership_cv.pdf" 
              className="px-8 py-3.5 bg-slate-800 text-gray-100 rounded-full font-semibold hover:bg-slate-700 transition-all duration-300 border-2 border-cyan-500/40 shadow-sm hover:shadow-lg hover:border-cyan-400 flex items-center justify-center gap-2"
            >
              <FaFileDownload className="text-cyan-400" /> Get CV
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center relative lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-1000"></div>
            <img 
              src={profileImg} 
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-black group-hover:scale-[1.02] transition duration-500" 
              alt="Ujjal Pandey" 
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-sm font-semibold">Scroll down</span>
        <FaArrowDown className="text-gray-500 text-xl animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
