import React from 'react'

const EXPERIENCE_DESCRIPTION = [
  {
    title: 'Software Practitioner',
    company: 'Self',
    startDate: 'October 2018',
    endDate: 'Present',
    description: `Building simple solutions to solve real world challenges. Chipping away one problem at a time.`
  },
  {
    title: 'Independent Consultant',
    company: 'Self',
    startDate: 'April 2018',
    endDate: 'August 2018',
    description: `Bringing wide variety of experience across domains and stacks into building cutting-edge solutions for clients.`
  },
  {
    title: 'Lead Technical Consultant',
    company: 'Tarka Labs',
    startDate: 'December 2014',
    endDate: 'October 2018',
    description: `Working across multiple domains from teleinformatics to mining to enterprise asset management to manufacturing.
    Leading a team of developers to deliver consistently and working closely with clients and their development teams to ensure timely delivery.
    Working across the stack - including hardware, mobile and web apps. Solving hard technical problems in a fast-changing landscape.`
  },
  {
    title: 'Software Engineer',
    company: 'BrowserStack',
    startDate: 'September 2013',
    endDate: 'October 2014',
    description: `Managing internal servers to the satisfaction of internal stake holders. Analyzing and cleaning up billing data.
    Building dashboards for internal metrics. Stabilizing systems dealing with payments and another system which was a customer-facing near real-time dashboard for automation logs.`
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

const ExperienceSection = () => (
  <section className="resume-section p-5 p-lg-5 d-flex flex-column" id="experience">
    <div className="my-auto">
      <h2 className="mb-5">Experience</h2>
      {
        EXPERIENCE_DESCRIPTION.map((experience) => {
          return (
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">{experience.title}</h3>
                <div className="subheading mb-3">{experience.company}</div>
                <p>{experience.description}</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">{experience.startDate} - {experience.endDate}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  </section>
)

export default ExperienceSection
