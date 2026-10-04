import { SectionHeading } from "./SectionHeading";
import { Server, Users, ShieldCheck, Bot } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto overflow-hidden text-center">
      <SectionHeading title="About Me." subtitle="The Story" centered />

      <div className="space-y-10">
        <h3 className="font-display text-4xl md:text-5xl font-black leading-tight uppercase tracking-widest">
          Backend systems that are <span className="text-brand-primary">fast, safe and maintainable.</span>
        </h3>

        <div className="space-y-6 text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed font-sans max-w-3xl mx-auto">
          <p>
            I'm a Senior Backend Engineer with <span className="text-brand-primary font-bold">10+ years</span> in software development, including 8+ years building microservices and RESTful APIs in Node.js, Express.js and TypeScript.
          </p>
          <p>
            At Zuno General Insurance I lead a team of 3 engineers. My recent work includes a compliance-focused Aadhaar data-masking pipeline, a legacy database migration from MSSQL to PostgreSQL, and performance work with Redis caching and CI/CD automation. I also use AI-assisted development tools such as Claude Code, GitHub Copilot, AWS Kiro and MCP every day to speed up delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-left">
          {[
            { icon: <Server className="text-indigo-500" />, title: "Backend Engineering", desc: "Microservices and REST APIs in Node.js, Express.js and TypeScript, with PostgreSQL and Redis." },
            { icon: <ShieldCheck className="text-emerald-500" />, title: "Data & Compliance", desc: "Aadhaar PII masking with Triple DES encryption, and an MSSQL to PostgreSQL migration with zero data loss." },
            { icon: <Users className="text-brand-primary" />, title: "Team Lead", desc: "Lead 3 engineers, running code reviews and technical mentoring." },
            { icon: <Bot className="text-orange-500" />, title: "AI-Assisted Development", desc: "Daily use of Claude Code, GitHub Copilot, AWS Kiro and MCP." },
          ].map((feature) => (
            <div key={feature.title} className="flex gap-4 p-6 glass rounded-2xl hover:bg-white/5 transition-all">
              <div className="shrink-0">{feature.icon}</div>
              <div>
                <h4 className="font-bold text-sm uppercase mb-1">{feature.title}</h4>
                <p className="text-xs opacity-60 leading-relaxed font-sans">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
