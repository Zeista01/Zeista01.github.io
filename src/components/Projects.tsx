import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "../data/portfolio";

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

function isThumbnailUrl(value: string) {
  return (
    value.startsWith("/") ||
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    /\.(png|jpe?g|webp|gif|svg|avif)$/i.test(value)
  );
}

export function Projects() {
  const { ref, inView } = useInView();
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const displayProjects = showAll ? projects : featured;

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative" ref={ref}>
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent max-w-xs" />
          </div>
          <p className="text-white/40 max-w-xl text-sm mt-2">
            A selection of robotics and controls projects demonstrating end-to-end system design.
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-6">
          {displayProjects.map((project, i) => (
            <div
              key={project.title}
              className={`group rounded-2xl border border-white/5 bg-dark-800/30 overflow-hidden card-hover gradient-border transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Project visual */}
                <div className="md:w-64 lg:w-80 flex-shrink-0 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-500" />
                  {isThumbnailUrl(project.image) ? (
                    <img
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      className="relative w-full h-40 md:h-48 object-cover rounded-xl border border-white/10"
                    />
                  ) : (
                    <div className="relative text-6xl md:text-7xl transform group-hover:scale-110 transition-transform duration-500">
                      {project.image}
                    </div>
                  )}
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>

                {/* Project info */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  {project.featured && (
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest mb-2">
                      Featured Project
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-accent/5 text-accent/70 border border-accent/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors"
                      >
                        <Github size={15} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors"
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        {others.length > 0 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/60 text-sm font-medium hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
            >
              {showAll ? "Show Less" : `Show ${others.length} More Projects`}
              <ArrowRight size={14} className={`transition-transform ${showAll ? "rotate-90" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
