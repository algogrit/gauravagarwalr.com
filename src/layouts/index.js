import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/sidebar'

import 'bootstrap/scss/bootstrap.scss'
import 'startbootstrap-resume/css/resume.css'

import 'font-awesome/css/font-awesome.css'

import '../../src/assets/styles/index.scss'
import '../../src/assets/styles/print.scss'

const Layout = ({ children, data }) => (
  <div id="page-top">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Resume and Portfolio' },
        { name: 'keywords', content: 'algogrit, technical consultant, software engineer, freelance, experienced, developer, programmer, frontend, backend, full stack' },
        { name: 'author', content: 'Gaurav Agarwal' },
        { name: 'google-site-verification', content: 'WIplXD9_AT1q-q7UzbwFRNsu1gOzfoJqXRHokqznM14' }
      ]}
    />
    <Sidebar/>
    {children()}
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
