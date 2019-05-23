import _ from 'lodash'
import React from 'react'

const EXPERIENCE_DESCRIPTION = [
  {
    title: 'Founder & Principal Consultant',
    company: 'Agarwal Consulting',
    link: 'https://agarwalconsulting.io/',
    startDate: 'April 2018',
    endDate: 'Present',
    description: `Technical consulting for clients across the world & corporate training - Go, React.js, Ruby on Rails, GraphQL, Javascript, Python, IoT.`,
    projects: [
      {
        title: 'Digisense, Autosense',
        description: 'Building a data processing pipeline to ingest 10K packets/s from Pubsub into Google BigQuery and Google BigTable. Designed and architected the pipeline on GCP using Dataflow, which is built on top of Apache Beam.',
        technologies: ["Java", "Apache Beam", "Cloud DataFlow", "Google BigQuery", "Google BigTable", "Gson", "Google Pubsub"]
      },
      {
        title: 'Oshi',
        description: 'Building a world-class react app to help patients record their own health metrics and keep a track of their diets and routine. Designed, built and iterated over several features of the app',
        technologies: ["React", "Redux", "Cordova", "SVG"]
      },
      {
        title: 'Trainings',
        description: 'Delivered world-class training on Go, Docker and Kubernetes for multiple clients across India.'
      },
      {
        title: 'Products',
        description: 'Building SaaS products in the space of near-realtime monitoring, data ingestion and content publishing.'
      }
    ]
  },
  {
    title: 'Lead Technical Consultant',
    company: 'Tarka Labs',
    startDate: 'October 2016',
    endDate: 'October 2018',
    description: `Working across multiple domains from teleinformatics to mining to enterprise asset management to manufacturing.
    Leading a team of developers to deliver consistently and working closely with clients and their development teams to ensure timely delivery.
    Working across the stack - including hardware, mobile and web apps. Solving hard technical problems in a fast-changing landscape.`,
    projects: [
      {
        title: 'HRIS, Auzmor',
        description: `Leading a team of developers. Building entire backend using Ruby on Rails and frontend using React.js, deployed on GCP using Docker containers on Kubernetes cluster.`,
        technologies: ["Ruby on Rails", "React.js", "Redux", "GCP", "Kubernetes"]
      },
      {
        title: 'Datacloud',
        description: `Worked with OpenCV to do image stitching. Creating, running and managing containers using Docker on Azure instances. Designed and built apps using Vue.js and 3D visualisations using VTK.js. Built ReSTful APIs using Go programming language.`,
        technologies: ["Vue.js", "Docker", "Azure", "Go", "OpenCV", "Python", "ClickHouse", "VTK.js", "Sinatra", "Redis"]
      },
      {
        title: 'Fankave',
        description: `Building React.js based visualisations using live data from API. Designed and iterated on 2D visualisations using D3.js and pure SVG components.`,
        technologies: ["React.js", "D3.js", "SVG", "AWS"]
      },
      {
        title: 'Smart Crib',
        description: `Leading the IoT-based proof of concept product. Designed circuits using KiCAD, interfaced with MFRC-522 nfc reader & ble bluetooth devices using python. Built a self-updating dashboard using Node.js running on Raspberry Pi.`,
        technologies: ["Python", "Raspberry Pi", "BLE Bluetooth", "MFRC-522", "Node.js", "Bash"]
      },
      {
        title: 'EAM360 Application',
        description: `Leading the iOS team using Swift programming language. Ensured the mobile app is offline accessible. Setting up the CI/CD pipelines using Fastlane, Jenkins and CircleCI for both Android and iOS. Built FaaS apps using Go, deployed on AWS lambda using serverless.js.`,
        technologies: ["Swift", "iOS 11+", "CoreData", "GCD and dispatch queues", "Fastlane", "Jenkins", "CircleCI", "Go", "serverless.js", "Android"]
      }
    ]
  },
  {
    title: 'Lead Technical Developer',
    company: 'Tarka Labs',
    startDate: 'November 2015',
    endDate: 'September 2016',
    projects: [
      {
        title: "Zephyr, Mod.us",
        description: `Been a part of this long running project since the beginning. Later went on to lead a remote distributed team. Built realtime apps using websockets, React.js. Used immstruct and immutable.js for state management. Used RxJS to reduce thrashing and jank in the app. Built interactive visualisations using Google maps and SVG + React.js based components.`,
        technologies: ["React.js", "Elixir", "RxJS", "SVG", "Immutable / Immstruct", "Webpack"]
      },
      {
        title: "Betting LeadIn",
        description: `Worked on building a app using Elm on the frontend and used Elixir and Phoenix for the backend. Built concurrent and fault-tolerant scrapers using elixir and OTP framework.`,
        technologies: ["Elixir", "Phoenix", "Erlang OTP", "Elm"]
      }
    ]
  },
  {
    title: 'Senior Technical Consultant',
    company: 'Tarka Labs',
    startDate: 'December 2014',
    endDate: 'November 2015',
    projects: [
      {
        title: "DMP, Mod.us",
        description: `Developing new features on their existing vehicle tracking system built using Ruby on Rails. Optimised and tuned their postgreSQL workload and queries.`,
        technologies: ["Ruby on Rails", "Postgres"]
      },
      {
        title: "Lifelogger",
        description: `Built interactive app using Elm. This was a highly interactive 3D visual app using reddit API as proof of concept. Deployed on heroku.`,
        technologies: ["Elm", "Heroku"]
      }
    ]
  },
  {
    title: 'Software Engineer',
    company: 'BrowserStack',
    startDate: 'September 2013',
    endDate: 'October 2014',
    description: `Managing internal servers to the satisfaction of internal stake holders. Analyzing and cleaning up billing data.
    Building dashboards for internal metrics. Stabilizing systems dealing with payments and another system which was a customer-facing near real-time dashboard for automation logs.`,
    projects: [
      {
        title: "Automate",
        description: `I have been the main rails developer on the Automate team, which is the product which allows you to run Selenium/JS Tests across multiple Browsers/OS combination. Here I have been working hard to stabilise their application, over the course of 2 months.`,
        technologies: ["Ruby on Rails", "Node.js", "Selenium Webdriver", "Sphinx", "MySQL", "Javascript", "jQuery"]
      },
      {
        title: "Infrastructure",
        description: `Managing their internal test environments using a combination of capistrano, bash and adhoc scripts. Error recovery and ran diagnostics to bring failing systems up and running.`,
        technologies: ["AWS", "Capistrano", "Bash", "Nagios", "Newrelic"]
      },
      {
        title: "Zombie",
        description: `Developing an internal usage dashboard, for understanding usage patterns across multiple metrics and dimensions. Fast iteration and feedback cycle. Designed the raw SQL queries and built a custom query builder to run on MySQL`,
        technologies: ["Ruby on Rails", "jQuery", "Twitter Bootstrap", "MySQL"]
      }
    ]
  },
  {
    title: 'Consultant',
    company: 'ThoughtWorks',
    startDate: 'May 2012',
    endDate: 'September 2013',
    description: `Worked with Senior Developers - practising agile, TDD, pair programming and extreme programming methodologies.
    Learnt a lot of coding techniques, including refactoring and writing clean readable code.
    Built an extensive set of visualizations, including maps based ones, to chart sales distribution across a country.`
  }
]

