import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-bg-light dark:bg-bg-dark transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="font-display font-black text-4xl mb-3">VP<span className="text-brand-primary">.</span></h2>
          <p className="text-[10px] uppercase tracking-[0.4em] font-black text-text-light-secondary dark:text-text-dark-secondary">
            Architecting The Future &copy; {new Date().getFullYear()}
          </p>
        </div>
        
        <div className="flex gap-4">
          {[
            { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/vivekpadelkar" },
            { icon: <Github size={20} />, href: "#" },
            { icon: <Mail size={20} />, href: "mailto:vivek.padelkar@gmail.com" },
            { icon: <MessageSquare size={20} />, href: "#contact" }
          ].map((social, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.1, backgroundColor: "var(--color-brand-primary)", color: "#fff" }}
              href={social.href}
              className="p-4 glass rounded-2xl opacity-60 hover:opacity-100 transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        
        <div className="text-right flex flex-col items-center md:items-end gap-2">
          <p className="font-mono text-[10px] opacity-40 uppercase tracking-widest leading-relaxed">
            Built with React, Tailwind & Precision.
          </p>
          <div className="flex gap-4 items-center">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] uppercase font-bold tracking-widest opacity-60 italic">Available for remote leadership roles.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
