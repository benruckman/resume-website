
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GitBranch } from 'lucide-react';

interface Project {
  title: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Charting from PDFs using Natural Language",
      period: "1/2023 – 12/2023",
      description: [
        "Used Python/Django to reduce OCR and OpenAI API calls to build dynamic data visualizations in seconds.",
        "This project can let a fund analyst cut the time it takes to build visualizations by 99%."
      ],
      technologies: ["Python", "Django", "OCR", "OpenAI API", "Data Visualization", "PDF Processing"]
    },
    // Additional projects can be added here
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col border border-border/60 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{project.period}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-2 list-disc list-outside pl-5">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="border-t bg-secondary/30 pt-3">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                  ))}
                </div>
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
