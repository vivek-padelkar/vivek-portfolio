import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-10"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6`}>
        <div className={`flex justify-between items-center glass p-3 rounded-[1.5rem] transition-all duration-500 ${
          scrolled ? "bg-white/80 dark:bg-black/80 shadow-2xl scale-[0.98]" : "bg-white/10 dark:bg-black/10 scale-100"
        }`}>
          <a href="#home" className="font-display font-black text-2xl tracking-tighter px-4">
            VP<span className="text-brand-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center px-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-sans text-[10px] font-bold uppercase tracking-widest hover:text-brand-primary transition-colors opacity-60 hover:opacity-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              className="p-3 glass rounded-xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass md:hidden overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="font-display text-4xl font-black uppercase tracking-tighter hover:text-brand-primary transition-colors text-right"
                >
                  {link.name}.
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