const Technologies = ({technologies}) => {
  if(_.isEmpty(technologies)) return null;

  return (
    <div className="technologies">
      <span className="key-tech">Key technologies</span>
      {
        technologies.map((technology) => <span className="technology" key={technology}>{technology}</span>)
      }
    </div>
  )
}

const Project = ({project}) => (
  <div className="project">
    <h5>{project.title}</h5>
    <div className="project-description">{project.description}</div>
    <Technologies technologies={project.technologies}/>
    <br/>
  </div>
)

const Projects = ({projects}) => {
  if(_.isEmpty(projects)) return null;

  return (
    <div className="projects">
      {
        projects.map((project) => <Project key={project.title} project={project}/>)
      }
    </div>
  )
}

const Experience = ({experience}) => (
  <div className="resume-item d-flex flex-column flex-md-row mb-5">
    <div className="resume-content mr-auto">
      <h3 className="mb-0">{experience.title}</h3>
      <div className="subheading mb-3"><a href={experience.link}>{experience.company}</a></div>
      {experience.description && <p>{experience.description}</p>}
      <Projects projects={experience.projects}/>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{experience.startDate} - {experience.endDate}</span>
    </div>
  </div>
)

const ExperienceSection = () => (
  <section className="resume-section p-5 p-lg-5 d-flex flex-column" id="experience">
    <div className="my-auto">
      <h2 className="mb-5">Experience</h2>
      {
        EXPERIENCE_DESCRIPTION.map((experience) => <Experience key={experience.startDate} experience={experience}/>)
      }
    </div>
  </section>
)

export default ExperienceSection
