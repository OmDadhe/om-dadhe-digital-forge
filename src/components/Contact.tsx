import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "omdadhe07@gmail.com",
      action: "mailto:omdadhe07@gmail.com"
    },
    {
      type: "LinkedIn",
      value: "www.linkedin.com/in/contactom",
      action: "https://www.linkedin.com/in/contactom"
    },
    {
      type: "GitHub",
      value: "github.com/om-dadhe",
      action: "https://github.com/om-dadhe"
    },
    {
      type: "Location",
      value: "Available for Remote & Relocation",
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
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next backend project or explore collaboration opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.type} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div>
                    <div className="font-medium text-foreground">{contact.type}</div>
                    <div className="text-sm text-muted-foreground">{contact.value}</div>
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
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Current Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {availability.map((item) => (
                <div key={item.status} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{item.status}</span>
                  <Badge 
                    variant={item.available ? "default" : "secondary"}
                    className={item.available ? "bg-primary/20 text-primary border-primary/30" : ""}
                  >
                    {item.available ? "Available" : "Busy"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;