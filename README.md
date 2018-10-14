# hypermd-mermaid

Use [mermaid][] to render 'mermaid' code blocks into diagrams:

Mermaid supports flowchart, sequence diagram, gantt diagram, class diagram, git graph and more!

[Demo](https://hypermd.github.io/hypermd-mermaid/example/) | [GitHub](https://github.com/HyperMD/hypermd-mermaid) | [![NPM version](https://img.shields.io/npm/v/hypermd-mermaid.svg?style=flat-square)](https://npmjs.org/package/hypermd-mermaid)

## How to use

1. install `hypermd-mermaid`
2. `import` before creating HyperMD editor
3. create HyperMD editor

In your HyperMD editor, you can insert a [mermaid][] figure like this.

(The syntax reference can be found in [mermaid][] website)

    ```mermaid
    graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    ```

### For webpack / parcel

First of all, install the packages: `npm install --save hypermd-mermaid`

```js
import * as HyperMD from "hypermd"
import "hypermd-mermaid"

const your_textarea = document.getElementById('input-box')
const editor = HyperMD.fromTextArea(your_textarea)
```

### For requirejs (⚠️IMPORTANT)

⚠️ **Mermaid build is incompatible with RequireJS!** To make them work together, please follow this instruction!

In your HTML:

```html
<textarea id="input-box" cols="30" rows="10">You can input here!</textarea>

<!-- 👇 mermaid (before RequireJS!) -->
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/requirejs/require.js"></script> <!-- 👈 RequireJS -->
<script src="https://cdn.jsdelivr.net/npm/hypermd/goods/patch-requirejs.js"></script> <!-- 👈 IMPORTANT -->
<script data-main src="main.js"></script>
```

In your main.js

```js
requirejs.config({
  packages: [ { name: 'hypermd-mermaid', main: 'index.js' } ]
});
define("mermaid", [], function () { return window['mermaid'] });

// then, add "hypermd-mermaid" to your main-entry's dependency list.
```

Finally, here is [an example of `main.js`](./example/requirejs-main.js) and [a live demo](https://hypermd.github.io/hypermd-mermaid/example/).

### For Plain Browser Env

*Why hurting yourself? The bundlers and module loaders are the future!*

Add these HTML after loading HyperMD, before creating a editor.

```html
  <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/hypermd-mermaid/index.js"></script>
```

See the source of [example file](./example/pbe-index.html)


## APIs

This module exports following symbols.

(In plain browser env, they are stored in global variable `HyperMD_PowerPack.mermaid`)

- `mermaidRenderer` -- a CodeRenderer for HyperMD.FoldCode. (this may be useless for you because it will be registered automatically!)


### Configuring Mermaid

Before creating a HyperMD editor, you may call `mermaid.initialize()` to configure mermaid.

More details can be found in [mermaidAPI](https://mermaidjs.github.io/mermaidAPI.html).


[mermaid]: https://mermaidjs.github.io/
