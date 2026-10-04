import { Mail, Linkedin, Github } from "lucide-react";

const channels = [
  {
    href: "mailto:vivek.padelkar@gmail.com",
    icon: Mail,
    label: "Email",
    value: "vivek.padelkar@gmail.com",
    external: false,
  },
  {
    href: "https://linkedin.com/in/vivekpadelkar",
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/vivekpadelkar",
    external: true,
  },
  {
    href: "https://github.com/vivek-padelkar",
    icon: Github,
    label: "GitHub",
    value: "vivek-padelkar",
    external: true,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto glass rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-40 opacity-5 -z-0">
          <Mail size={400} />
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
            Let's <span className="text-brand-primary">Talk.</span>
          </h2>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-xl mb-16 max-w-2xl leading-relaxed mx-auto">
            I'm open to senior backend and tech lead roles. Email or LinkedIn is the best way to reach me.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {channels.map(({ href, icon: Icon, label, value, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="flex flex-col items-center gap-4 p-8 glass rounded-3xl hover:bg-brand-primary group transition-all"
              >
                <div className="p-5 bg-white/5 rounded-2xl group-hover:bg-white/20 transition-colors">
                  <Icon className="text-brand-primary group-hover:text-white w-8 h-8" />
                </div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">{label}</p>
                  <p className="font-display font-bold text-sm md:text-[13px] lg:text-base break-words">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
