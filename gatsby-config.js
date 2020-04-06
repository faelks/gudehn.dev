module.exports = {
  plugins: [`gatsby-plugin-styled-components`,
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
  ],
}