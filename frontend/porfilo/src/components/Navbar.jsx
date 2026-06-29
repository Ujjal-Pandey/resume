import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg border-b border-cyan-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Ujjal Pandey
        </motion.h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-2 font-medium">
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              href={link.href} 
              className={`px-4 py-2 rounded-lg transition-all relative group ${scrolled ? 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10' : 'text-gray-100 hover:text-cyan-400'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all group-hover:w-full rounded-full"></span>
            </motion.a>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className={`hidden md:block px-6 py-2.5 rounded-full font-semibold transition-all ${scrolled ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-600 shadow-cyan-500/50' : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/30'}`}
        >
          Let's Talk
        </motion.a>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden text-2xl focus:outline-none transition-colors ${scrolled ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-100'}`}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-cyan-500/20 shadow-xl"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-medium transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full mt-4 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
