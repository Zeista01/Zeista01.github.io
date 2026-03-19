import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolio";

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

export function Contact() {
  const { ref, inView } = useInView();

  const socials = [
    { icon: Github, label: "GitHub", href: personalInfo.github, handle: "@Zeista01" },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin, handle: "/in/aniket-kumar-84829b2a7" },
    { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}`, handle: personalInfo.email },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-mono text-accent text-sm">07.</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">Let's Build Something</h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
            I'm always open to discussing robotics research, internships, collaborations, 
            or any interesting project in controls and autonomous systems.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Main CTA */}
          <div
            className={`text-center mb-10 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-900 font-bold text-base hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <Send size={18} />
              Say Hello
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Social links in inverted-triangle layout (2 top, 1 bottom centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-dark-800/30 hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-500 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } ${i === socials.length - 1 ? "sm:col-span-2 sm:w-[calc(50%-0.375rem)] sm:mx-auto" : ""}`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
                    <Icon size={18} className="text-white/50 group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                      {social.label}
                    </div>
                    <div className="text-xs text-white/35 truncate">{social.handle}</div>
                  </div>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-accent transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
