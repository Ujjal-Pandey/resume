import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Web Design",
      desc: "Modern, responsive websites that look great on all devices.",
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      title: "UI/UX Design",
      desc: "User-friendly interfaces with intuitive interactions.",
      icon: <FaMobileAlt className="text-4xl text-green-600" />,
      bg: "bg-green-50"
    },
    {
      title: "Full Stack Dev",
      desc: "Complete frontend and backend solutions using modern tech.",
      icon: <FaServer className="text-4xl text-purple-600" />,
      bg: "bg-purple-50"
    }
  ];

  return (
    <section id="services" className="py-16 bg-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What <span className="text-cyan-400">I Do</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/60 p-6 md:p-8 rounded-2xl shadow-md border border-slate-700 text-center group"
            >
                <div className={`w-16 h-16 ${srv.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition duration-300`}>
                  {srv.icon}
              </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{srv.title}</h3>
                <p className="text-gray-300 text-sm">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
