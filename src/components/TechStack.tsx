import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const TechStack = () => {
  const techCategories = [
    {
      category: "Backend",
      technologies: ["Java", "Spring Boot", "Node.js", "Express.js", "FastAPI", "Microservices"],
      icon: "⚙️"
    },
    {
      category: "Frontend", 
      technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      icon: "🎨"
    },
    {
      category: "Database",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Supabase"],
      icon: "🗄️"
    },
    {
      category: "Tools & DevOps",
      technologies: ["Docker", "Git", "GitHub", "Kafka", "JUnit", "Agile"],
      icon: "🔧"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Technology Arsenal</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Full-stack expertise across modern technologies and frameworks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category) => (
            <Card key={category.category} className="bg-card border-border card-hover group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h4 className="font-semibold text-white group-hover:text-accent transition-colors">
                    {category.category}
                  </h4>
                </div>
                <div className="space-y-2">
                  {category.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs mr-1 mb-1 text-white border-white/30 hover:border-accent hover:text-accent transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;