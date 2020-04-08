module.exports = {
  siteMetadata: {
    title: `Felix Gudéhn`,
  },
  plugins: [
    // CSS-in-JS styling
    `gatsby-plugin-styled-components`,

    // For parsing .md files as blog posts
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },

    // For managing images in gatsby
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },

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
        icon: "src/assets/koala-512x512.png",
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

    // Allow importing .svg as react components
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/ 
        }
      }
    }
  ],
}