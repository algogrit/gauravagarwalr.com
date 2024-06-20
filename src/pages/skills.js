import _ from 'lodash'
import React from 'react'

import { withPrefix } from 'gatsby-link'

// https://icongr.am/devicon
const Icongram = ({label, tooltip}) => {
  let src = `https://icongr.am/devicon/${label}.svg`

  return <img src={src} className="icongram-svg" title={tooltip} alt={tooltip}/>
}

const RawIcon = ({label, tooltip, filetype = 'svg'}) => {
  let src = withPrefix(`/assets/images/skills/${label}.${filetype}`)

  return <img src={src} className="raw-svg" title={tooltip} alt={tooltip}/>
}

const SKILLS = [
  {
    title: "Programming Languages",
    icons: [
      { tooltip: 'Go', label: 'go-original', type: Icongram },
      { tooltip: 'Rust' },
      { tooltip: 'Elixir' },
      { tooltip: 'Ruby', filetype: 'png' },
      { tooltip: 'Erlang', label: 'erlang-original', type: Icongram },
      { tooltip: 'JavaScript', label: 'javascript-original', type: Icongram },
      { tooltip: 'Python' },
      { tooltip: 'HTML5', label: 'html5-original', type: Icongram },
      { tooltip: 'CSS3', label: 'css3-original', type: Icongram },
      { tooltip: 'Bash' },
      { tooltip: 'Swift' },
      { tooltip: 'Elm' },
      { tooltip: 'TypeScript', label: 'typescript-plain', type: Icongram },
      { tooltip: 'Java', label: 'java-original', type: Icongram }
    ]
  },
  {
    title: "Tools & Frameworks",
    icons: [
      { tooltip: 'Gorilla', filetype: 'png' },
      { tooltip: 'Rails', label: 'rails-original-wordmark', type: Icongram },
      { tooltip: 'Sinatra' },
      { tooltip: 'Phoenix' },
      { tooltip: 'React', label: 'react-original', type: Icongram },
      { tooltip: 'Vue' },
      { tooltip: 'Lodash' },
      { tooltip: 'Bootstrap', label: 'bootstrap-plain', type: Icongram },
      { tooltip: 'Webpack' },
      { tooltip: 'Babel' },
      { tooltip: 'Node.js' },
      { tooltip: 'Less', label: 'less-plain-wordmark', type: Icongram },
      { tooltip: 'SASS', label: 'sass-original', type: Icongram },
      { tooltip: 'D3.js', label: 'd3' },
      { tooltip: 'VTK.js' },
    ]
  },
  {
    title: "Infrastructure & Data",
    icons: [
      { tooltip: 'Kafka' },
      { tooltip: 'Postgres', label: 'postgresql-original', type: Icongram },
      { tooltip: 'MySQL', label: 'mysql-plain', type: Icongram },
      { tooltip: 'Redis', label: 'redis-original', type: Icongram },
      { tooltip: 'Sqlite' },
      { tooltip: 'Apache Beam', filetype: 'png' },
      { tooltip: 'Docker', label: 'docker-original', type: Icongram },
      { tooltip: 'Kubernetes' },
      { tooltip: 'Nginx', label: 'nginx-original', type: Icongram },
      { tooltip: 'Git', label: 'git-original', type: Icongram },
      { tooltip: 'Fastlane', filetype: 'png' },
      { tooltip: 'CircleCI', label: 'circleci' },
      { tooltip: 'Jenkins', filetype: 'png' },
      { tooltip: 'Terraform', filetype: 'png' },
      { tooltip: 'Elasticsearch', filetype: 'png' },
      { tooltip: 'Fluentd', filetype: 'png' },
      { tooltip: 'Kibana', filetype: 'png' },
    ]
  },
  {
    title: "Platforms",
    icons: [
      { tooltip: 'Linux', label: 'linux-original', type: Icongram },
      { tooltip: 'Debian', label: 'debian-plain', type: Icongram },
      { tooltip: 'Raspberry Pi' },
      { tooltip: 'Ubuntu', filetype: 'png' },
      { tooltip: 'iOS', label: 'apple-original', type: Icongram },
      { tooltip: 'AWS', label: 'amazonwebservices-original', type: Icongram },
      { tooltip: 'Google Cloud Platform' },
      { tooltip: 'Azure' },
      { tooltip: 'Heroku', label: 'heroku-plain', type: Icongram },
      { tooltip: 'Digital Ocean' },
    ]
  }
]

const Skill = ({skill}) => {
  let icons = skill.icons.map((icon) => {
    let IconTag = icon.type || RawIcon
    let label = icon.label || _.kebabCase(icon.tooltip)

    return (
      <li className="list-inline-item" key={label}>
        <IconTag label={label} tooltip={icon.tooltip} filetype={icon.filetype}/>
        <span className="skill-tooltip">{icon.tooltip}</span>
      </li>
    )
  })

  return (
    <div className="skill">
      <div className="subheading mb-3">{skill.title}</div>
      <ul className="list-inline list-icons">{icons}</ul>
    </div>
  )
}

const WORKFLOW = [
  "Fault tolerant & resilient architecture",
  "Distributed micro-service architecture",
  "Mobile-First, Responsive Design",
  "Cross Browser Testing & Debugging",
  "Agile Development & Scrum",
  "Rapid Prototyping & Early feedback",
]

const SkillsSection = () => (
  <section className="resume-section p-5 p-lg-5 d-flex flex-column" id="skills">
    <div className="my-auto">
      <h2 className="mb-5">Skills</h2>
      { SKILLS.map((skill) => <Skill key={skill.title} skill={skill}/>) }

      <div className="skill">
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          {
            WORKFLOW.map((item, index) => (
              <li key={index}>
                <i className="fa-li fa fa-check"></i>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </section>
)

export default SkillsSection
