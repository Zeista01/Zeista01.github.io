import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolio";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent max-w-xs" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div
                key={exp.role + exp.company}
                className={`relative pl-12 md:pl-20 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-dark-900 border-2 border-accent glow-dot" />

                {/* Card */}
                <div className="rounded-2xl border border-white/5 bg-dark-800/30 p-6 md:p-8 card-hover gradient-border group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-accent/60" />
                        <span className="text-sm font-medium text-accent/80">{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-white/35 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-white/45 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-accent/5 text-accent/60 border border-accent/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
