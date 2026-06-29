import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaServer, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-black via-slate-900 to-slate-800 scroll-mt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase">What I bring</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">My <span className="text-cyan-400">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Technologies & tools I master to build amazing apps</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <FaPalette className="text-3xl" />, title: "Frontend", color: "cyan", skills: [ {name: "React", score: 90}, {name: "JavaScript", score: 88}, {name: "TailwindCSS", score: 92} ] },
            { icon: <FaServer className="text-3xl" />, title: "Backend", color: "green", skills: [ {name: "Node.js", score: 89}, {name: "Express.js", score: 87}, {name: "REST APIs", score: 90} ] },
            { icon: <FaDatabase className="text-3xl" />, title: "Database & Tools", color: "purple", skills: [ {name: "MongoDB", score: 88}, {name: "Git/GitHub", score: 90}, {name: "Postman", score: 87} ] }
          ].map((category, catIdx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15 }}
              whileHover={{ y: -10, boxShadow: `0 25px 50px rgba(${category.color === 'cyan' ? '34, 211, 238' : category.color === 'green' ? '74, 222, 128' : '168, 85, 247'}, 0.2)` }}
              className={`bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-t-4 border-${category.color === 'cyan' ? 'cyan' : category.color === 'green' ? 'green' : 'purple'}-500 hover:border-${category.color === 'cyan' ? 'cyan' : category.color === 'green' ? 'green' : 'purple'}-400 transition-all`}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 bg-${category.color === 'cyan' ? 'cyan' : category.color === 'green' ? 'green' : 'purple'}-500/20 rounded-2xl flex items-center justify-center mb-6 text-${category.color === 'cyan' ? 'cyan' : category.color === 'green' ? 'green' : 'purple'}-400 transition-all`}
              >
                {category.icon}
              </motion.div>
              <h3 className={`text-2xl font-bold mb-6 text-${category.color === 'cyan' ? 'cyan' : category.color === 'green' ? 'green' : 'purple'}-400`}>{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex justify-between mb-2 items-center">
                      <span className="font-semibold text-gray-300">{skill.name}</span>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                        className={`text-sm font-bold text-${category.color}-400 bg-${category.color}-500/20 px-3 py-1 rounded-full`}
                      >
                        {skill.score}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.score}%` }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-r from-${category.color}-400 to-${category.color}-500 h-2.5 rounded-full shadow-lg`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-purple-600/30 rounded-2xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative border border-cyan-500/30"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { number: "15+", label: "Technologies", icon: "🛠️" },
              { number: "5+", label: "Projects Completed", icon: "🚀" },
              { number: "2+", label: "Years Experience", icon: "⏰" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="text-center group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.2 }}
                  className="text-5xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-cyan-200 font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
