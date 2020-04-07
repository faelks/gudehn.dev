module.exports = {
  siteMetadata: {
    title: `Felix Gudéhn`,
  },
  plugins: [
    // CSS-in-JS styling
    `gatsby-plugin-styled-components`,

    // For parsing .md files as blog posts
    `gatsby-transformer-remark`,

    // Manage the meta data in the head element on pages
    `gatsby-plugin-react-helmet`,

    // Manage the manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Felix Gudéhn",
        short_name: "FelixGudéhn",
        start_url: "/",
        background_color: "#fafafa",
        theme_color: "#fafafa",
        icon: "static/koala-512x512.png",
      },
    },

    // Access filesystem, allows for queries on filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}