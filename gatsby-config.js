const myViews = {
  mobile: '(max-width: 480px)',
  mobileXl: '(max-width: 700px)',
  tablet: '(max-width: 980px)',
  pc: '(max-width: 1350px)',
  pcXl: '(min-width: 1351px)',
  portrait: '(orientation: portrait)',
}

module.exports = {
  siteMetadata: {
    title: `Oakhurst Dog Park`,
    author: {
      name: `Scott Griffin`,
      summary: `Web developer based in Atlanta. Looking for opportunities! - https://yoscott.com `,
    },
    description: `Visit Oakhurst Dog Park in Decatur, GA`,
    siteUrl: `https://oakhurstdogpark.com`,
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `rules`,
        path: `${__dirname}/content/rules`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/content/assets/logos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/content/assets/slides`,
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: myViews,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        // filetypes: {
        //   ".scss": { syntax: `postcss-scss` },
        // },
        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
        exclude: `node_modules`,
        handleMissingStyleName: `warn`,
        // For all the options check babel-plugin-react-css-modules README link provided above
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oakhurst Dog Park`,
        short_name: `Dog Park`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FEAE25`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
        // PLACEHOLDER
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-netlify',
    `gatsby-plugin-react-helmet`,
  ],
}
