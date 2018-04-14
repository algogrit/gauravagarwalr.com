module.exports = {
  siteMetadata: {
    title: 'Gaurav Agarwal, Software Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Open Sans\:300,300i,400,400i,600,600i,700,700i,800,800i',
          'Saira Extra Condensed\:100,200,300,400,500,600,700,800,900'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116511829-2",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    }
  ],
}
