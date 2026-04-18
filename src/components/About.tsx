import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { User, Code, Rocket, BrainCircuit } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto overflow-hidden text-center">
      <SectionHeading title="The Philosophy." subtitle="The Story" centered />
      
      <div className="space-y-12">
        <div className="space-y-10">
          <h3 className="font-display text-4xl md:text-5xl font-black leading-tight uppercase tracking-widest">
            I don't just write code.<br />
            I build <span className="text-brand-primary">Digital Foundations.</span>
          </h3>
          
          <div className="space-y-6 text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed font-sans max-w-3xl mx-auto">
            <p>
              With <span className="text-brand-primary font-bold italic underline decoration-brand-primary/20">over a decade</span> in the trenches of full-stack development, I've seen the industry evolve from monolithic structures to distributed cloud architectures. My focus is on the sweet spot between cutting-edge performance and long-term maintainability.
            </p>
            <p>
              I thrive on untangling complex legacy systems and transforming them into robust, microservices-driven ecosystems. Whether it's reducing latency for a massive insurance platform or mentoring the next generation of engineers, my goal is always the same: <span className="text-text-light-primary dark:text-text-dark-primary font-bold">Scaling Excellence.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-left">
            {[
              { icon: <BrainCircuit className="text-indigo-500" />, title: "Problem Solver", desc: "Expert at deep-dive debugging and high-level architecture." },
              { icon: <Rocket className="text-brand-primary" />, title: "Team Lead", desc: "Mentored 2-5 engineers to deliver high-velocity products." },
              { icon: <Code className="text-emerald-500" />, title: "Full Stack", desc: "Bridging the gap between robust backends and premium UIs." },
              { icon: <User className="text-orange-500" />, title: "Strategist", desc: "Aligning technical decisions with core business goals." }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 glass rounded-2xl hover:bg-white/5 transition-all">
                <div className="shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-sm uppercase mb-1">{feature.title}</h4>
                  <p className="text-xs opacity-60 leading-relaxed font-sans">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
