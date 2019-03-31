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
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/v-charts/lib/style.min.css"
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
        src: "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"
      }
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js"
      }
    ]
  ],
  plugins: [],
  configureWebpack: {
    externals: {
      // "v-charts/lib/line.common": "v-charts/lib/line.common"
    }
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
    // config.externals({
    //   // "vue-echarts": "VueECharts"
    // });
    // return config;
  }
};
