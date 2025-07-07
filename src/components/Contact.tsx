import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "om.dadhe@example.com",
      icon: "📧",
      action: "mailto:om.dadhe@example.com"
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/om-dadhe",
      icon: "💼",
      action: "https://linkedin.com/in/om-dadhe"
    },
    {
      type: "GitHub",
      value: "github.com/om-dadhe",
      icon: "🐙",
      action: "https://github.com/om-dadhe"
    },
    {
      type: "Location",
      value: "Available for Remote & Relocation",
      icon: "📍",
      action: null
    }
  ];

  const availability = [
    { status: "Full-time Opportunities", available: true },
    { status: "Contract Projects", available: true },
    { status: "Technical Consulting", available: true },
    { status: "Mentoring & Code Reviews", available: true }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Build Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next backend project or explore collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-primary/20 shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <span>📬</span>
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input placeholder="Your name" className="bg-muted/50 border-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="bg-muted/50 border-primary/20" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input placeholder="Project discussion, job opportunity, etc." className="bg-muted/50 border-primary/20" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, requirements, or questions..."
                  className="bg-muted/50 border-primary/20 min-h-[120px]"
                />
              </div>
              
              <Button variant="premium" size="lg" className="w-full">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information & Availability */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="bg-gradient-card border-secondary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-secondary flex items-center gap-2">
                  <span>🤝</span>
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact) => (
                  <div key={contact.type} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{contact.icon}</span>
                      <div>
                        <div className="font-medium text-foreground">{contact.type}</div>
                        <div className="text-sm text-muted-foreground">{contact.value}</div>
                      </div>
                    </div>
                    {contact.action && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={contact.action} target="_blank" rel="noopener noreferrer">
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-gradient-card border-accent/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <span>⚡</span>
                  Current Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {availability.map((item) => (
                  <div key={item.status} className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{item.status}</span>
                    <Badge 
                      variant={item.available ? "default" : "secondary"}
                      className={item.available ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
                    >
                      {item.available ? "Available" : "Busy"}
                    </Badge>
                  </div>
                ))}
                
                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="font-medium text-primary">Quick Response Time</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours. For urgent matters, feel free to reach out directly.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills Summary */}
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <span>🎯</span>
                  What I Bring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Scalable microservices architecture design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Real-time systems with Redis & Kafka</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>AI/ML integration through optimized APIs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent">•</span>
                    <span>Cloud deployment with Docker & AWS</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;