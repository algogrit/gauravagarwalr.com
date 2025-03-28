import React from 'react';
import {
  Server,
  Database,
  Wrench,
  FileCode,
} from 'lucide-react';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    type: React.ElementType;
    label: string;
    filetype?: string;
    description: string;
  }[];
};

// https://icongr.am/devicon
const Icongram = ({label, tooltip}) => {
  const src = `https://icongr.am/devicon/${label}.svg`;

  return React.createElement('img', {src: src, className: "h-6", title: tooltip, alt: tooltip});
}

const RawIcon = ({label, tooltip, filetype = 'svg'}) => {
  const src = `/assets/images/skills/${label}.${filetype}`;

  return React.createElement('img', {src: src, className: "h-6", title: tooltip, alt: tooltip});
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: React.createElement(FileCode, { className: "h-5 w-5" }),
    skills: [
      {
        name: 'Go',
        label: 'go-original',
        type: Icongram,
        description: 'Fast, concurrent systems programming'
      },
      {
        name: 'Rust',
        label: 'rust',
        type: RawIcon,
        description: 'Memory-safe, high-performance language'
      },
      {
        name: 'Elixir',
        label: 'elixir',
        type: RawIcon,
        description: 'Scalable, fault-tolerant functional programming'
      },
      {
        name: 'Ruby',
        label: 'ruby',
        type: RawIcon,
        filetype: 'png',
        description: 'Elegant, dynamic scripting language'
      },
      {
        name: 'Erlang',
        label: 'erlang-original',
        type: Icongram,
        description: 'Distributed, fault-tolerant systems'
      },
      {
        name: 'JavaScript',
        label: 'javascript-original',
        type: Icongram,
        description: "Web's core scripting language"
      },
      {
        name: 'Python',
        label: 'python',
        type: RawIcon,
        description: 'Versatile, readable programming language'
      },
      {
        name: 'HTML5',
        label: 'html5-original',
        type: Icongram,
        description: 'Markup for modern web pages'
      },
      {
        name: 'CSS3',
        label: 'css3-original',
        type: Icongram,
        description: 'Styling for responsive web design'
      },
      {
        name: 'Bash',
        label: 'bash',
        type: RawIcon,
        description: 'Scripting for Linux and automation'
      },
      {
        name: 'Swift',
        label: 'swift',
        type: RawIcon,
        description: "Apple's modern app development language"
      },
      {
        name: 'Elm',
        label: 'elm',
        type: RawIcon,
        description: 'Functional language for web UI'
      },
      {
        name: 'TypeScript',
        label: 'typescript-plain',
        type: Icongram,
        description: 'Typed JavaScript for large apps'
      },
      {
        name: 'Java',
        label: 'java-original',
        type: Icongram,
        description: "Enterprise-grade, cross-platform language"
      }
    ]
  },
  {
    name: "Tools & Frameworks",
    icon: React.createElement(Wrench, { className: "h-5 w-5" }),
    skills: [
      {
        name: 'Gorilla',
        label: 'gorilla',
        type: RawIcon,
        filetype: 'png',
        description: 'Go web toolkit for robust APIs'
      },
      {
        name: 'Rails',
        label: 'rails-original-wordmark',
        type: Icongram,
        description: 'Ruby web framework for rapid development'
      },
      {
        name: 'Sinatra',
        label: 'sinatra',
        type: RawIcon,
        description: 'Lightweight Ruby web framework'
      },
      {
        name: 'Phoenix',
        label: 'phoenix',
        type: RawIcon,
        description: 'Elixir web framework for real-time apps'
      },
      {
        name: 'React',
        label: 'react-original',
        type: Icongram,
        description: 'Declarative UI library for web apps'
      },
      {
        name: 'Vue',
        label: 'vue',
        type: RawIcon,
        description: 'Progressive JavaScript framework for UI'
      },
      {
        name: 'Lodash',
        label: 'lodash',
        type: RawIcon,
        description: 'Utility library for JavaScript'
      },
      {
        name: 'Bootstrap',
        label: 'bootstrap-plain',
        type: Icongram,
        description: 'CSS framework for responsive design'
      },
      {
        name: 'Webpack',
        label: 'webpack',
        type: RawIcon,
        description: 'JavaScript bundler and module loader'
      },
      {
        name: 'Babel',
        label: 'babel',
        type: RawIcon,
        description: 'JavaScript compiler for modern features'
      },
      {
        name: 'Node.js',
        label: 'node-js',
        type: RawIcon,
        description: 'JavaScript runtime for server-side apps'
      },
      {
        name: 'Less',
        label: 'less-plain-wordmark',
        type: Icongram,
        description: 'CSS preprocessor for maintainable styles'
      },
      {
        name: 'SASS',
        label: 'sass-original',
        type: Icongram,
        description: 'CSS extension with variables & nesting'
      },
      {
        name: 'D3.js',
        label: 'd3',
        type: RawIcon,
        description: 'Data visualization library for web'
      },
      {
        name: 'VTK.js',
        label: 'vtk-js',
        type: RawIcon,
        description: "3D visualization library for the web"
      }
    ]
  },
  {
    name: "Infrastructure & Data",
    icon: React.createElement(Database, { className: "h-5 w-5" }),
    skills: [
      {
        name: 'Kafka',
        label: 'kafka',
        type: RawIcon,
        description: 'Distributed event streaming platform'
      },
      {
        name: 'Postgres',
        label: 'postgresql-original',
        type: Icongram,
        description: 'Advanced open-source relational database'
      },
      {
        name: 'MySQL',
        label: 'mysql-plain',
        type: Icongram,
        description: 'Popular open-source relational database'
      },
      {
        name: 'Redis',
        label: 'redis-original',
        type: Icongram,
        description: 'In-memory key-value data store'
      },
      {
        name: 'Sqlite',
        label: 'sqlite',
        type: RawIcon,
        description: 'Lightweight embedded SQL database'
      },
      {
        name: 'Apache Beam',
        label: 'apache-beam',
        type: RawIcon,
        filetype: 'png',
        description: 'Unified batch and stream processing'
      },
      {
        name: 'Docker',
        label: 'docker-original',
        type: Icongram,
        description: 'Containerization platform for applications'
      },
      {
        name: 'Kubernetes',
        label: 'kubernetes',
        type: RawIcon,
        description: 'Container orchestration for scalability'
      },
      {
        name: 'Nginx',
        label: 'nginx-original',
        type: Icongram,
        description: 'High-performance web server'
      },
      {
        name: 'Git',
        label: 'git-original',
        type: Icongram,
        description: 'Version control for source code'
      },
      {
        name: 'Fastlane',
        label: 'fastlane',
        type: RawIcon,
        filetype: 'png',
        description: 'Automates mobile app deployments'
      },
      {
        name: 'Github Actions',
        label: 'github-actions',
        type: RawIcon,
        description: 'CI/CD automation for GitHub'
      },
      {
        name: 'CircleCI',
        label: 'circleci',
        type: RawIcon,
        description: 'Continuous integration and deployment'
      },
      {
        name: 'Jenkins',
        label: 'jenkins',
        type: RawIcon,
        filetype: 'png',
        description: 'Automation server for CI/CD'
      },
      {
        name: 'Terraform',
        label: 'terraform',
        type: RawIcon,
        filetype: 'png',
        description: 'Infrastructure as code tool'
      },
      {
        name: 'Elasticsearch',
        label: 'elasticsearch',
        type: RawIcon,
        filetype: 'png',
        description: 'Search and analytics engine'
      },
      {
        name: 'Fluentd',
        label: 'fluentd',
        type: RawIcon,
        filetype: 'png',
        description: 'Log collection and aggregation'
      },
      {
        name: 'Kibana',
        label: 'kibana',
        type: RawIcon,
        filetype: 'png',
        description: "Data visualization for Elasticsearch"
      },
      {
        name: 'DataDog',
        label: 'datadog',
        type: RawIcon,
        description: 'Cloud monitoring and security platform'
      },
    ]
  },
  {
    name: "Platforms",
    icon: React.createElement(Server, { className: "h-5 w-5" }),
    skills: [
      {
        name: 'Linux',
        label: 'linux-original',
        type: Icongram,
        description: 'Open-source operating system'
      },
      {
        name: 'Debian',
        label: 'debian-plain',
        type: Icongram,
        description: 'Stable Linux distribution'
      },
      {
        name: 'Raspberry Pi',
        label: 'raspberry-pi',
        type: RawIcon,
        description: 'Single-board computer for projects'
      },
      {
        name: 'Ubuntu',
        label: 'ubuntu',
        type: RawIcon,
        filetype: 'png',
        description: 'User-friendly Linux distribution'
      },
      {
        name: 'iOS',
        label: 'apple-original',
        type: Icongram,
        description: "Apple's mobile operating system"
      },
      {
        name: 'AWS',
        label: 'amazonwebservices-original',
        type: Icongram,
        description: 'Cloud computing by Amazon'
      },
      {
        name: 'Google Cloud Platform',
        label: 'google-cloud-platform',
        type: RawIcon,
        description: "Google's cloud computing services"
      },
      {
        name: 'Azure',
        label: 'azure',
        type: RawIcon,
        description: "Microsoft's cloud computing platform"
      },
      {
        name: 'Heroku',
        label: 'heroku-plain',
        type: Icongram,
        description: 'PaaS for deploying apps'
      },
      {
        name: 'Digital Ocean',
        label: 'digital-ocean',
        type: RawIcon,
        description: "Cloud computing for developers"
      }
    ]
  }
]
