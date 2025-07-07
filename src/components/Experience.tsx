import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Backend Developer Intern",
      company: "LoomyLabs",
      period: "2024",
      type: "Internship",
      description: "Architected and developed scalable backend infrastructure for an AI-powered application serving 10,000+ users",
      technologies: ["Node.js", "Express.js", "FastAPI", "Supabase", "Redis", "Kafka", "Microservices", "Docker"],
      achievements: [
        "Built RESTful APIs using Node.js/Express.js and FastAPI with microservices architecture",
        "Integrated Supabase for real-time database operations and authentication, reducing development time by 50%",
        "Implemented Redis caching layer and Kafka message queuing system, improving response time by 45%",
        "Designed event-driven architecture ensuring 99.9% uptime and seamless scalability",
        "Collaborated with ML engineers to integrate AI models through optimized API endpoints"
      ],
      impact: {
        users: "10,000+",
        uptime: "99.9%",
        performance: "45%",
        efficiency: "50%"
      }
    },
    {
      role: "Software Engineer Intern",
      company: "Eduaccess Information Services Private Limited",
      period: "2024",
      type: "Internship",
      description: "Developed and optimized an ATS system, improving candidate screening efficiency by 40%",
      technologies: ["Java", "JDBC", "MySQL", "JavaFX", "Git", "Agile", "RESTful APIs", "JUnit"],
      achievements: [
        "Implemented RESTful APIs and database optimizations, reducing query execution time by 30%",
        "Created automated testing procedures with JUnit, achieving 90% code coverage",
        "Collaborated in an Agile environment with daily stand-ups and sprint planning",
        "Architected scalable system processing 1000+ applications daily with SOLID principles"
      ],
      impact: {
        efficiency: "40%",
        performance: "30%",
        coverage: "90%",
        applications: "1000+"
      }
    }
  ];

  const education = {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "University Name",
    period: "2021-2025",
    gpa: "8.5/10",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Object-Oriented Programming"
    ]
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and gaining expertise in modern backend technologies
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={exp.company} className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow-subtle transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">{exp.role}</CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge variant="secondary">{exp.period}</Badge>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">{exp.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-accent mt-1 text-base">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-primary/20">
                  {Object.entries(exp.impact).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-bold text-primary text-lg">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <Card className="bg-gradient-card border-secondary/20 shadow-card hover:shadow-glow-secondary transition-all duration-300">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-xl text-secondary">Education</CardTitle>
                <CardDescription className="text-lg font-medium text-foreground">
                  {education.degree}
                </CardDescription>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <Badge variant="secondary">{education.period}</Badge>
                <Badge variant="outline">GPA: {education.gpa}</Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div>
              <h4 className="font-semibold text-secondary mb-3">Relevant Coursework:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {education.courses.map((course) => (
                  <Badge key={course} variant="secondary" className="text-xs justify-center">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;