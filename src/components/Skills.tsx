
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Server, Database, Wrench, Code, 
         FileCode, Terminal, Laptop, GitBranch, Docker } from 'lucide-react';

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
        icon: <Code className="h-6 w-6 text-orange-500" />, 
        description: "Semantic markup and modern CSS techniques"
      },
      { 
        name: "JavaScript", 
        icon: <FileCode className="h-6 w-6 text-yellow-500" />, 
        description: "ES6+, DOM manipulation, and async programming"
      },
      { 
        name: "React", 
        icon: <Code className="h-6 w-6 text-blue-500" />, 
        description: "Component architecture and state management"
      },
      { 
        name: "TypeScript", 
        icon: <FileCode className="h-6 w-6 text-blue-700" />, 
        description: "Type-safe code for robust applications"
      },
      { 
        name: "Tailwind CSS", 
        icon: <Code className="h-6 w-6 text-teal-500" />, 
        description: "Utility-first CSS framework"
      },
      { 
        name: "Next.js", 
        icon: <Laptop className="h-6 w-6 text-black dark:text-white" />, 
        description: "React framework for production"
      },
      { 
        name: "Vue.js", 
        icon: <Code className="h-6 w-6 text-green-500" />, 
        description: "Progressive JavaScript framework"
      },
      { 
        name: "Angular", 
        icon: <Code className="h-6 w-6 text-red-500" />, 
        description: "Platform for building mobile & desktop web apps"
      },
      { 
        name: "SASS/SCSS", 
        icon: <FileCode className="h-6 w-6 text-pink-500" />, 
        description: "CSS preprocessor for advanced styling"
      },
      { 
        name: "Redux", 
        icon: <Code className="h-6 w-6 text-purple-500" />, 
        description: "State management for JavaScript apps"
      },
      { 
        name: "Webpack", 
        icon: <Terminal className="h-6 w-6 text-blue-400" />, 
        description: "Static module bundler for JavaScript"
      },
      { 
        name: "Vite", 
        icon: <Terminal className="h-6 w-6 text-yellow-400" />, 
        description: "Next generation frontend tooling"
      }
    ]
  },
  {
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { 
        name: "Node.js", 
        icon: <Server className="h-6 w-6 text-green-600" />, 
        description: "JavaScript runtime for server-side applications"
      },
      { 
        name: "Express", 
        icon: <Server className="h-6 w-6 text-gray-600" />, 
        description: "Web framework for Node.js"
      },
      { 
        name: "Python", 
        icon: <FileCode className="h-6 w-6 text-yellow-600" />, 
        description: "Versatile language for backend development"
      },
      { 
        name: "GraphQL", 
        icon: <Code className="h-6 w-6 text-pink-600" />, 
        description: "Query language for APIs"
      },
      { 
        name: "REST API", 
        icon: <Server className="h-6 w-6 text-blue-600" />, 
        description: "Design and implementation of RESTful services"
      },
      { 
        name: "Microservices", 
        icon: <Terminal className="h-6 w-6 text-gray-800 dark:text-gray-200" />, 
        description: "Distributed system architecture"
      },
      { 
        name: "Java", 
        icon: <FileCode className="h-6 w-6 text-red-600" />, 
        description: "Enterprise-grade applications and systems"
      },
      { 
        name: "Spring Boot", 
        icon: <Server className="h-6 w-6 text-green-500" />, 
        description: "Java-based framework for microservices"
      },
      { 
        name: "C#/.NET", 
        icon: <FileCode className="h-6 w-6 text-purple-600" />, 
        description: "Enterprise application development"
      },
      { 
        name: "PHP", 
        icon: <FileCode className="h-6 w-6 text-indigo-600" />, 
        description: "Server-side scripting language"
      },
      { 
        name: "Ruby on Rails", 
        icon: <Server className="h-6 w-6 text-red-500" />, 
        description: "Web application framework"
      },
      { 
        name: "Django", 
        icon: <Server className="h-6 w-6 text-green-700" />, 
        description: "High-level Python web framework"
      }
    ]
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { 
        name: "MongoDB", 
        icon: <Database className="h-6 w-6 text-green-500" />, 
        description: "NoSQL database for modern applications"
      },
      { 
        name: "PostgreSQL", 
        icon: <Database className="h-6 w-6 text-blue-400" />, 
        description: "Advanced open source relational database"
      },
      { 
        name: "Redis", 
        icon: <Database className="h-6 w-6 text-red-500" />, 
        description: "In-memory data structure store"
      },
      { 
        name: "SQL", 
        icon: <Database className="h-6 w-6 text-blue-600" />, 
        description: "Structured Query Language for databases"
      },
      { 
        name: "Firebase", 
        icon: <Database className="h-6 w-6 text-yellow-500" />, 
        description: "Platform for web and mobile applications"
      },
      { 
        name: "ORM Tools", 
        icon: <Wrench className="h-6 w-6 text-purple-500" />, 
        description: "Object-Relational Mapping libraries"
      },
      { 
        name: "MySQL", 
        icon: <Database className="h-6 w-6 text-blue-500" />, 
        description: "Open-source relational database management system"
      },
      { 
        name: "SQLite", 
        icon: <Database className="h-6 w-6 text-blue-300" />, 
        description: "Self-contained, serverless SQL database engine"
      },
      { 
        name: "DynamoDB", 
        icon: <Database className="h-6 w-6 text-yellow-600" />, 
        description: "Fast and flexible NoSQL database service"
      },
      { 
        name: "Cassandra", 
        icon: <Database className="h-6 w-6 text-blue-800" />, 
        description: "Distributed NoSQL database management system"
      },
      { 
        name: "Neo4j", 
        icon: <Database className="h-6 w-6 text-teal-600" />, 
        description: "Graph database management system"
      },
      { 
        name: "Elasticsearch", 
        icon: <Database className="h-6 w-6 text-yellow-400" />, 
        description: "Distributed, RESTful search and analytics engine"
      }
    ]
  },
  {
    name: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { 
        name: "Git", 
        icon: <GitBranch className="h-6 w-6 text-orange-600" />, 
        description: "Version control system"
      },
      { 
        name: "Docker", 
        icon: <Docker className="h-6 w-6 text-blue-500" />, 
        description: "Containerization platform"
      },
      { 
        name: "AWS", 
        icon: <Server className="h-6 w-6 text-yellow-600" />, 
        description: "Cloud computing services"
      },
      { 
        name: "CI/CD", 
        icon: <Terminal className="h-6 w-6 text-green-600" />, 
        description: "Continuous integration and deployment"
      },
      { 
        name: "Testing", 
        icon: <Wrench className="h-6 w-6 text-red-500" />, 
        description: "Unit, integration, and end-to-end testing"
      },
      { 
        name: "Agile/Scrum", 
        icon: <Wrench className="h-6 w-6 text-blue-700" />, 
        description: "Project management methodologies"
      },
      { 
        name: "Kubernetes", 
        icon: <Server className="h-6 w-6 text-blue-600" />, 
        description: "Container orchestration platform"
      },
      { 
        name: "Jenkins", 
        icon: <Terminal className="h-6 w-6 text-black dark:text-white" />, 
        description: "Open source automation server"
      },
      { 
        name: "Terraform", 
        icon: <Wrench className="h-6 w-6 text-purple-600" />, 
        description: "Infrastructure as code software tool"
      },
      { 
        name: "Prometheus", 
        icon: <Terminal className="h-6 w-6 text-orange-500" />, 
        description: "Monitoring and alerting toolkit"
      },
      { 
        name: "Jira", 
        icon: <Wrench className="h-6 w-6 text-blue-500" />, 
        description: "Issue tracking and project management"
      },
      { 
        name: "GitHub Actions", 
        icon: <GitBranch className="h-6 w-6 text-gray-700 dark:text-gray-300" />, 
        description: "Automate workflows directly from GitHub"
      },
      { 
        name: "Grafana", 
        icon: <Terminal className="h-6 w-6 text-orange-400" />, 
        description: "Analytics and monitoring solution"
      },
      { 
        name: "Ansible", 
        icon: <Terminal className="h-6 w-6 text-red-600" />, 
        description: "IT automation and configuration management"
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
    <section id="skills" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Skills & Expertise
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>
        
        <div ref={skillsRef} className="max-w-5xl mx-auto">
          <Tabs defaultValue="Frontend" className="animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <TabsList className="grid md:grid-cols-4 grid-cols-2 mb-6">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.name} value={category.name} className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillCategories.map((category) => (
              <TabsContent key={category.name} value={category.name} className="mt-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                      {category.skills.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className={`bg-muted/50 rounded-lg p-3 flex flex-col items-center text-center transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <div className="mb-2 bg-background rounded-full p-2 inline-flex items-center justify-center">
                            {skill.icon}
                          </div>
                          <h3 className="font-medium text-sm mb-1">{skill.name}</h3>
                          <p className="text-xs text-muted-foreground">{skill.description}</p>
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
