import classNames from 'classnames'

import React from 'react'

const SOCIAL_LINKS = [
  {
    icon: 'fa-skype',
    href: 'skype:gauravagarwalr',
    title: 'Skype'
  },
  {
    icon: 'fa-twitter',
    href: 'https://twitter.com/gauravagarwalr',
    title: 'Twitter'
  },
  {
    icon: 'fa-linkedin',
    href: 'https://www.linkedin.com/in/gauravagarwalr',
    title: 'Linkedin'
  },
  {
    icon: 'fa-github',
    href: 'https://github.com/gauravagarwalr',
    title: 'Github'
  },
  {
    icon: 'fa-bitbucket',
    href: 'https://bitbucket.org/gauravagarwalr',
    title: 'Bitbucket'
  },
  {
    icon: 'fa-stack-overflow',
    href: 'https://stackoverflow.com/users/1268651/gaurav-agarwal',
    title: 'Stack Overflow'
  },
  {
    icon: 'fa-medium',
    href: 'https://medium.com/@gauravagarwalr',
    title: 'Medium'
  },
  {
    icon: 'fa-pencil-square',
    href: 'https://blog.gauravagarwalr.com/',
    title: 'Blog'
  }
]

const AboutSection = () => (
  <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div className="my-auto">
      <h1 className="mb-0 header-name">Gaurav
        <span className="text-primary">Agarwal</span>
      </h1>
      <div className="subheading mb-5">
        <p>
          <a href="tel:+1 (408) 498-5176">+1 (408) 498-5176</a> · <a href="mailto:gauravagarwalr@gmail.com">gaurav.agarwal.r@gmail.com</a>
        </p>
      </div>
      <div className="mb-5">
        <p>
          I am a generalist software engineer who has worked across the stack and is equally comfortable with managing and keeping services up and running, as well as creating beautiful 2D and 3D visualizations.
        </p>

        <p>
          I am a full stack developer, willing to get his hands dirty in order to get things moving. I don't believe in working in silos. I find it comforting to understand all layers of a stack.
        </p>

        <p>I am a freelance technical consultant. Hit me up and we can discuss how I can help you in bringing your next big idea to life.</p>
      </div>
      <ul className="list-inline list-social-icons mb-0">
        {
          SOCIAL_LINKS.map((socialLink) => {
            return (
              <li className="list-inline-item">
                <a href={socialLink.href} target="_blank">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className={classNames("fa fa-stack-1x fa-inverse", socialLink.icon)} title={socialLink.title}></i>
                  </span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  </section>
)

export default AboutSection
