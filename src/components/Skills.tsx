import { motion } from "motion/react";
import { Code2, Network, Database, Cloud, ShieldCheck, Activity, Bot, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const skillGroups = [
  {
    category: "Languages & Frameworks",
    icon: <Code2 className="text-indigo-500" />,
    skills: ["Node.js", "Express.js", "TypeScript", "JavaScript", "Python", "ReactJS", "HTML5", "CSS3"]
  },
  {
    category: "Architecture",
    icon: <Network className="text-brand-primary" />,
    skills: ["Microservices", "RESTful API Design", "System Design", "Dependency Injection", "Message Queues (AWS SQS)"]
  },
  {
    category: "Databases & Caching",
    icon: <Database className="text-emerald-500" />,
    skills: ["PostgreSQL (query & index optimization)", "MySQL", "MongoDB", "Redis"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="text-blue-500" />,
    skills: ["AWS (EC2, S3, Lambda, RDS, API Gateway, SQS)", "Docker", "CI/CD (Git, Jenkins)"]
  },
  {
    category: "Testing & Quality",
    icon: <ShieldCheck className="text-orange-500" />,
    skills: ["Jest", "Unit & Integration Testing", "Test-Driven Development", "Code Review"]
  },
  {
    category: "Observability",
    icon: <Activity className="text-purple-500" />,
    skills: ["Apache SkyWalking", "Sentry", "Metabase"]
  },
  {
    category: "AI-Assisted Development",
    icon: <Bot className="text-pink-500" />,
    skills: ["Claude Code", "GitHub Copilot", "AWS Kiro", "MCP (Model Context Protocol)"]
  },
  {
    category: "Leadership",
    icon: <Users className="text-teal-500" />,
    skills: ["Team Leadership (3 engineers)", "Technical Mentoring", "Agile/Scrum", "SDLC"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Skills & Tools." subtitle="The Toolkit" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-8 glass rounded-3xl hover:border-brand-primary transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {group.icon}
            </div>
            <h3 className="font-display text-xl font-bold uppercase mb-6">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-text-light-secondary dark:text-text-dark-secondary">
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
