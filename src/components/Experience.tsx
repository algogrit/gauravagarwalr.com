
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { BadgeCheck, FolderOpen } from 'lucide-react';

type SubProject = {
  name: string;
  description: string;
  technologies: string[];
};

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  link?: string;
  current?: boolean;
  projects?: SubProject[];
};

const experienceData: ExperienceItem[] = [
  {
    company: 'CoderMana Technologies Pvt Ltd',
    position: 'Director of Engineering',
    link: 'https://codermana.com/',
    period: 'Aug 2020 - Present',
    description: `Technical consulting for clients across the world, corporate trainings and product development`,
    achievements: [
      "Performance optimizations at the DB and backend level on existing and new code being built",
      "Moved from a manually managed infra to a IaC based solution while meeting SLAs to reduce downtime",
      "Managing and transforming teams into a agile process",
      "Delivered world-class training on multiple technologies to varied audiences"
    ],
    current: true,
    projects: [
      {
        name: 'Roll',
        link: "https://tryroll.com",
        description: 'Member of the core technical team. Led the backend and SRE team. Worked closely with stake holders to build and deploy new features.',
        technologies: ["Go", "Kubernetes", "Helm", "RDS", "Terraform", "ElasticSearch", "DataDog", "Vault", "AWS", "ORY Hydra", "CircleCI", "GitHub Actions", "Twilio", "OIDC"]
      },
      {
        name: 'CB App, MantaSolutions',
        description: 'Building graphQL based APIs to power the frontend. Working closely with stakeholders for feature development. Managing and transforming the team to a agile process.',
        technologies: ["Go", "GraphQL", "Apollo.js", "Postgres"]
      },
      {
        name: 'Trainings',
        description: 'Delivered world-class training on Go, Rust, Elixir, C++, Data Engineering, Distributed Systems Design, Docker, Kubernetes, Terraform, Cloud - AWS, GCP & Azure, Ruby, Python, Java, Cilium, and more for multiple clients all over Asia, America, Europe, Africa & Australia.',
        technologies: ["Go", "Rust", "Elixir", "C++", "Data Engineering", "Distributed Systems Design", "Docker", "Kubernetes", "Terraform", "AWS", "GCP", "Ruby", "Python", "Java", "Cilium", "DataDog"],
      },
      {
        name: 'Products',
        description: 'Building SaaS products in the space of near-realtime monitoring, data ingestion and content publishing.',
        technologies: ["Python", "React", "Ruby", "Go", "JavaScript"],
      }
    ]
  },
  {
    company: 'Agarwal Consulting',
    position: 'Founder & Principal Consultant',
    link: 'https://agarwalconsulting.io/',
    period: 'Apr 2018 - Present',
    description: `Technical consulting for clients across the world & corporate trainings`,
    achievements: [
      "Led the re-architecture of infrastructure and moved away from Heroku to AWS while containerizing the micro-services",
      "Integrating an oauth 2 server implementation to allow third-party developers to interact and build on top of backend APIs"
    ],
    current: true,
    projects: [
      {
        name: 'Roll',
        description: 'Member of the core technical team. Led the re-architecture of infrastructure and moving away from Heroku to AWS. Re-designed the existing application to be cloud-native running on AWS managed Kubernetes service. Setting up monitoring systems using EFK stack. Building and deploying new features. Integrating an oauth 2 server implementation to allow third-party developers to interact and build on top of our backend APIs.',
        technologies: ["Go", "Kubernetes", "Helm", "RDS", "Terraform", "Elastic Search", "AWS", "ORY Hydra", "CircleCI", "Twilio"]
      },
      {
        name: 'Digisense, Autosense',
        description: 'Building a data processing pipeline to ingest 10K packets/s from Pubsub into Google BigQuery and Google BigTable. Designed and architected the pipeline on GCP using Dataflow, which is built on top of Apache Beam. Designing the codebase easy to configure and scale.',
        technologies: ["Java", "Apache Beam", "Cloud DataFlow", "Google BigQuery", "Google BigTable", "Gson", "Google Pubsub"]
      },
      {
        name: 'Oshi',
        description: 'Building a world-class react app to help patients record their own health metrics and keep a track of their diets and routine. Designed, built and iterated over several features of the app',
        technologies: ["React", "Redux", "Cordova", "SVG"]
      },
      {
        name: 'Trainings',
        description: 'Delivered world-class training on Go, Docker, Kubernetes, Ruby, Python & Java for multiple clients across India, US & Singapore.',
        technologies: ["Go", "Docker", "Kubernetes", "Ruby", "Python", "Java"]
      }
    ]
  },
  {
    company: 'Tarka Labs',
    position: 'Lead Technical Consultant',
    period: 'Oct 2016 - Oct 2018',
    description: `Working across multiple domains from teleinformatics to mining to enterprise asset management to manufacturing.`,
    achievements: [
      "Leading a team of developers to deliver consistently and working closely with clients and their development teams to ensure timely delivery",
      "Solving hard technical problems in a fast-changing landscape",
      "Working across the stack - including hardware, mobile and web apps"
    ],
    projects: [
      {
        name: 'HRIS, Auzmor',
        description: `Mentoring and leading a team on TypeScript/React. Designing the Web app from the ground up to be bug-free and scalable code-wise. Building entire backend using Ruby on Rails. Architecting deployment on GCP using Docker containers onto a Kubernetes cluster.`,
        technologies: ["Ruby on Rails", "React.js", "Redux", "GCP", "Kubernetes", "Docker"]
      },
      {
        name: 'Datacloud',
        description: `Using OpenCV to stitch images taken inside of a mine. Consuming sensor data and visualizing the regions where the ores are concentrated. Creating, running and managing containers using Docker on Azure instances. Designed and built apps using Vue.js and 3D visualisations using VTK.js. Built ReSTful APIs using Go programming language.`,
        technologies: ["Vue.js", "Docker", "Azure", "Go", "OpenCV", "Python", "ClickHouse", "VTK.js", "Sinatra", "Redis"]
      },
      {
        name: 'Fankave',
        description: `Building React.js based visualisations using live data from API. Designed and iterated on 2D visualisations using D3.js and pure SVG components.`,
        technologies: ["React.js", "D3.js", "SVG", "AWS"]
      },
      {
        name: 'Smart Crib',
        description: `Leading the IoT-based proof of concept product. Designed circuits using KiCAD, interfaced with MFRC-522 nfc reader & ble bluetooth devices using python. Built a self-updating dashboard using Node.js running on Raspberry Pi.`,
        technologies: ["Python", "Raspberry Pi", "BLE Bluetooth", "MFRC-522", "Node.js", "Bash"]
      },
      {
        name: 'EAM360 Application',
        description: `Leading the iOS team using Swift programming language. Ensured the mobile app is offline accessible. Setting up the CI/CD pipelines using Fastlane, Jenkins and CircleCI for both Android and iOS. Built FaaS apps using Go, deployed on AWS lambda using serverless.js.`,
        technologies: ["Swift", "iOS 11+", "CoreData", "GCD and dispatch queues", "Fastlane", "Jenkins", "CircleCI", "Go", "serverless.js", "Android"]
      }
    ]
  },
  {
    company: 'Tarka Labs',
    position: 'Lead Technical Developer',
    period: 'Nov 2015 - Sep 2016',
    description: "Led teams and built scalable web applications",
    achievements: [
      "Built realtime map based dashboards with smooth frame rates",
      "Built concurrent and fault-tolerant scrapers using elixir and OTP framework"
    ],
    projects: [
      {
        name: "Zephyr, Mod.us",
        description: `Been a part of this long running project since the beginning. Later went on to lead a remote distributed team. Built realtime apps using websockets, React.js. Used immstruct and immutable.js for state management. Used RxJS to reduce thrashing and jank in the app. Built interactive visualisations using Google maps and SVG + React.js based components.`,
        technologies: ["React.js", "Elixir", "RxJS", "SVG", "Immutable / Immstruct", "Webpack"]
      },
      {
        name: "Betting LeadIn",
        description: `Worked on building a app using Elm on the frontend and used Elixir and Phoenix for the backend.`,
        technologies: ["Elixir", "Phoenix", "Erlang OTP", "Elm"]
      }
    ]
  },
  {
    company: 'Tarka Labs',
    position: 'Senior Technical Consultant',
    period: 'Dec 2014 - Nov 2015',
    description: "Worked on interactive dashboards and legacy RoR applications",
    achievements: [
      "Optimised and tuned postgreSQL workload and queries",
      "Built highly interactive 3D visual apps",
      "Stabilized legacy systems, decreasing downtime and improved developer experience"
    ],
    projects: [
      {
        name: "DMP, Mod.us",
        description: `Developing new features on their existing vehicle tracking system built using Ruby on Rails.`,
        technologies: ["Ruby on Rails", "Postgres"]
      },
      {
        name: "Lifelogger",
        description: `Built interactive app using Elm. This was a highly interactive 3D visual app using reddit API as proof of concept. Deployed on heroku.`,
        technologies: ["Elm", "Heroku"]
      }
    ]
  },
  {
    company: 'BrowserStack',
    position: 'Software Engineer',
    period: 'Sep 2013 - Oct 2014',
    description: `Worked on Automate product and Internal tools`,
    achievements: [
      "Managing internal servers to the satisfaction of internal stake holders",
      "Analyzing and cleaning up billing data",
      "Building dashboards for internal metrics",
      "Stabilizing systems dealing with payments and  customer-facing near real-time dashboard for automation logs"
    ],
    projects: [
      {
        name: "Automate",
        description: `I have been the main rails developer on the Automate team, which is the product which allows you to run Selenium/JS Tests across multiple Browsers/OS combination. Here I have been working hard to stabilise their application, over the course of 2 months.`,
        technologies: ["Ruby on Rails", "Node.js", "Selenium Webdriver", "Sphinx", "MySQL", "Javascript", "jQuery"]
      },
      {
        name: "Infrastructure",
        description: `Managing their internal test environments using a combination of capistrano, bash and adhoc scripts. Error recovery and ran diagnostics to bring failing systems up and running.`,
        technologies: ["AWS", "Capistrano", "Bash", "Nagios", "Newrelic"]
      },
      {
        name: "Zombie",
        description: `Developing an internal usage dashboard, for understanding usage patterns across multiple metrics and dimensions. Fast iteration and feedback cycle. Designed the raw SQL queries and built a custom query builder to run on MySQL`,
        technologies: ["Ruby on Rails", "jQuery", "Twitter Bootstrap", "MySQL"]
      }
    ]
  },
  {
    company: 'ThoughtWorks',
    position: 'Consultant',
    period: 'May 2012 - Sep 2013',
    description: `Worked with Senior Developers - practising agile, TDD, pair programming and extreme programming methodologies.`,
    achievements: [
      "Learnt a lot of coding techniques, including refactoring and writing clean readable code",
      "Built an extensive set of visualizations, including map based ones, to chart sales distribution across a country"
    ],
    projects: []
  },
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
                index !== experienceData.length - 1 && "border-l border-border print:border-none",
                "animate-fade-up opacity-0"
              )}
              style={{ animationDelay: `${(index + 1) * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center print:hidden">
                {job.current && <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />}
              </div>

              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-2 print:px-0">
                {job.period}
              </span>

              <h3 className="text-xl font-bold">{job.position}</h3>
              {job.link && (
                <a
                  href={job.link}
                  className="text-primary hover:underline mt-2 inline-block"
                >
                  <p className="text-muted-foreground font-medium mb-4">{job.company}</p>
                </a>
              )}

              {!job.link && <p className="text-muted-foreground font-medium mb-4">{job.company}</p>}

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

              {job.projects && job.projects.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center text-sm uppercase tracking-wider text-muted-foreground font-medium mb-2 pl-2">
                    Notable Projects
                  </div>

                  <div className="mt-3 space-y-4 pl-2 print:pl-0">
                    {job.projects.map((project, i) => (
                      <div key={i} className="pl-4">
                        <h5 className="font-medium text-sm">{project.name}</h5>
                        <p className="text-sm text-muted-foreground mt-1">{project.description}</p>

                        <div className="mt-2">
                          <h6 className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">Technologies</h6>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="px-1.5 py-0.5 bg-secondary rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
