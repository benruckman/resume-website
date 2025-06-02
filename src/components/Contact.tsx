
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Calendly from './Calendly';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-heading">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-card border border-border/60">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Feel free to reach out if you'd like to discuss job opportunities, 
                  collaboration, or just chat about software development.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <Button asChild variant="outline" className="w-full justify-start gap-2">
                    <a href="mailto:benjamin.ruckman@outlook.com">
                      <Mail className="h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start gap-2">
                    <a href="tel:+18018820954">
                      <Phone className="h-4 w-4" />
                      Call Me
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start gap-2">
                    <a href="https://linkedin.com/in/ben-ruckman" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start gap-2">
                    <a href="https://github.com/benruckman" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border/60 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Based in West Jordan, Utah. Available for:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Remote positions</li>
                  <li>Hybrid roles in the Salt Lake City area</li>
                  <li>Consulting opportunities</li>
                  <li>Contract work</li>
                </ul>
                <div className="pt-4 text-sm text-muted-foreground">
                  Willing to relocate for the right opportunity
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-card border border-border/60">
              <CardHeader>
                <CardTitle>Schedule a Meeting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Book a time that works for you to discuss opportunities or projects.
                </p>
                <Calendly />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
