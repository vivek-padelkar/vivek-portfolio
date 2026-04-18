import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, Calendar } from "lucide-react";

const workHistory = [
  {
    company: "Zuno General Insurance",
    role: "Senior Software Engineer",
    period: "Oct 2022 - Present",
    impact: [
      "Architected backend microservices using Node.js/Express with dependency injection for high-traffic insurance apps.",
      "Optimized PostgreSQL queries results in 45% improvement in system latency.",
      "Achieved 85%+ code coverage via comprehensive Jest strategy, reducing post-deployment defects by 40%.",
      "Automated CI/CD pipelines reducing deployment time by 60%.",
      "Implemented Redis caching reducing database load by 40%."
    ]
  },
  {
    company: "LearningMate",
    role: "Technical Lead",
    period: "Sep 2022 - Oct 2022",
    impact: [
      "Led backend architecture establishing coding standards and best practices.",
      "Reduced query execution time by 30% through database schema overhaul.",
      "Mentored junior developers on Node.js best practices and debugging techniques."
    ]
  },
  {
    company: "Mphasis",
    role: "Software Engineer",
    period: "Jul 2021 - Aug 2022",
    impact: [
      "Developed scalable backend services using Node.js, Express, and TypeScript.",
      "Reduced system downtime by 20% through advanced debugging and UAT support.",
      "Collaborated on seamless ReactJS/Angular integration for enterprise apps."
    ]
  },
  {
    company: "Brainvire Infotech",
    role: "Software Engineer",
    period: "Mar 2021 - Jun 2021",
    impact: [
      "Developed backend services and database integration for diverse client projects.",
      "Ensured timely defect resolution and high-quality deliveries in Agile sprints."
    ]
  },
  {
    company: "TantraSoft Solutions",
    role: "Software Engineer",
    period: "Mar 2018 - Mar 2021",
    impact: [
      "Managed end-to-end lifecycle for full-stack apps using Node.js and MongoDB.",
      "Developed custom dashboards with data visualization for high-stakes decision making.",
      "Engineered backend APIs ensuring seamless frontend integration."
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Impact History." subtitle="The Career" />
      
      <div className="space-y-12">
        {workHistory.map((job, i) => (
          <motion.div
            key={job.company + i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12 p-10 glass rounded-[2.5rem] hover:bg-opacity-100 transition-all overflow-hidden"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-3 text-brand-primary mb-4 font-mono text-[10px] font-bold uppercase tracking-widest">
                <Calendar size={14} />
                {job.period}
              </div>
              <h3 className="font-display text-3xl font-black mb-1 group-hover:text-brand-primary transition-colors">{job.company}</h3>
              <p className="font-sans font-bold text-sm uppercase tracking-widest opacity-60 flex items-center gap-2">
                <Briefcase size={14} />
                {job.role}
              </p>
            </div>
            
            <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-12">
              <ul className="space-y-4">
                {job.impact.map((point, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="shrink-0 mt-2 w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_10px_theme(colors.brand-primary)]" />
                    <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed font-sans">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="absolute top-0 right-0 p-20 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 -z-10 translate-x-1/2 -translate-y-1/2">
              <span className="font-display font-black text-9xl uppercase italic">{job.company.charAt(0)}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
