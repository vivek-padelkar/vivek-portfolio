import { motion } from "motion/react";
import { Server, Layout, Database, Workflow, Cpu, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const skillGroups = [
  {
    category: "Backend Architecture",
    icon: <Server className="text-indigo-500" />,
    skills: ["Node.js", "Express.js", "NestJS", "Microservices", "RESTful APIs", "Python", "TurboNode"]
  },
  {
    category: "Frontend Excellence",
    icon: <Layout className="text-brand-primary" />,
    skills: ["ReactJS", "TypeScript", "Angular", "Next.js", "HTML5/CSS3", "Tailwind CSS", "Redux"]
  },
  {
    category: "Data Strategy",
    icon: <Database className="text-emerald-500" />,
    skills: ["PostgreSQL (Query Optimization)", "MySQL", "MongoDB", "Redis (Caching)", "Prisma", "Elasticsearch"]
  },
  {
    category: "DevOps & Scale",
    icon: <Workflow className="text-blue-500" />,
    skills: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "CI/CD Pipelines", "Jenkins", "GitHub Actions", "Kubernetes"]
  },
  {
    category: "Quality Auditing",
    icon: <ShieldCheck className="text-orange-500" />,
    skills: ["Jest", "Jasmine", "Unit Testing", "Integration Testing", "TDD", "Code Reviews"]
  },
  {
    category: "Observability",
    icon: <Cpu className="text-purple-500" />,
    skills: ["Apache SkyWalking", "Sentry", "Metabase", "Advanced Debugging", "Technical Mentoring"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Technical Versatility." subtitle="The Architecture" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 glass rounded-3xl hover:border-brand-primary transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {group.icon}
            </div>
            <h3 className="font-display text-2xl font-bold uppercase mb-6">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 dark:bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-text-light-secondary dark:text-text-dark-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
