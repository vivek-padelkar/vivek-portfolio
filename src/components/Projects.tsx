import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink, Github, Filter, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Insurance Policy Microservices Platform",
    description: "Modular Node.js + Express microservices powering policy issuance, claims and quotes for a high-traffic insurer.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS", "Docker"],
    impact: "Cut API latency by 30% and DB load by 40% through Redis caching and query tuning."
  },
  {
    title: "Observability & Incident Response Stack",
    description: "End-to-end tracing, error tracking and alerting setup using Apache SkyWalking + Sentry across services.",
    tags: ["SkyWalking", "Sentry", "Node.js", "Jenkins"],
    impact: "Reduced production downtime 35% via proactive issue detection."
  },
  {
    title: "CI/CD Automation Pipeline",
    description: "Git-based pipeline with Jenkins and AWS deploy targets — repeatable, gated, observable releases.",
    tags: ["Jenkins", "AWS", "Docker", "Git"],
    impact: "60% faster deployments with safer rollouts."
  },
  {
    title: "Full-Stack Reporting Dashboard",
    description: "React + Node dashboard delivering custom reports and visualizations for client decision-making.",
    tags: ["ReactJS", "Node.js", "MongoDB", "Metabase"],
    impact: "Replaced ad-hoc Excel workflows with self-serve analytics."
  },
  {
    title: "Test Automation Framework",
    description: "Jest-based unit + integration testing strategy with CI gating and coverage reporting.",
    tags: ["Jest", "Node.js", "TypeScript"],
    impact: "85%+ coverage and 40% fewer post-deploy defects."
  },
  {
    title: "Internal Ops Tooling (Low-Code)",
    description: "Appsmith-based internal tools wired to Node APIs — replacing manual back-office workflows.",
    tags: ["Appsmith", "Node.js", "PostgreSQL"],
    impact: "Weeks of dev time saved per internal request."
  }
];

const filters = [
  "All", "Node.js", "Express", "PostgreSQL", "Redis", "AWS", "Docker", 
  "SkyWalking", "Sentry", "Jenkins", "Git", "ReactJS", "MongoDB", 
  "Metabase", "Jest", "TypeScript", "Appsmith"
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(p => 
    activeFilter === "All" || p.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <SectionHeading 
          title="Selected work, real outcomes." 
          subtitle="Projects" 
        />
        <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg max-w-2xl -mt-8 mb-12">
          A snapshot of systems I've designed and shipped. Filter by stack to see the relevant work.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all glass ${
                activeFilter === f ? "bg-brand-primary text-white" : "opacity-60 hover:opacity-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group glass rounded-[2.5rem] p-10 flex flex-col justify-between hover:border-brand-primary transition-all relative overflow-hidden"
            >
              <div>
                <h3 className="font-display text-4xl font-black mb-6 group-hover:text-brand-primary transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight size={24} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-4" />
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-lg text-[10px] font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-8 mt-auto">
                <p className="font-display text-base font-bold italic text-brand-primary group-hover:translate-x-2 transition-transform">
                  &rarr; Impact: {project.impact}
                </p>
              </div>

              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-1000" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
