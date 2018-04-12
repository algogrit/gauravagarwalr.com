import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/sidebar'

import 'bootstrap/scss/bootstrap.scss'
import 'startbootstrap-resume/css/resume.css'

import 'font-awesome/css/font-awesome.css'
import 'devicons/css/devicons.css'

import 'devicons/css/devicons.css'

import '../../src/assets/styles/index.scss'

const Layout = ({ children, data }) => (
  <div id="page-top">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Resume and Portfolio' },
        { name: 'keywords', content: 'gauravagarwalr, consultant, software engineer' },
        { name: 'author', content: 'Gaurav Agarwal' }
      ]}
    />
    <Sidebar/>
    <div className="container-fluid p-0">
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
