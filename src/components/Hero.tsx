import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Ben Ruckman
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary font-semibold">
                Full Stack Software Engineer
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mt-2">
                Experienced engineer with expertise in full-stack development,
                AI-driven solutions, and scalable system design. Proven track
                record in leading technical projects, mentoring teams, and
                delivering tools that enhance operational efficiency.
              </p>
              <p className="text-muted-foreground text-lg max-w-2xl mt-2">
                Did I make this website with lovable.dev in 10 minutes? Yes. I
                guess I'm a vibe coder now.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#experience">
                <Button className="gap-2">
                  View My Work
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline">Contact Me</Button>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/benruckman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
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
              <div className="h-4 border-r border-border"></div>
              <span className="text-sm text-muted-foreground">West Jordan</span>
              <div className="h-4 border-r border-border"></div>
              <span className="text-sm text-muted-foreground">
                1(801) 882-0954
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 border-2 border-primary/20 rounded-full p-1 bg-secondary/50">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-background">
              <img
                src={"/public/lovable-uploads/profile-pic.png"}
                alt={`Profile Picture`}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
