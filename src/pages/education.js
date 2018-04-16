import React from 'react'

const EDUCATION = [
  {
    institution: 'Anna University, Chennai',
    course: 'Bachelor of Technology',
    specialization: 'Information Technology',
    scoreType: 'CGPA',
    score: '7.71',
    startDate: 'September 2008',
    endDate: 'March 2012'
  },
  {
    institution: 'Doveton Matriculation Higher Secondary School',
    course: 'State Board',
    specialization: 'Physics, Chemistry, Maths and Computer Science',
    scoreType: 'Marks',
    score: '934',
    startDate: 'May 2006',
    endDate: 'March 2008'
  }
]

const EducationSection = () => (
  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
    <div className="my-auto">
      <h2 className="mb-5">Education</h2>
      {
        EDUCATION.map((education) => {
          return (
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">{education.institution}</h3>
                <div className="subheading mb-3">{education.course}</div>
                <div>{education.specialization}</div>
                <p>{education.scoreType}: {education.score}</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">{education.startDate} - {education.endDate}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  </section>
)

export default EducationSection
