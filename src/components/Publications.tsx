import { useEffect, useRef, useState } from "react";
import { FileText, ExternalLink } from "lucide-react";
import { publications } from "../data/portfolio";

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

export function Publications() {
  const { ref, inView } = useInView();

  return (
    <section id="publications" className="relative py-24 md:py-32">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cyan-500/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative" ref={ref}>
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent text-sm">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications & Courses</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent max-w-xs" />
          </div>
          <p className="text-white/40 max-w-xl text-sm mt-2">
            Coursework and certifications from world-class institutions in robotics, control theory, and optimization.
          </p>
        </div>

        {/* Publications list */}
        <div className="space-y-4">
          {publications.map((pub, i) => (
            <a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-2xl border border-white/5 bg-dark-800/30 p-6 card-hover gradient-border transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <FileText size={18} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-semibold text-white/90 group-hover:text-accent transition-colors leading-snug mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-white/40 font-medium">
                    {pub.venue}
                  </p>
                </div>
                <ExternalLink size={16} className="text-white/20 group-hover:text-accent flex-shrink-0 mt-1 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
