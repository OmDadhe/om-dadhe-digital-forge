import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Code Review System",
      description: "Architected a scalable backend infrastructure for an AI application serving 10,000+ users with real-time code analysis and suggestions.",
      image: "🤖",
      tags: ["Node.js", "Express.js", "FastAPI", "Supabase", "Redis", "Kafka", "Docker"],
      achievements: [
        "Built microservices architecture with 99.9% uptime",
        "Implemented real-time code adjustment suggestions",
        "Integrated ML models through optimized API endpoints",
        "45% improvement in application response time"
      ],
      metrics: {
        users: "10,000+",
        uptime: "99.9%",
        performance: "45%"
      }
    },
    {
      title: "Enhanced ATS for HR Consultancy",
      description: "Developed a comprehensive Applicant Tracking System processing 1000+ applications daily with advanced filtering and optimization.",
      image: "💼",
      tags: ["Java", "JDBC", "JavaFX", "MySQL", "JUnit", "RESTful APIs"],
      achievements: [
        "Architected scalable ATS processing 1000+ daily applications",
        "Implemented caching mechanisms reducing database load by 35%",
        "Built with SOLID principles for maintainable code",
        "Achieved 90% code coverage with automated testing"
      ],
      metrics: {
        applications: "1000+",
        performance: "35%",
        coverage: "90%"
      }
    },
    {
      title: "Portfolio Builder Platform",
      description: "Full-stack application with microservices architecture deployed on AWS, featuring CI/CD pipeline and containerization.",
      image: "🌐",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS", "Docker", "CI/CD"],
      achievements: [
        "Developed full-stack MERN application",
        "Implemented microservices architecture on AWS",
        "CI/CD pipeline with GitHub Actions",
        "Containerized deployment with Docker"
      ],
      metrics: {
        deployment: "AWS",
        automation: "CI/CD",
        architecture: "Microservices"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing scalable backend solutions with real-world impact and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="bg-gradient-card border-primary/20 shadow-premium hover:shadow-glow-primary transition-all duration-500 group overflow-hidden">
              <CardHeader className="space-y-4">
                <div className="text-6xl text-center">{project.image}</div>
                <div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Key Achievements */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary text-sm">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primary/20">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary/10 group-hover:border-primary/40 transition-all">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-primary/20 shadow-premium p-8 max-w-2xl mx-auto">
            <CardContent className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">Ready to Build Something Amazing?</h3>
              <p className="text-muted-foreground">
                Let's discuss how my backend expertise can help scale your next project
              </p>
              <Button variant="premium" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;