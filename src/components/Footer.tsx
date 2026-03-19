import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[8px] font-bold text-dark-900 font-mono">
              R/C
            </div>
            <span className="text-xs text-white/30">
              © {new Date().getFullYear()} Alex Chen. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs text-white/25">
            <span>Designed & built with</span>
            <Heart size={10} className="text-red-400 fill-red-400" />
            <span>using React + Tailwind CSS</span>
          </div>

          <div className="text-[10px] font-mono text-white/20">
            v2.0.0 — Last updated {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </div>
        </div>
      </div>
    </footer>
  );
}
