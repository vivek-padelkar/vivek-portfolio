import { motion } from "motion/react";
import { Mail, Phone, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto glass rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-40 opacity-5 -z-0">
          <Mail size={400} />
        </div>
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
            Let's Scale <br />Your <span className="text-brand-primary">Vision.</span>
          </h2>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-xl mb-16 max-w-2xl leading-relaxed mx-auto">
            Available for leadership roles, high-stakes consulting, and strategic engineering partnerships. Reach out directly via any of the channels below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <a href="mailto:vivek.padelkar@gmail.com" className="flex flex-col items-center gap-4 p-8 glass rounded-3xl hover:bg-brand-primary group transition-all">
              <div className="p-5 bg-white/5 rounded-2xl group-hover:bg-white/20 transition-colors">
                <Mail className="text-brand-primary group-hover:text-white w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">Email Direct</p>
                <p className="font-display font-bold text-lg break-all">vivek.padelkar@gmail.com</p>
              </div>
            </a>
            
            <a href="https://linkedin.com/in/vivekpadelkar" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 p-8 glass rounded-3xl hover:bg-brand-primary group transition-all">
              <div className="p-5 bg-white/5 rounded-2xl group-hover:bg-white/20 transition-colors">
                <Linkedin className="text-brand-primary group-hover:text-white w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">Network</p>
                <p className="font-display font-bold text-lg">In/VivekPadelkar</p>
              </div>
            </a>
            
            <div className="flex flex-col items-center gap-4 p-8 glass rounded-3xl hover:bg-brand-primary group transition-all">
              <div className="p-5 bg-white/5 rounded-2xl group-hover:bg-white/20 transition-colors">
                <Phone className="text-indigo-500 group-hover:text-white w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">Call Me</p>
                <p className="font-display font-bold text-lg">+91 76669 18811</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
