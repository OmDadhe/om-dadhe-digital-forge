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
    <section id="contact" className="py-20 px-4 animate-scroll-fade">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-responsive-3xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to discuss your next backend projects or explore collaboration opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <Card className="bg-card border-border mb-8 card-hover">
            <CardHeader>
              <CardTitle className="text-xl text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.type} className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors glow-effect">
                  {contact.action ? (
                    <a href={contact.action} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="font-medium text-white">{contact.type}</div>
                      <div className="text-sm text-white/70">{contact.value}</div>
                    </a>
                  ) : (
                    <div>
                      <div className="font-medium text-white">{contact.type}</div>
                      <div className="text-sm text-white/70">{contact.value}</div>
                    </div>
                  )}
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