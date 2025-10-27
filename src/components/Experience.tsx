
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';

interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const jobs: Job[] = [
    {
      company: "Palladyne AI",
      role: "Software Engineer",
      location: "Salt Lake City, UT (Hybrid)",
      period: "July 2025 – Present",
      duration: "Current",
      description: [
        "Engineered full-stack web applications for robotics systems using TypeScript, React, Python, and Flask, optimizing user experience and operational efficiency for system integrators through Agile development and cross-functional collaboration.",
        "Built 80% of the v2 of the entire product based on user and UX/UI designer feedback, which consolidated user workflows, and made the UI pleasant for the end user.",
        "Utilized Jira for Agile project management, prioritizing tasks and collaborating with stakeholders to align technical deliverables with organizational objectives."
      ],
      technologies: ["TypeScript", "Python", "C++", "React", "Flask", "AWS", "Docker", "PostgreSQL", "Jira", "CI/CD", "Gitlab"]
    },
    {
      company: "US Air Force",
      role: "Software Engineer",
      location: "Layton, UT (Hybrid)",
      period: "February 2024 – July 2025",
      duration: "1.5 years",
      description: [
        "Engineered full-stack web applications for aviation systems using Java, TypeScript, React, and Spring Boot, optimizing user experience and operational efficiency for pilots through Agile development and cross-functional collaboration.",
        "Developed a centralized knowledge repository to standardize backend development best practices, reducing onboarding time by 30% and enhancing DevOps workflows (CI/CD pipelines, Jenkins, Rancher).",
        "Mentored and trained 5+ team members on backend development and test-driven development (TDD), boosting team backend capacity by 150% and enabling independent delivery of scalable, high-performance systems.",
        "Implemented automated testing frameworks (unit, integration, E2E, black box) to ensure 98% code reliability and compliance with DoD standards for mission-critical applications.",
        "Deployed cloud-native solutions on AWS using Docker and Kubernetes, improving deployment efficiency by 40% and ensuring seamless integration with existing infrastructure.",
        "Utilized Jira for Agile project management, prioritizing tasks and collaborating with stakeholders to align technical deliverables with organizational objectives."
      ],
      technologies: ["Java", "TypeScript", "React", "Spring Boot", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MySQL", "Jira", "Jenkins", "Rancher", "CI/CD"]
    },
    {
      company: "VelvetFS",
      role: "Founding Software Engineer",
      location: "Salt Lake City, UT (Hybrid)",
      period: "September 2021 – February 2024",
      duration: "2.5 years",
      description: [
        "Engineered full-stack web solutions, enhancing user experience by implementing and optimizing settings pages and interactive charting features using React (TypeScript) and Django REST Framework.",
        "Collaborated cross-functionally with software engineers to debug, troubleshoot, and improve feature implementations, adhering to Agile methodologies and SDLC best practices.",
        "Designed and deployed a scalable backend RESTful API leveraging Python, OCR (Azure), and generative AI with RAG to process thousands of PDFs daily, automating tabular data indexing, natural language querying, and dynamic chart generation.",
        "Integrated AWS S3 and AWS Textract for cloud-based storage and data extraction, reducing processing latency by 30%+ and improving system reliability.",
        "Championed test-driven development (TDD) by writing comprehensive unit tests and conducting code reviews, ensuring 95%+ code coverage and adherence to CI/CD pipelines via Docker containerization.",
        "Streamlined collaboration using Jira/Linear for sprint planning and Discord for real-time communication, accelerating feature delivery by 20% across distributed teams.",
        "Maintained PostgreSQL databases for optimized data retrieval and storage, improving query performance by 25% through indexing and query optimization."
      ],
      technologies: ["Python", "TypeScript", "Django REST Framework", "React", "AWS S3", "AWS Textract", "Azure OCR", "PostgreSQL", "Docker", "Jira", "Linear", "TDD", "CI/CD"]
    },
    {
      company: "Mallow/Whelm",
      role: "Co-Founder (Part-Time)",
      location: "Remote",
      period: "June 2023 – Present",
      duration: "2+ years",
      description: [
        "Co-founded B2B SaaS startup Mallow, leading end-to-end technical development including full-stack architecture design, scalable infrastructure, and SDLC management while partnering with a non-technical co-founder to align product vision with market needs.",
        "Orchestrated strategic pivot from Whelm to Mallow, leveraging data-driven insights to reposition the product, resulting in 200%+ user engagement growth and improved market fit.",
        "Owned end-to-end system reliability, implementing robust DevOps practices, automated monitoring, and CI/CD pipelines to ensure 99.9% uptime and optimal performance.",
        "Drove user acquisition and retention strategies through agile iteration, A/B testing, and feature optimization, enhancing key metrics like activation rates and session duration.",
        "Collaborated cross-functionally to define product roadmaps, prioritize features, and integrate user feedback into iterative development cycles.",
        "Managed cloud infrastructure (AWS/GCP) and cost optimization while ensuring compliance with security best practices.",
        "Conducted competitive analysis and market validation to refine value proposition, positioning Mallow as a differentiated solution in the productivity SaaS space."
      ],
      technologies: ["Full-stack", "B2B SaaS", "DevOps", "Agile", "AWS", "GCP", "CI/CD", "A/B Testing"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container-custom">
        <h2 className="section-heading">Professional Experience</h2>

        <div className="space-y-10">
          {jobs.map((job, index) => (
            <Card key={index} className="relative overflow-hidden border border-border/60">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <CardHeader className="space-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold">{job.company}</h3>
                      {job.company === "Mallow/Whelm" && (
                        <a 
                          href="https://getmallow.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Button 
                            size="sm"
                            className="bg-mallow-green hover:bg-mallow-green/90 text-white"
                          >
                            Ditch the 3% invoicing fees
                          </Button>
                        </a>
                      )}
                    </div>
                    <div className="text-lg font-semibold text-primary">{job.role}</div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{job.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="mr-1 h-4 w-4" />
                    <span>{job.duration}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3 list-disc list-outside pl-5">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-sm md:text-base">{item}</li>
                  ))}
                </ul>
                
                <div className="pt-2">
                  <div className="text-sm font-medium mb-2">Technologies & Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;