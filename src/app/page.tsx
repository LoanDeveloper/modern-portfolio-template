import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import BackgroundLights from "@/components/BackgroundLights";

export default function Home() {
  return (
    <main className="relative min-h-screen text-foreground selection:bg-primary/30">
      {/* Background Layer inside the flow */}
      <BackgroundLights />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
