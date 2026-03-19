import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { SideProjects } from "./components/SideProjects";
import { Publications } from "./components/Publications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white/90">
      <Navbar />
      <Hero />
      
      {/* Divider */}
      <div className="section-container">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <About />

      <div className="section-container">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Skills />

      <div className="section-container">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Projects />

      <div className="section-container">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Experience />

      <div className="section-container">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <SideProjects />

      <div className="section-container">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Publications />

      <div className="section-container">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <Contact />
      <Footer />
    </div>
  );
}
