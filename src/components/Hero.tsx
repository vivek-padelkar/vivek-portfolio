import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const highlights = [
  { value: "45%", label: "Faster API response times (Redis caching)" },
  { value: "40%", label: "Lower database load" },
  { value: "60%", label: "Faster deployments (CI/CD automation)" },
  { value: "~172K", label: "Records processed in Aadhaar PII-masking pipeline" },
];

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-bold text-[10px] uppercase tracking-[0.2em] rounded-full mb-8">
              Open to Senior Backend &amp; Tech Lead Roles
            </span>
            <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] font-black tracking-tighter uppercase mb-10">
              Scalable <span className="text-brand-primary">APIs.</span><br />
              Secure <span className="italic opacity-50">Data.</span><br />
              Reliable Delivery.
            </h1>
            <p className="font-sans text-text-light-secondary dark:text-text-dark-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
              Senior Backend Engineer with <span className="text-text-light-primary dark:text-text-dark-primary font-bold">10+ years</span> in software development, building microservices and REST APIs in Node.js, Express.js and TypeScript. Currently leading a team of 3 engineers at Zuno General Insurance.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-brand-primary text-white px-10 py-5 font-bold uppercase tracking-widest text-xs flex items-center gap-3 rounded-xl shadow-2xl shadow-brand-primary/20 transition-all group"
              >
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Vivek_Padelkar_Resume.pdf"
                download
                className="border border-text-light-primary dark:border-text-dark-primary px-10 py-5 font-bold uppercase tracking-widest text-xs flex items-center gap-3 rounded-xl hover:bg-text-light-primary hover:text-white dark:hover:bg-text-dark-primary dark:hover:text-black transition-all"
              >
                Download CV
                <Download size={16} />
              </motion.a>

              <div className="flex gap-4 ml-0 md:ml-4">
                {[
                  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/vivekpadelkar", label: "LinkedIn" },
                  { icon: <Github size={20} />, href: "https://github.com/vivek-padelkar", label: "GitHub" },
                  { icon: <Mail size={20} />, href: "mailto:vivek.padelkar@gmail.com", label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ y: -3, color: "var(--color-brand-primary)" }}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="p-3 glass rounded-xl opacity-60 hover:opacity-100 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10 glass rounded-3xl p-8 md:p-10"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-primary font-bold mb-8">
              Impact at Zuno General Insurance
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {highlights.map((item) => (
                <div key={item.value}>
                  <h3 className="font-display text-5xl font-black text-brand-primary mb-2">{item.value}</h3>
                  <p className="font-sans text-xs leading-relaxed opacity-60">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-brand-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
