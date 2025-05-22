
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  years: number;
  category: string;
}

const Skills = () => {
  // Find the maximum years to normalize progress bars
  const skills: Skill[] = [
    // Programming Languages
    { name: "TypeScript", years: 2, category: "languages" },
    { name: "JavaScript", years: 3, category: "languages" },
    { name: "Java", years: 2, category: "languages" },
    { name: "Python", years: 1, category: "languages" },
    { name: "C#", years: 3, category: "languages" },
    { name: "C++", years: 1, category: "languages" },

    // Frameworks & Libraries
    { name: "React", years: 2, category: "frameworks" },
    { name: "Spring Boot", years: 1, category: "frameworks" },
    { name: "Django", years: 1, category: "frameworks" },
    { name: "Linear.app", years: 2, category: "frameworks" },
    { name: "HTML", years: 4, category: "frameworks" },
    { name: "CSS", years: 4, category: "frameworks" },
    { name: "NextJS", years: 1, category: "frameworks" },
    { name: "Bubble.io", years: 4, category: "frameworks" },

    // Cloud & DevOps
    { name: "AWS", years: 2, category: "cloud" },
    { name: "Azure", years: 1, category: "cloud" },
    { name: "Docker", years: 2, category: "cloud" },
    { name: "Kubernetes", years: 1, category: "cloud" },
    { name: "Jenkins", years: 1, category: "cloud" },
    { name: "CI/CD", years: 2, category: "cloud" },

    // Databases
    { name: "PostgreSQL", years: 2, category: "databases" },
    { name: "Relational Databases", years: 3, category: "databases" },

    // Tools & Others
    { name: "Git/GitHub", years: 3, category: "tools" },
    { name: "Jira", years: 2, category: "tools" },
    { name: "REST APIs", years: 2, category: "tools" },
    { name: "Agile", years: 2, category: "tools" },
    { name: "VSCode", years: 4, category: "tools" },
  ];

  // Find the maximum years to use as the 100% reference
  const maxYears = Math.max(...skills.map(skill => skill.years));

  const categories = [
    { id: "languages", name: "Programming Languages" },
    { id: "frameworks", name: "Frameworks & Libraries" },
    { id: "cloud", name: "Cloud & DevOps" },
    { id: "databases", name: "Databases" },
    { id: "tools", name: "Tools & Methods" },
  ];

  // Calculate progress percentage based on years relative to maximum
  const calculateProgress = (years: number): number => {
    return (years / maxYears) * 100;
  };

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
                          <div className="text-sm text-muted-foreground">
                            {skill.years} {skill.years === 1 ? "Year" : "Years"}
                          </div>
                        </div>
                        <Progress 
                          value={calculateProgress(skill.years)} 
                          className="h-2" 
                        />
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
