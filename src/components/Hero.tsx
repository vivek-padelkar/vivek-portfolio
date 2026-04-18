import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-bold text-[10px] uppercase tracking-[0.2em] rounded-full mb-8">
              Available for Strategic Leadership Roles
            </span>
            <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.85] font-black tracking-tighter uppercase mb-10">
              Architecting <span className="text-brand-primary">Systems.</span><br />
              Engineering <span className="italic opacity-50">Impact.</span><br />
              Driving Scale.
            </h1>
            <p className="font-sans text-text-light-secondary dark:text-text-dark-secondary text-lg md:text-2xl max-w-2xl leading-relaxed mb-12">
              Senior Full-Stack Engineer with <span className="text-text-light-primary dark:text-text-dark-primary font-bold">10+ years</span> of expertise in Node.js, React, and building ultra-scalable architectures for global industry leaders.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-brand-primary text-white px-10 py-5 font-bold uppercase tracking-widest text-xs flex items-center gap-3 rounded-xl shadow-2xl shadow-brand-primary/20 transition-all group"
              >
                Hire Me
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-text-light-primary dark:border-text-dark-primary px-10 py-5 font-bold uppercase tracking-widest text-xs flex items-center gap-3 rounded-xl hover:bg-text-light-primary hover:text-white dark:hover:bg-text-dark-primary dark:hover:text-black transition-all"
              >
                Download CV
                <Download size={16} />
              </motion.button>
              
              <div className="flex gap-4 ml-0 md:ml-4">
                {[
                  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/vivekpadelkar" },
                  { icon: <Github size={20} />, href: "#" },
                  { icon: <Mail size={20} />, href: "mailto:vivek.padelkar@gmail.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3, color: "var(--color-brand-primary)" }}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 glass rounded-xl opacity-60 hover:opacity-100 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-4 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 aspect-[3/4] rounded-3xl overflow-hidden glass p-4"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://picsum.photos/seed/vivek-exec/800/1000" 
                alt="Vivek Padelkar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          {/* Floating Metric Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-10 -left-10 z-20 glass p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="font-display text-4xl font-black text-brand-primary mb-1">10+</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">Years of Experience</p>
          </motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
