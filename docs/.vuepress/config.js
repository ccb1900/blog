module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ],
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "script",
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
      }
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/echarts@4.2.1/dist/echarts.js"
      }
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/vue-echarts@4.0.1"
      }
    ]
  ],
  plugins: []
};
