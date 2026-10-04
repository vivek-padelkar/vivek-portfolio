import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aadhaar Data-Masking Pipeline",
    company: "Zuno General Insurance",
    description:
      "A 4-stage pipeline (Ingestion → Replication → Masking → Upload) that protects personal data. It uses Triple DES encryption and checkpoint-based recovery, so a failed run can resume instead of starting over.",
    tags: ["Data Pipeline", "Triple DES", "PII Masking", "Checkpoint Recovery"],
    impact: "Compliance-grade PII protection across ~172,000 records.",
  },
  {
    title: "Phoenix: MSSQL to PostgreSQL Migration",
    company: "Zuno General Insurance",
    description:
      "Led the move of core policy-data services from MSSQL to PostgreSQL, including custom field-mapping logic between the two schemas.",
    tags: ["MSSQL", "PostgreSQL", "Data Migration", "Field Mapping"],
    impact: "Completed with zero data loss.",
  },
  {
    title: "Caching & Performance Tuning",
    company: "Zuno General Insurance",
    description:
      "Designed and implemented Redis caching strategies for high-traffic insurance services built as Node.js and Express.js microservices.",
    tags: ["Redis", "Node.js", "Express.js", "PostgreSQL"],
    impact: "40% lower database load and 45% faster API response times.",
  },
  {
    title: "Delivery, Testing & Monitoring",
    company: "Zuno General Insurance",
    description:
      "Automated CI/CD with Git, Jenkins and AWS, built a Jest testing strategy, and added Apache SkyWalking and Sentry for proactive monitoring.",
    tags: ["Jenkins", "AWS", "Jest", "SkyWalking", "Sentry"],
    impact: "60% faster deployments, 85%+ test coverage, 40% fewer post-deployment defects, 35% less production downtime.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <SectionHeading title="Key Work." subtitle="Projects" />
        <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg max-w-2xl -mt-8">
          Selected projects from my current role. The code is proprietary, so these describe what I built and the results.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group glass rounded-[2.5rem] p-10 flex flex-col justify-between hover:border-brand-primary transition-all relative overflow-hidden"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-4">{project.company}</p>
              <h3 className="font-display text-3xl md:text-4xl font-black mb-6 group-hover:text-brand-primary transition-colors flex items-start justify-between">
                {project.title}
                <ArrowUpRight size={24} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-4 mt-2" />
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
              <p className="font-display text-base font-bold italic text-brand-primary">
                &rarr; Result: {project.impact}
              </p>
            </div>

            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-1000" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
