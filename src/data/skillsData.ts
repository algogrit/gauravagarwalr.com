
import React from 'react';
import { 
  Monitor, 
  Server, 
  Database, 
  Wrench, 
  Code, 
  FileCode, 
  Terminal, 
  Laptop, 
  GitBranch, 
  Package 
} from 'lucide-react';

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
    icon: React.createElement(Monitor, { className: "h-5 w-5" }),
    skills: [
      { 
        name: "HTML/CSS", 
        icon: React.createElement(Code, { className: "h-6 w-6 text-orange-500" }), 
        description: "Semantic markup and modern CSS techniques"
      },
      { 
        name: "JavaScript", 
        icon: React.createElement(FileCode, { className: "h-6 w-6 text-yellow-500" }), 
        description: "ES6+, DOM manipulation, and async programming"
      },
      { 
        name: "React", 
        icon: React.createElement(Code, { className: "h-6 w-6 text-blue-500" }), 
        description: "Component architecture and state management"
      },
      { 
        name: "TypeScript", 
        icon: React.createElement(FileCode, { className: "h-6 w-6 text-blue-700" }), 
        description: "Type-safe code for robust applications"
      },
      { 
        name: "Tailwind CSS", 
        icon: React.createElement(Code, { className: "h-6 w-6 text-teal-500" }), 
        description: "Utility-first CSS framework"
      },
      { 
        name: "Next.js", 
        icon: React.createElement(Laptop, { className: "h-6 w-6 text-black dark:text-white" }), 
        description: "React framework for production"
      },
      { 
        name: "Vue.js", 
        icon: React.createElement(Code, { className: "h-6 w-6 text-green-500" }), 
        description: "Progressive JavaScript framework"
      },
      { 
        name: "Angular", 
        icon: React.createElement(Code, { className: "h-6 w-6 text-red-500" }), 
        description: "Platform for building mobile & desktop web apps"
      },
      { 
        name: "SASS/SCSS", 
        icon: React.createElement(FileCode, { className: "h-6 w-6 text-pink-500" }), 
        description: "CSS preprocessor for advanced styling"
      },
      { 
        name: "Redux", 
        icon: React.createElement(Code, { className: "h-6 w-6 text-purple-500" }), 
        description: "State management for JavaScript apps"
      },
      { 
        name: "Webpack", 
        icon: React.createElement(Terminal, { className: "h-6 w-6 text-blue-400" }), 
        description: "Static module bundler for JavaScript"
      },
      { 
        name: "Vite", 
        icon: React.createElement(Terminal, { className: "h-6 w-6 text-yellow-400" }), 
        description: "Next generation frontend tooling"
      }
    ]
  },
  {
    name: "Backend",
    icon: React.createElement(Server, { className: "h-5 w-5" }),
    skills: [
      { 
        name: "Node.js", 
        icon: React.createElement(Server, { className: "h-6 w-6 text-green-600" }), 
        description: "JavaScript runtime for server-side applications"
      },
      { 
        name: "Express", 
        icon: React.createElement(Server, { className: "h-6 w-6 text-gray-600" }), 
        description: "Web framework for Node.js"
      },
      { 
        name: "Python", 
        icon: React.createElement(FileCode, { className: "h-6 w-6 text-yellow-600" }), 
        description: "Versatile language for backend development"
      },
      { 
        name: "GraphQL", 
        icon: React.createElement(Code, { className: "h-6 w-6 text-pink-600" }), 
        description: "Query language for APIs"
      },
      { 
        name: "REST API", 
        icon: React.createElement(Server, { className: "h-6 w-6 text-blue-600" }), 
        description: "Design and implementation of RESTful services"
      },
      { 
        name: "Microservices", 
        icon: React.createElement(Terminal, { className: "h-6 w-6 text-gray-800 dark:text-gray-200" }), 
        description: "Distributed system architecture"
      },
      { 
        name: "Java", 
        icon: React.createElement(FileCode, { className: "h-6 w-6 text-red-600" }), 
        description: "Enterprise-grade applications and systems"
      },
      { 
        name: "Spring Boot", 
        icon: React.createElement(Server, { className: "h-6 w-6 text-green-500" }), 
        description: "Java-based framework for microservices"
      },
      { 
        name: "C#/.NET", 
        icon: React.createElement(FileCode, { className: "h-6 w-6 text-purple-600" }), 
        description: "Enterprise application development"
      },
      { 
        name: "PHP", 
        icon: React.createElement(FileCode, { className: "h-6 w-6 text-indigo-600" }), 
        description: "Server-side scripting language"
      },
      { 
        name: "Ruby on Rails", 
        icon: React.createElement(Server, { className: "h-6 w-6 text-red-500" }), 
        description: "Web application framework"
      },
      { 
        name: "Django", 
        icon: React.createElement(Server, { className: "h-6 w-6 text-green-700" }), 
        description: "High-level Python web framework"
      }
    ]
  },
  {
    name: "Database",
    icon: React.createElement(Database, { className: "h-5 w-5" }),
    skills: [
      { 
        name: "MongoDB", 
        icon: React.createElement(Database, { className: "h-6 w-6 text-green-500" }), 
        description: "NoSQL database for modern applications"
      },
      { 
        name: "PostgreSQL", 
        icon: React.createElement(Database, { className: "h-6 w-6 text-blue-400" }), 
        description: "Advanced open source relational database"
      },
      { 
        name: "Redis", 
        icon: React.createElement(Database, { className: "h-6 w-6 text-red-500" }), 
        description: "In-memory data structure store"
      },
      { 
        name: "SQL", 
        icon: React.createElement(Database, { className: "h-6 w-6 text-blue-600" }), 
        description: "Structured Query Language for databases"
      },
      { 
        name: "Firebase", 
        icon: React.createElement(Database, { className: "h-6 w-6 text-yellow-500" }), 
        description: "Platform for web and mobile applications"
      },
      { 
        name: "ORM Tools", 
        icon: React.createElement(Wrench, { className: "h-6 w-6 text-purple-500" }), 
        description: "Object-Relational Mapping libraries"
      },
      { 
        name: "MySQL", 
        icon: React.createElement(Database, { className: "h-6 w-6 text-blue-500" }), 
        description: "Open-source relational database management system"
      },
      { 
        name: "SQLite", 
        icon: React.createElement(Database, { className: "h-6 w-6 text-blue-300" }), 
        description: "Self-contained, serverless SQL database engine"
      },
      { 
        name: "DynamoDB", 
        icon: React.createElement(Database, { className: "h-6 w-6 text-yellow-600" }), 
        description: "Fast and flexible NoSQL database service"
      },
      { 
        name: "Cassandra", 
        icon: React.createElement(Database, { className: "h-6 w-6 text-blue-800" }), 
        description: "Distributed NoSQL database management system"
      },
      { 
        name: "Neo4j", 
        icon: React.createElement(Database, { className: "h-6 w-6 text-teal-600" }), 
        description: "Graph database management system"
      },
      { 
        name: "Elasticsearch", 
        icon: React.createElement(Database, { className: "h-6 w-6 text-yellow-400" }), 
        description: "Distributed, RESTful search and analytics engine"
      }
    ]
  },
  {
    name: "Tools",
    icon: React.createElement(Wrench, { className: "h-5 w-5" }),
    skills: [
      { 
        name: "Git", 
        icon: React.createElement(GitBranch, { className: "h-6 w-6 text-orange-600" }), 
        description: "Version control system"
      },
      { 
        name: "Docker", 
        icon: React.createElement(Package, { className: "h-6 w-6 text-blue-500" }), 
        description: "Containerization platform"
      },
      { 
        name: "AWS", 
        icon: React.createElement(Server, { className: "h-6 w-6 text-yellow-600" }), 
        description: "Cloud computing services"
      },
      { 
        name: "CI/CD", 
        icon: React.createElement(Terminal, { className: "h-6 w-6 text-green-600" }), 
        description: "Continuous integration and deployment"
      },
      { 
        name: "Testing", 
        icon: React.createElement(Wrench, { className: "h-6 w-6 text-red-500" }), 
        description: "Unit, integration, and end-to-end testing"
      },
      { 
        name: "Agile/Scrum", 
        icon: React.createElement(Wrench, { className: "h-6 w-6 text-blue-700" }), 
        description: "Project management methodologies"
      },
      { 
        name: "Kubernetes", 
        icon: React.createElement(Server, { className: "h-6 w-6 text-blue-600" }), 
        description: "Container orchestration platform"
      },
      { 
        name: "Jenkins", 
        icon: React.createElement(Terminal, { className: "h-6 w-6 text-black dark:text-white" }), 
        description: "Open source automation server"
      },
      { 
        name: "Terraform", 
        icon: React.createElement(Wrench, { className: "h-6 w-6 text-purple-600" }), 
        description: "Infrastructure as code software tool"
      },
      { 
        name: "Prometheus", 
        icon: React.createElement(Terminal, { className: "h-6 w-6 text-orange-500" }), 
        description: "Monitoring and alerting toolkit"
      },
      { 
        name: "Jira", 
        icon: React.createElement(Wrench, { className: "h-6 w-6 text-blue-500" }), 
        description: "Issue tracking and project management"
      },
      { 
        name: "GitHub Actions", 
        icon: React.createElement(GitBranch, { className: "h-6 w-6 text-gray-700 dark:text-gray-300" }), 
        description: "Automate workflows directly from GitHub"
      },
      { 
        name: "Grafana", 
        icon: React.createElement(Terminal, { className: "h-6 w-6 text-orange-400" }), 
        description: "Analytics and monitoring solution"
      },
      { 
        name: "Ansible", 
        icon: React.createElement(Terminal, { className: "h-6 w-6 text-red-600" }), 
        description: "IT automation and configuration management"
      }
    ]
  }
];
