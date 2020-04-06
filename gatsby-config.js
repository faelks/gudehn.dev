module.exports = {
  siteMetadata: {
    title: `Felix Gudéhn`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}