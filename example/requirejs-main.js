requirejs.config({
  baseUrl: "https://cdn.jsdelivr.net/npm/",   // use CDN
  // baseUrl: "./node_modules/", // or use local version?

  packages: [
    { name: 'hypermd', main: 'everything.js' },
    { name: 'codemirror', main: 'lib/codemirror.js' },

    // ...

    // add this to requirejs config.packages:
    { name: 'hypermd-mermaid', main: 'index.js' },
  ]
})

define("mermaid", [], function () { return window['mermaid'] })


//////////////////////////////////////////////////////////////////
// This part is for development. It's meaningless to you. Please delete it:
// 这一小段代码仅用于开发测试，对你没用。要拷贝代码时，记得删除：
if (location.search.indexOf('_hmd_dev_') !== -1) requirejs.config({ paths: { "hypermd-mermaid": "/." } })
//////////////////////////////////////////////////////////////////

require([
  "hypermd",

  // ...

  // add this to your dependencies:
  "hypermd-mermaid",
], function (HyperMD) {

  // (optional) Before createing editor, configure mermaid!
  // See https://mermaidjs.github.io/mermaidAPI.html
  mermaid.initialize({ theme: "neutral" })

  var your_textarea = document.getElementById('input-box')
  var editor = HyperMD.fromTextArea(your_textarea)
})