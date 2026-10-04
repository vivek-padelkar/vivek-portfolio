import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const workHistory = [
  {
    company: "Zuno General Insurance",
    role: "Senior Software Engineer",
    period: "Oct 2022 - Present",
    impact: [
      "Architected scalable backend microservices in Node.js and Express.js with dependency injection and modular design patterns for high-traffic insurance applications.",
      "Designed and built a 4-stage Aadhaar data-masking pipeline (Ingestion → Replication → Masking → Upload) processing ~172,000 records with Triple DES encryption and checkpoint-based recovery.",
      "Led the Phoenix migration, moving core policy-data services from MSSQL to PostgreSQL, including custom field-mapping logic, with zero data loss.",
      "Designed and implemented Redis caching strategies, cutting database load by 40% and improving API response times by 45%.",
      "Built a Jest-based testing strategy achieving 85%+ code coverage, contributing to a 40% reduction in post-deployment defects.",
      "Automated CI/CD pipelines using Git, Jenkins and AWS services, reducing deployment time by 60%.",
      "Integrated Apache SkyWalking and Sentry for proactive monitoring, reducing production downtime by 35%.",
      "Led a cross-functional team of 3 engineers, running code reviews and technical mentoring to maintain engineering standards."
    ]
  },
  {
    company: "LearningMate",
    role: "Technical Lead",
    period: "Sep 2022 - Oct 2022",
    impact: [
      "Led backend architecture design and implementation in Node.js and Express.js, establishing coding standards and best practices.",
      "Optimized PostgreSQL and MySQL schemas and indexing strategies, cutting query execution time by 30%.",
      "Guided ReactJS frontend integration and mentored junior developers on Node.js best practices and debugging."
    ]
  },
  {
    company: "Mphasis",
    role: "Software Engineer",
    period: "Jul 2021 - Aug 2022",
    impact: [
      "Developed scalable backend services in Node.js, Express.js and TypeScript, implementing RESTful APIs for enterprise applications.",
      "Provided UAT and production support, using advanced debugging techniques to reduce system downtime by 20%.",
      "Collaborated with frontend teams on Angular and ReactJS integration, ensuring smooth API integration and optimal performance."
    ]
  },
  {
    company: "Brainvire Infotech",
    role: "Software Engineer",
    period: "Mar 2021 - Jun 2021",
    impact: [
      "Developed backend services in Node.js and Express.js, implementing business logic and database integration for client projects.",
      "Supported Agile sprint deliveries through close collaboration and timely defect resolution."
    ]
  },
  {
    company: "TantraSoft Solutions",
    role: "Software Engineer",
    period: "Mar 2018 - Mar 2021",
    impact: [
      "Managed end-to-end development of full-stack applications using Node.js, Express.js, ReactJS, HTML5, CSS3, MongoDB and MySQL.",
      "Designed backend APIs, ReactJS frontend components and database schemas ensuring seamless integration and performance.",
      "Developed custom reports and dashboards with data visualization, supporting client decision-making."
    ]
  },
  {
    company: "Trackon Courier",
    role: "Software Developer",
    period: "Dec 2017 - Mar 2018",
    impact: [
      "Developed and maintained software applications for courier management operations."
    ]
  },
  {
    company: "Greysoft Solutions",
    role: "Trainee VBA Developer",
    period: "May 2016 - Dec 2017",
    impact: [
      "Designed user interfaces and conducted code reviews applying best practices in VB.NET, VB6 and MSSQL.",
      "Wrote complex SQL queries for data retrieval and manipulation, ensuring optimal database performance."
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading title="Experience." subtitle="The Career" />

      <div className="space-y-12">
        {workHistory.map((job, i) => (
          <motion.div
            key={job.company + i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
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

        <div className="flex items-center gap-6 p-10 glass rounded-[2.5rem]">
          <GraduationCap className="text-brand-primary shrink-0" size={32} />
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-1">Education &middot; 2015</p>
            <h3 className="font-display text-2xl font-black">B.Sc Information Technology</h3>
            <p className="font-sans text-sm opacity-60">M.L. Dahanukar College, Mumbai</p>
          </div>
        </div>
      </div>
    </section>
  );
};
