
import React, { useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Server, Database, Wrench } from 'lucide-react';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Monitor className="h-5 w-5" />,
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Next.js", level: 82 }
    ]
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "Python", level: 78 },
      { name: "GraphQL", level: 82 },
      { name: "REST API Design", level: 90 },
      { name: "Microservices", level: 75 }
    ]
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "MongoDB", level: 87 },
      { name: "PostgreSQL", level: 83 },
      { name: "Redis", level: 75 },
      { name: "SQL", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "ORM Tools", level: 78 }
    ]
  },
  {
    name: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 82 },
      { name: "AWS", level: 78 },
      { name: "CI/CD", level: 85 },
      { name: "Testing", level: 88 },
      { name: "Agile/Scrum", level: 92 }
    ]
  }
];

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Skills & Expertise
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>
        
        <div ref={skillsRef} className="max-w-4xl mx-auto">
          <Tabs defaultValue="Frontend" className="animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <TabsList className="grid md:grid-cols-4 grid-cols-2 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.name} value={category.name} className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillCategories.map((category) => (
              <TabsContent key={category.name} value={category.name} className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6">
                      {category.skills.map((skill, index) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={isVisible ? skill.level : 0} 
                            className="h-2 transition-all duration-1000 ease-out"
                            style={{ transitionDelay: `${index * 150}ms` }}
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
