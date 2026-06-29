import React from 'react';
import { motion } from 'framer-motion';
const profileImg = '/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden scroll-mt-16">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">About <span className="text-cyan-400">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600/20 rounded-2xl -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/30">
                <img src={profileImg} alt="Ujjal Pandey" className="w-full h-auto object-cover hover:scale-105 transition duration-700" />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-slate-800 rounded-xl shadow-xl p-6 flex items-center gap-4 border border-cyan-500/30 z-20">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-lg w-16 h-16 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">2+</span>
                <span className="text-xs">Years</span>
              </div>
              <div>
                <p className="font-bold text-white">Coding Experience</p>
                <p className="text-sm text-gray-400">Full Stack Development</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">I'm <span className="text-cyan-400">Ujjal Pandey</span></h3>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-6"></div>
              <p className="text-gray-300 text-lg leading-relaxed">A passionate <strong className="text-cyan-400">Full Stack Developer</strong> currently studying <strong className="text-cyan-400">CSIT at Butwal Multiple Campus</strong>. I transform ideas into elegant, functional web applications.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎓", title: "Education", desc: "CSIT Student", subDesc: "Butwal Multiple Campus" },
                { icon: "💻", title: "Experience", desc: "2+ Years Coding", subDesc: "Full Stack Focus" },
                { icon: "🚀", title: "Projects", desc: "5+ Completed", subDesc: "MERN Stack" },
                { icon: "🌍", title: "Location", desc: "Butwal, Nepal", subDesc: "Remote Available" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)" }}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-500/20 hover:border-cyan-400/50 transition-all cursor-default group"
                >
                  <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-300 font-semibold">{item.desc}</p>
                  <p className="text-xs text-gray-500">{item.subDesc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20 p-8 rounded-2xl text-gray-100 shadow-xl border-2 border-cyan-500/30 backdrop-blur-sm"
            >
              <p className="text-lg italic leading-relaxed font-light">"Great software is born from passion, attention to detail, and a deep understanding of user needs. I'm committed to building solutions that make a real difference."</p>
              <p className="text-cyan-400 font-semibold mt-4">— Ujjal Pandey</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
