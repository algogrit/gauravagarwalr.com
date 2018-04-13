import _ from 'lodash'
import classNames from 'classnames'

import React from 'react'

import { withPrefix } from 'gatsby-link'

// http://vorillaz.github.io/devicons/#/cheat
const Devicons = ({label, tooltip}) => (
  <i className={classNames("devicons", label)} title={tooltip}></i>
)

// http://konpa.github.io/devicon/
const Devicon = ({label, tooltip}) => (
  <i className={label} title={tooltip}></i>
)

// https://icongr.am/devicon
const Icongram = ({label, tooltip}) => {
  let src = `https://icongr.am/devicon/${label}.svg`

  return <img src={src} className="icongram-svg" title={tooltip}/>
}

const RawIcon = ({label, tooltip, filetype = 'svg'}) => {
  let src = withPrefix(`/assets/images/skills/${label}.${filetype}`)

  return <img src={src} className="raw-svg" title={tooltip}/>
}

const SKILLS = [
  {
    title: "Programming Languages",
    icons: [
      { tooltip: 'Ruby', label: 'ruby-plain', type: Icongram },
      { tooltip: 'JavaScript', label: 'javascript-plain', type: Icongram },
      { tooltip: 'Go', label: 'go-original', type: Icongram },
      { tooltip: 'Python', label: 'python-plain', type: Icongram },
      { tooltip: 'HTML5', label: 'html5-plain', type: Icongram },
      { tooltip: 'CSS3', label: 'css3-plain', type: Icongram },
      { tooltip: 'Bash' },
      { tooltip: 'Swift' },
      { tooltip: 'Elm' },
      { tooltip: 'Elixir' },
      { tooltip: 'Java', label: 'java-original', type: Icongram },
    ]
  },
  {
    title: "Tools",
    icons: [
      { tooltip: 'Rails', label: 'rails-plain', type: Icongram },
      { tooltip: 'Sinatra' },
      { tooltip: 'Lodash' },
      { tooltip: 'React', label: 'react-original', type: Icongram },
      { tooltip: 'Bootstrap', label: 'bootstrap-plain', type: Icongram },
      { tooltip: 'Foundation', label: 'foundation-plain', type: Icongram },
      { tooltip: 'Webpack' },
      { tooltip: 'Babel' },
      { tooltip: 'Nodejs', label: 'nodejs-original-wordmark', type: Icongram },
      { tooltip: 'Less', label: 'less-plain-wordmark', type: Icongram },
      { tooltip: 'SASS', label: 'sass-original', type: Icongram },
      { tooltip: 'D3', label: 'd3' },
    ]
  },
  {
    title: "Infrastructure & Database",
    icons: [
      { tooltip: 'Postgres', label: 'postgresql-plain', type: Icongram },
      { tooltip: 'MySQL', label: 'mysql-plain', type: Icongram },
      { tooltip: 'Redis', label: 'redis-plain', type: Icongram },
      { tooltip: 'Docker', label: 'docker-plain', type: Icongram },
      { tooltip: 'Kubernetes' },
      { tooltip: 'Nginx', label: 'nginx-original', type: Icongram },
      { tooltip: 'CircleCI', label: 'circleci' },
      { tooltip: 'Jenkins' },
      { tooltip: 'Git' },
    ]
  },
  {
    title: "Platforms",
    icons: [
      { tooltip: 'Linux', label: 'linux-original', type: Icongram },
      { tooltip: 'Debian', label: 'debian-plain', type: Icongram },
      { tooltip: 'Raspberry Pi' },
      { tooltip: 'Ubuntu' },
      { tooltip: 'iOS', label: 'apple-original', type: Icongram },
      { tooltip: 'Android', label: 'android-plain', type: Icongram },
      { tooltip: 'AWS', label: 'amazonwebservices-original', type: Icongram },
      { tooltip: 'Google Cloud Platform' },
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
      <li className="list-inline-item">
        <IconTag label={label} tooltip={icon.tooltip} filetype={icon.filetype}/>
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

const SkillsSection = () => (
  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
    <div className="my-auto">
      <h2 className="mb-5">Skills</h2>
      { SKILLS.map((skill) => <Skill key={skill.title} skill={skill}/>) }

      <div className="skill">
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Mobile-First, Responsive Design
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Browser Testing &amp; Debugging
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Functional Teams
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Agile Development &amp; Scrum
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default SkillsSection
