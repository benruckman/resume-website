
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GitBranch, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  period: string;
  description: string[];
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  featured?: boolean;
  images?: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Chess Data Visualization",
      period: "1/2022 – 5/2022",
      description: [
        "Created interactive visualizations of chess game data from lichess.org using D3.js.",
        "Built the entire backend data pipeline for processing and formatting millions of chess game records.",
        "Implemented multiple visualization types: interactive chess board, pie charts, histograms, and bar charts.",
        "Optimized data processing to handle 3.4 million chess games efficiently."
      ],
      technologies: ["D3.js", "JavaScript", "Data Processing", "Data Visualization", "HTML/CSS"],
      liveLink: "https://benruckman.github.io/Data-Visualization-Final-Project/",
      repoLink: "https://github.com/benruckman/Data-Visualization-Final-Project",
      featured: true,
      images: [
        "public/lovable-uploads/fc41ee6f-03e5-43ec-806c-664c46d162aa.png",
        "public/lovable-uploads/3c0c87dd-1c8c-4191-bf7e-2163ae56ef67.png",
        "public/lovable-uploads/82b48878-128e-41de-bb19-eccf50042108.png"
      ]
    },
    {
      title: "Charting from PDFs using Natural Language",
      period: "1/2023 – 12/2023",
      description: [
        "Used Python/Django to reduce OCR and OpenAI API calls to build dynamic data visualizations in seconds.",
        "This project can let a fund analyst cut the time it takes to build visualizations by 99%."
      ],
      technologies: ["Python", "Django", "OCR", "OpenAI API", "Data Visualization", "PDF Processing"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className={`h-full flex flex-col border border-border/60 hover:shadow-md transition-shadow ${project.featured ? 'lg:col-span-2' : ''}`}>
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{project.period}</span>
                  </div>
                </div>
              </CardHeader>
              
              {project.images && project.images.length > 0 && (
                <div className="px-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    {project.images.map((image, i) => (
                      <div key={i} className="aspect-video overflow-hidden rounded-md border border-border">
                        <img 
                          src={image} 
                          alt={`${project.title} screenshot ${i+1}`} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <CardContent className="flex-grow">
                <ul className="space-y-2 list-disc list-outside pl-5">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="border-t bg-secondary/30 pt-3 flex flex-wrap gap-3">
                <div className="flex flex-wrap gap-2 flex-grow">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                  ))}
                </div>
                
                {(project.repoLink || project.liveLink) && (
                  <div className="flex gap-2">
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                        </Button>
                      </a>
                    )}
                    
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="default" size="sm" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </Button>
                      </a>
                    )}
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}

          {/* Project placeholder */}
          <Card className="h-full border border-dashed border-border/60 flex items-center justify-center p-6 bg-secondary/20">
            <div className="text-center text-muted-foreground">
              <GitBranch className="h-10 w-10 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">More Projects</h3>
              <p className="text-sm">View additional projects on GitHub</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
