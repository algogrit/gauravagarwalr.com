import classNames from 'classnames'

import React from 'react'
import Link from 'gatsby-link'

const socialLinks = [
  {
    icon: 'fa-twitter',
    href: 'http://twitter.com/gauravagarwalr'
  },
  {
    icon: 'fa-linkedin',
    href: 'https://www.linkedin.com/in/gauravagarwalr'
  },
  {
    icon: 'fa-github',
    href: 'https://github.com/gauravagarwalr'
  },
  {
    icon: 'fa-bitbucket',
    href: 'https://bitbucket.org/gauravagarwalr'
  },
  {
    icon: 'fa-stack-overflow',
    href: 'https://stackoverflow.com/users/1268651/gaurav-agarwal'
  },
  {
    icon: 'fa-pencil-square',
    href: 'https://blog.gauravagarwalr.com/'
  }
]

const IndexPage = () => (
  <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div className="my-auto">
      <h1 className="mb-0">Gaurav
        <span className="text-primary">Agarwal</span>
      </h1>
      <div className="subheading mb-5">
        17/8, Vadamalai Street, Vepery · Chennai, Tamil Nadu 600007
      </div>
      <div className="subheading mb-5">
        <a href="tel:+918668140137">+91 86681 40137</a> · <a href="tel:+1 (408) 498-5176">+1 (408) 498-5176</a> · <a href="mailto:gauravagarwalr@gmail.com">gaurav.agarwal.r@gmail.com</a>
      </div>
      <p className="mb-5"></p>
      <ul className="list-inline list-social-icons mb-0">
        {
          socialLinks.map((socialLink) => {
            return (
              <li className="list-inline-item">
                <a href={socialLink.href} target="_blank">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className={classNames("fa fa-stack-1x fa-inverse", socialLink.icon)}></i>
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

export default IndexPage
