const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-events-js": hot(preferDefault(require("C:\\git repos\\newgatsbytheme\\gatsby-theme-events\\src\\templates\\events.js"))),
  "component---src-templates-event-js": hot(preferDefault(require("C:\\git repos\\newgatsbytheme\\gatsby-theme-events\\src\\templates\\event.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\git repos\\newgatsbytheme\\gatsby-theme-events\\.cache\\dev-404-page.js")))
}

