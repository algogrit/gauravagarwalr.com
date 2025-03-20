
import React from 'react';
import { Monitor, Server, Database, Wrench, Code, 
         FileCode, Terminal, Laptop, GitBranch, Package } from 'lucide-react';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    icon: React.ReactNode;
    description: string;
  }[];
};

export const skillCategories: SkillCategory[] = [
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
        icon: <Package className="h-6 w-6 text-blue-500" />, 
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
