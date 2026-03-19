import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolio";

function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background effects */}
      <CircuitBackground />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[700px] md:h-[700px]">
        <div className="absolute inset-0 rounded-full border border-white/[0.03] animate-spin-slow" />
        <div className="absolute inset-8 rounded-full border border-cyan-500/[0.05]" style={{ animation: 'spin-slow 30s linear infinite reverse' }} />
        <div className="absolute inset-16 rounded-full border border-white/[0.02]" style={{ animation: 'spin-slow 40s linear infinite' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/60 mb-8">
            <MapPin size={12} className="text-accent" />
            {personalInfo.location}
            <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse-glow" />
            <span className="text-green-400">Available for opportunities</span>
          </div>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <span className="text-white">{personalInfo.name.split(" ")[0]}</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent glow-text">
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="text-accent font-mono text-sm tracking-widest uppercase">
              {personalInfo.title}
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
        </div>

        <p
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          {personalInfo.tagline}
        </p>

        {/* CTA & Social */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "1s", animationFillMode: "both" }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-900 font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl border border-white/15 text-white/80 font-medium text-sm hover:bg-white/5 hover:border-white/25 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "1.2s", animationFillMode: "both" }}
        >
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
              title={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.5s", animationFillMode: "both" }}>
        <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="text-white/30 animate-bounce" />
      </div>
    </section>
  );
}
