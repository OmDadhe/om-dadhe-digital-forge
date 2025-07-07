import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 95, icon: "⚡" },
        { name: "Express.js", level: 90, icon: "🌐" },
        { name: "FastAPI", level: 85, icon: "🚀" },
        { name: "Spring Boot", level: 80, icon: "☕" },
        { name: "Microservices", level: 90, icon: "🔧" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 95, icon: "💛" },
        { name: "Java", level: 90, icon: "☕" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "C", level: 75, icon: "⚙️" },
        { name: "SQL", level: 88, icon: "🗃️" }
      ]
    },
    {
      title: "Databases & Messaging",
      skills: [
        { name: "Supabase", level: 90, icon: "⚡" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "MySQL", level: 88, icon: "🐬" },
        { name: "Redis", level: 85, icon: "🔴" },
        { name: "Apache Kafka", level: 80, icon: "📡" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Docker", level: 85, icon: "🐋" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Kubernetes", level: 75, icon: "⚙️" },
        { name: "CI/CD", level: 85, icon: "🔄" },
        { name: "Git/GitHub", level: 95, icon: "🐙" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized in building scalable backend systems with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow-subtle transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full shadow-glow-primary transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center bg-gradient-card border-accent/20 shadow-card hover:shadow-glow-accent transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-3xl mb-2">🏗️</div>
              <h3 className="font-semibold text-accent mb-2">Architecture Design</h3>
              <p className="text-sm text-muted-foreground">Event-driven microservices with 99.9% uptime</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-gradient-card border-secondary/20 shadow-card hover:shadow-glow-secondary transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-secondary mb-2">Performance Optimization</h3>
              <p className="text-sm text-muted-foreground">45% response time improvement with caching</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-gradient-card border-primary/20 shadow-card hover:shadow-glow-primary transition-all duration-300">
            <CardContent className="pt-6">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold text-primary mb-2">AI Integration</h3>
              <p className="text-sm text-muted-foreground">Real-time code review with ML-powered suggestions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;