
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Server, Database, Wrench, Code, 
         FileCode, Terminal, Laptop } from 'lucide-react';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    icon: React.ReactNode;
    description: string;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Monitor className="h-5 w-5" />,
    skills: [
      { 
        name: "HTML/CSS", 
        icon: <Code className="h-10 w-10 text-orange-500" />, 
        description: "Semantic markup and modern CSS techniques"
      },
      { 
        name: "JavaScript", 
        icon: <FileCode className="h-10 w-10 text-yellow-500" />, 
        description: "ES6+, DOM manipulation, and async programming"
      },
      { 
        name: "React", 
        icon: <Code className="h-10 w-10 text-blue-500" />, 
        description: "Component architecture and state management"
      },
      { 
        name: "TypeScript", 
        icon: <FileCode className="h-10 w-10 text-blue-700" />, 
        description: "Type-safe code for robust applications"
      },
      { 
        name: "Tailwind CSS", 
        icon: <Code className="h-10 w-10 text-teal-500" />, 
        description: "Utility-first CSS framework"
      },
      { 
        name: "Next.js", 
        icon: <Laptop className="h-10 w-10 text-black dark:text-white" />, 
        description: "React framework for production"
      }
    ]
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { 
        name: "Node.js", 
        icon: <Server className="h-10 w-10 text-green-600" />, 
        description: "JavaScript runtime for server-side applications"
      },
      { 
        name: "Express", 
        icon: <Server className="h-10 w-10 text-gray-600" />, 
        description: "Web framework for Node.js"
      },
      { 
        name: "Python", 
        icon: <FileCode className="h-10 w-10 text-yellow-600" />, 
        description: "Versatile language for backend development"
      },
      { 
        name: "GraphQL", 
        icon: <Code className="h-10 w-10 text-pink-600" />, 
        description: "Query language for APIs"
      },
      { 
        name: "REST API", 
        icon: <Server className="h-10 w-10 text-blue-600" />, 
        description: "Design and implementation of RESTful services"
      },
      { 
        name: "Microservices", 
        icon: <Terminal className="h-10 w-10 text-gray-800 dark:text-gray-200" />, 
        description: "Distributed system architecture"
      }
    ]
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { 
        name: "MongoDB", 
        icon: <Database className="h-10 w-10 text-green-500" />, 
        description: "NoSQL database for modern applications"
      },
      { 
        name: "PostgreSQL", 
        icon: <Database className="h-10 w-10 text-blue-400" />, 
        description: "Advanced open source relational database"
      },
      { 
        name: "Redis", 
        icon: <Database className="h-10 w-10 text-red-500" />, 
        description: "In-memory data structure store"
      },
      { 
        name: "SQL", 
        icon: <Database className="h-10 w-10 text-blue-600" />, 
        description: "Structured Query Language for databases"
      },
      { 
        name: "Firebase", 
        icon: <Database className="h-10 w-10 text-yellow-500" />, 
        description: "Platform for web and mobile applications"
      },
      { 
        name: "ORM Tools", 
        icon: <Wrench className="h-10 w-10 text-purple-500" />, 
        description: "Object-Relational Mapping libraries"
      }
    ]
  },
  {
    name: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { 
        name: "Git", 
        icon: <Terminal className="h-10 w-10 text-orange-600" />, 
        description: "Version control system"
      },
      { 
        name: "Docker", 
        icon: <Laptop className="h-10 w-10 text-blue-500" />, 
        description: "Containerization platform"
      },
      { 
        name: "AWS", 
        icon: <Server className="h-10 w-10 text-yellow-600" />, 
        description: "Cloud computing services"
      },
      { 
        name: "CI/CD", 
        icon: <Terminal className="h-10 w-10 text-green-600" />, 
        description: "Continuous integration and deployment"
      },
      { 
        name: "Testing", 
        icon: <Wrench className="h-10 w-10 text-red-500" />, 
        description: "Unit, integration, and end-to-end testing"
      },
      { 
        name: "Agile/Scrum", 
        icon: <Wrench className="h-10 w-10 text-blue-700" />, 
        description: "Project management methodologies"
      }
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {category.skills.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className={`bg-muted/50 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div className="mb-4 bg-background rounded-full p-3 inline-flex items-center justify-center">
                            {skill.icon}
                          </div>
                          <h3 className="font-medium text-lg mb-2">{skill.name}</h3>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
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
