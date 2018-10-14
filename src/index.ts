// HyperMD, copyright (c) by laobubu
// Distributed under an MIT license: http://laobubu.net/HyperMD/LICENSE
//

import * as mermaid__ from 'mermaid'
import { registerRenderer, CodeRenderer, getAddon as getFoldCode } from "hypermd/addon/fold-code"

const mermaid: typeof mermaid__ = mermaid__ || window['mermaid']

let mermaidIdPrefix = "_mermaid_" + Math.random().toString(36).slice(2, 18) + "_"
let mermaidCounter = 0

export const mermaidRenderer: CodeRenderer = (code, info) => {
  var id = mermaidIdPrefix + (mermaidCounter++).toString(36)

  var el = document.createElement('div')
  el.setAttribute('id', id)
  el.setAttribute('class', 'hmd-fold-code-image hmd-fold-code-mermaid')

  mermaid.render(id, code, (svgCode, bindFunctions) => {
    el.innerHTML = svgCode
    el.removeAttribute('id')
    bindFunctions(el)
    info.changed()
  });

  return el
}

if (mermaid) {
  registerRenderer({
    name: "mermaid",
    pattern: /^mermaid$/i,
    renderer: mermaidRenderer,
    suggested: true,
  })
} else {
  console.error("[hypermd-mermaid] mermaid not found.")
}