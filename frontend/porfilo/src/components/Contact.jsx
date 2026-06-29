import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if(response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-gray-100 scroll-mt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">Let's Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Touch</span></h2>
          <p className="text-gray-400 mt-4 text-lg">Have a project in mind? Let's build something great together.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: <FaEnvelope className="text-2xl" />, title: "Email", value: "ujjalpandey12@gmail.com", link: "mailto:ujjalpandey12@gmail.com", action: "Write to me →", bg: "bg-cyan-500/10", color: "text-cyan-400", borderColor: "border-cyan-500/30" },
              { icon: <FaPhoneAlt className="text-2xl" />, title: "Phone", value: "+977 9762898601", link: "tel:+9779762898601", action: "Call now →", bg: "bg-green-500/10", color: "text-green-400", borderColor: "border-green-500/30" },
              { icon: <FaMapMarkerAlt className="text-2xl" />, title: "Location", value: "Butwal, Nepal", span: "Available for remote work", bg: "bg-purple-500/10", color: "text-purple-400", borderColor: "border-purple-500/30" }
            ].map((info, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 10 }}
                className={`flex items-start gap-6 p-6 rounded-2xl ${info.bg} border-2 ${info.borderColor} hover:shadow-lg transition-all group`}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-full ${info.bg} flex items-center justify-center flex-shrink-0 ${info.color}`}
                >
                  {info.icon}
                </motion.div>
                <div className="pt-1">
                  <h3 className="font-semibold text-lg text-gray-200 mb-1">{info.title}</h3>
                  <p className="text-gray-100 text-lg font-bold mb-2">{info.value}</p>
                  {info.link ? (
                    <motion.a 
                      whileHover={{ x: 5 }}
                      href={info.link} 
                      className={`${info.color} font-semibold hover:font-bold transition-all inline-flex items-center gap-1`}
                    >
                      {info.action}
                    </motion.a>
                  ) : (
                    <span className={`${info.color} font-semibold`}>{info.span}</span>
                  )}
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 pt-8 border-t border-slate-700"
            >
              <span className="text-gray-400 font-semibold text-sm self-center">Follow me:</span>
              {[
                { Icon: FaGithub, href: "https://github.com/Ujjal-Pandey", label: "GitHub", bgHover: "hover:bg-slate-600 hover:text-white" },
                { Icon: FaFacebook, href: "https://www.facebook.com/ujjal.pandey.929038/", label: "Facebook", bgHover: "hover:bg-blue-600" },
                { Icon: FaLinkedin, href: "#", label: "LinkedIn", bgHover: "hover:bg-cyan-500" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-12 h-12 bg-slate-800/60 rounded-full flex items-center justify-center text-gray-400 ${social.bgHover} transition-all duration-300 border-2 border-slate-700 shadow-md hover:shadow-lg`}
                  title={social.label}
                >
                  <social.Icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border-2 border-cyan-500/20 hover:border-cyan-400/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-2 text-white">Send me a message</h3>
            <p className="text-gray-400 mb-8">I'll get back to you as soon as possible!</p>
            
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border-2 border-green-500/50 text-green-300 rounded-xl flex items-center gap-3"
              >
                <span className="text-2xl">✓</span>
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border-2 border-red-500/50 text-red-300 rounded-xl flex items-center gap-3"
              >
                <span className="text-2xl">✕</span>
                Failed to send message. Please try again.
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-slate-700/60 border-2 border-slate-600 rounded-xl px-5 py-3.5 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition outline-none text-gray-100 placeholder-gray-500 font-medium hover:border-slate-500" 
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="your.email@example.com"
                    className="w-full bg-slate-700/60 border-2 border-slate-600 rounded-xl px-5 py-3.5 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition outline-none text-gray-100 placeholder-gray-500 font-medium hover:border-slate-500" 
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  placeholder="Project inquiry"
                  className="w-full bg-slate-700/60 border-2 border-slate-600 rounded-xl px-5 py-3.5 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition outline-none text-gray-100 placeholder-gray-500 font-medium hover:border-slate-500" 
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="5" 
                  required 
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-700/60 border-2 border-slate-600 rounded-xl px-5 py-3.5 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition outline-none text-gray-100 resize-none placeholder-gray-500 font-medium hover:border-slate-500"
                ></textarea>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'} 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition duration-300 shadow-lg hover:shadow-xl shadow-cyan-500/30 flex justify-center items-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span>→</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
