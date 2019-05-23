import React from 'react'

// TODO
// const SPEAKER_LIST = [
//   {
//     event: 'GopherCon India 2019',
//     year: '2019',
//     title: 'An investigative walkthrough of Go's channels',
//     description: ''
//   }
// ]

const TalksSection = () => {
  return (
    <section className="resume-section p-5 p-lg-5 d-flex flex-column" id="talks">
      <div className="my-auto">
        <h2 className="mb-5">Talks</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL7qtxrxCQ5DBhg0p9p8nDx58FvFR2GVe2" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="my-auto print-alternative">
        <h2 className="mb-5">{"Speaker & Community"}</h2>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Chennai Golang community organizer
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Conducted workshops and hands-on training
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Spoke at various International conferences
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Speak regularly at various local meetups
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Attend regular local meetups and international conferences
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TalksSection;
