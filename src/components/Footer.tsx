
import React from 'react';
import { ChevronUp, GitHub, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-mono font-bold text-xl">
              <span className="text-primary">&lt;</span>
              <span>Ben.dev</span>
              <span className="text-primary">/&gt;</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Full Stack Software Engineer
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/benruckman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/ben-ruckman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:benjamin.ruckman@outlook.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
            
            <div className="h-4 border-r border-border mx-1"></div>
            
            <a href="#" className="inline-block">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ChevronUp className="h-5 w-5" />
                <span className="sr-only">Scroll to top</span>
              </Button>
            </a>
          </div>
        </div>
        
        <div className="text-center md:text-left text-xs text-muted-foreground mt-6">
          &copy; {new Date().getFullYear()} Ben Ruckman. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
