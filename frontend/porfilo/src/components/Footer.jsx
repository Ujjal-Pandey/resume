import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-16 border-t border-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-white font-bold text-2xl mb-4 tracking-tight">Ujjal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Pandey</span></h3>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Full Stack Developer focused on building premium, highly-performant, and scalable web applications that solve real problems.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaGithub, href: "https://github.com/Ujjal-Pandey", label: "GitHub" },
                { Icon: FaFacebook, href: "https://www.facebook.com/ujjal.pandey.929038/", label: "Facebook" },
                { Icon: FaLinkedin, href: "#", label: "LinkedIn" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.2, y: -3 }}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gray-800/50 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-gray-700 hover:border-blue-500"
                  title={social.label}
                >
                  <social.Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link, idx) => (
                <motion.li 
                  key={idx}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors font-medium text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Design",
                "UI/UX Design",
                "Full Stack Development",
                "API Development",
                "Database Design"
              ].map((service, idx) => (
                <motion.li 
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors font-medium text-sm cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <div>
            <p className="text-gray-500">© {new Date().getFullYear()} Ujjal Pandey. All rights reserved.</p>
          </div>
          <div className="text-gray-500 text-center">
            Designed & Built with <span className="text-white font-semibold">React</span> & <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
            title="Scroll to top"
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
