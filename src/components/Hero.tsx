import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-card border border-border">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground">Available for Full-time Opportunities</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-pulse">
                Om Dadhe
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold">
              Backend Engineering Specialist
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              B.Tech Computer Science Engineer crafting scalable backend solutions with 
              <span className="text-accent font-medium"> microservices architecture</span>, 
              <span className="text-primary font-medium"> AI integration</span>, and 
              <span className="text-primary font-medium"> real-time systems</span>
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">45%</div>
              <div className="text-sm text-muted-foreground">Performance Boost</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;