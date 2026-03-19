import { useEffect, useRef, useState } from "react";
import { Cpu, Cog, Code2, Brain } from "lucide-react";
import { aboutText } from "../data/portfolio";

function useInView(threshold = 0.2) {
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

export function About() {
  const { ref, inView } = useInView();

  const highlights = [
    { icon: Cpu, label: "Optimal Control", desc: "LQR, MPC, convex QP controllers" },
    { icon: Cog, label: "Legged Robotics", desc: "Gait planning & centroidal dynamics" },
    { icon: Code2, label: "Autonomous Vehicles", desc: "ADAS simulation & path tracking" },
    { icon: Brain, label: "Computer Vision", desc: "U-Net segmentation & OpenCV" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent max-w-xs" />
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Text column */}
          <div className={`lg:col-span-3 space-y-5 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {aboutText.paragraphs.map((p, i) => (
              <p key={i} className="text-white/55 leading-relaxed text-[15px]">
                {p}
              </p>
            ))}

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3 pt-6">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className={`p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-300 group ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <Icon size={18} className="text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-semibold text-white/80 mb-0.5">{label}</div>
                  <div className="text-xs text-white/40">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats / Visual column */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Terminal-style card */}
            <div className="rounded-2xl border border-white/5 bg-dark-800/50 overflow-hidden gradient-border">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-[11px] font-mono text-white/30">~/about.yaml</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-[13px] space-y-3">
                <div>
                  <span className="text-accent/70">name</span>
                  <span className="text-white/30">: </span>
                  <span className="text-white/70">"Aniket Kumar"</span>
                </div>
                <div>
                  <span className="text-accent/70">degree</span>
                  <span className="text-white/30">: </span>
                  <span className="text-white/70">"B.Tech Mechanical, VNIT"</span>
                </div>
                <div>
                  <span className="text-accent/70">focus</span>
                  <span className="text-white/30">:</span>
                </div>
                <div className="pl-4 space-y-1">
                  {["MPC & Optimal Control", "Legged Locomotion", "Autonomous Vehicles", "Embedded Robotics"].map((f) => (
                    <div key={f}>
                      <span className="text-white/30">- </span>
                      <span className="text-white/60">{f}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <span className="text-accent/70">status</span>
                  <span className="text-white/30">: </span>
                  <span className="text-green-400/80">"open to opportunities"</span>
                  <span className="inline-block w-2 h-4 bg-accent/60 ml-1 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {aboutText.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-4 rounded-xl border border-white/5 bg-dark-800/30 text-center transition-all duration-500 ${
                    inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-[11px] font-medium text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
