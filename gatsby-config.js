module.exports = {
  siteMetadata: {
    title: `Chukwuemeka Chima Curriculum Vitae`,
    description: `Curriculum vitae is a web application for the CV of the author. It is powered by Gatsby.`,
    author: `@chukwuemekachm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chukwuemeka Chima Curriculum Vitae`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#1c46f2`,
        theme_color: `#1c46f2`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`200`, `400`, `600`],
          },
          {
            family: `Open Sans`,
            variants: [`200`, `300`, `400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
  ],
};
