import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import FloatingElements from "@/components/FloatingElements";
import TechStack from "@/components/TechStack";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingElements />
      <Navigation />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <Experience />
        <TechStack />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20 bg-card/50">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Om Dadhe. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
