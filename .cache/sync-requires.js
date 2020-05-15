const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-blog-post-layout-js": hot(preferDefault(require("/Users/rohanrana/gatsby-natlify/src/components/BlogPostLayout.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/rohanrana/gatsby-natlify/src/pages/404.js"))),
  "component---src-pages-about-us-js": hot(preferDefault(require("/Users/rohanrana/gatsby-natlify/src/pages/about-us.js"))),
  "component---src-pages-contact-us-js": hot(preferDefault(require("/Users/rohanrana/gatsby-natlify/src/pages/contact-us.js"))),
  "component---src-pages-gallary-js": hot(preferDefault(require("/Users/rohanrana/gatsby-natlify/src/pages/gallary.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/rohanrana/gatsby-natlify/src/pages/index.js")))
}

