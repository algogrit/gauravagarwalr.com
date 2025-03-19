
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { BadgeCheck } from 'lucide-react';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
};

const experienceData: ExperienceItem[] = [
  {
    company: "TechGrowth Inc.",
    position: "Senior Full Stack Developer",
    period: "Jan 2021 - Present",
    description: "Leading development of scalable web applications and microservices while collaborating with cross-functional teams to deliver high-quality solutions.",
    achievements: [
      "Architected and implemented a real-time analytics dashboard that increased client retention by 35%",
      "Optimized database queries leading to a 40% improvement in application performance",
      "Mentored junior developers and established coding standards for the team"
    ],
    technologies: ["React", "Node.js", "GraphQL", "AWS", "MongoDB"],
    current: true
  },
  {
    company: "Digital Solutions Co.",
    position: "Front End Developer",
    period: "Mar 2018 - Dec 2020",
    description: "Developed responsive web interfaces for client projects using modern JavaScript frameworks and collaborated with designers to implement pixel-perfect UIs.",
    achievements: [
      "Improved site loading speed by 60% through code optimization and lazy loading techniques",
      "Implemented CI/CD pipeline that reduced deployment time by 75%",
      "Built reusable component library used across multiple projects"
    ],
    technologies: ["JavaScript", "React", "SCSS", "Webpack", "Jest"]
  },
  {
    company: "Startup Innovations",
    position: "Junior Web Developer",
    period: "Jun 2016 - Feb 2018",
    description: "Assisted in the development of web applications, fixed bugs, and implemented new features while learning best practices in software development.",
    achievements: [
      "Developed an internal tool that automated content migration, saving 20+ hours per week",
      "Contributed to open-source libraries used by the company",
      "Implemented responsive designs across all company products"
    ],
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Git"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Work Experience
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experienceData.map((job, index) => (
            <div 
              key={job.company} 
              className={cn(
                "relative pl-8 pb-12",
                index !== experienceData.length - 1 && "border-l border-border",
                "animate-fade-up opacity-0"
              )}
              style={{ animationDelay: `${(index + 1) * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                {job.current && <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />}
              </div>
              
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-2">
                {job.period}
              </span>
              
              <h3 className="text-xl font-bold">{job.position}</h3>
              <p className="text-muted-foreground font-medium mb-4">{job.company}</p>
              
              <p className="text-balance mb-4">{job.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-2">Key Achievements</h4>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex">
                      <BadgeCheck className="h-5 w-5 text-primary/70 mr-2 shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
