
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  years: number;
  category: string;
  level?: number;
}

const Skills = () => {
  const maxYears = 6; // Used for normalizing skill progress bars
  
  const skills: Skill[] = [
    // Programming Languages
    { name: "TypeScript", years: 2, category: "languages", level: 85 },
    { name: "JavaScript", years: 3, category: "languages", level: 90 },
    { name: "Java", years: 2, category: "languages", level: 75 },
    { name: "Python", years: 1, category: "languages", level: 65 },
    { name: "C#", years: 3, category: "languages", level: 70 },
    { name: "C++", years: 1, category: "languages", level: 60 },
    
    // Frameworks & Libraries
    { name: "React", years: 2, category: "frameworks", level: 85 },
    { name: "Spring Boot", years: 1, category: "frameworks", level: 70 },
    { name: "Django", years: 1, category: "frameworks", level: 65 },
    { name: "Linear.app", years: 2, category: "frameworks", level: 80 },
    { name: "HTML", years: 4, category: "frameworks", level: 95 },
    { name: "CSS", years: 4, category: "frameworks", level: 90 },
    { name: "NextJS", years: 1, category: "frameworks", level: 75 },
    
    // Cloud & DevOps
    { name: "AWS", years: 2, category: "cloud", level: 80 },
    { name: "Docker", years: 2, category: "cloud", level: 85 },
    { name: "Kubernetes", years: 1, category: "cloud", level: 70 },
    { name: "Jenkins", years: 1, category: "cloud", level: 65 },
    { name: "CI/CD", years: 2, category: "cloud", level: 80 },
    
    // Databases
    { name: "PostgreSQL", years: 2, category: "databases", level: 75 },
    { name: "Relational Databases", years: 3, category: "databases", level: 85 },
    
    // Tools & Others
    { name: "Git/GitHub", years: 3, category: "tools", level: 90 },
    { name: "Jira", years: 2, category: "tools", level: 85 },
    { name: "REST APIs", years: 2, category: "tools", level: 90 },
    { name: "Agile", years: 2, category: "tools", level: 85 },
    { name: "VSCode", years: 4, category: "tools", level: 95 },
  ];

  const categories = [
    { id: "languages", name: "Programming Languages" },
    { id: "frameworks", name: "Frameworks & Libraries" },
    { id: "cloud", name: "Cloud & DevOps" },
    { id: "databases", name: "Databases" },
    { id: "tools", name: "Tools & Methods" },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <h3 className="text-xl font-semibold">{category.name}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <Card key={skill.name} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium">{skill.name}</div>
                          <div className="text-sm text-muted-foreground">{skill.years} {skill.years === 1 ? "Year" : "Years"}</div>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">All Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill.name} className="skill-badge">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
