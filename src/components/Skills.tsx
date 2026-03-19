import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";

function useInView(threshold = 0.15) {
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

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative" ref={ref}>
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Expertise</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent max-w-xs" />
          </div>
          <p className="text-white/40 max-w-xl text-sm mt-2">
            A comprehensive toolkit spanning control theory, robotics software, and embedded systems development.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.categories.map((cat, catIndex) => (
            <div
              key={cat.name}
              className={`rounded-2xl border border-white/5 bg-dark-800/30 p-6 card-hover gradient-border transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + catIndex * 150}ms` }}
            >
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent glow-dot" />
                {cat.name}
              </h3>

              <div className="space-y-4">
                {cat.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-white/70 font-medium">{skill.name}</span>
                      <span className="text-xs font-mono text-accent/70">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 skill-bar"
                        style={{
                          width: inView ? `${skill.level}%` : "0%",
                          transitionDelay: `${400 + catIndex * 150 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
