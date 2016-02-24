# babel-preset-es2017

> Babel preset for all es2017 plugins.

## Install

```sh
$ npm install --save-dev babel-preset-es2017
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2017"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2017 
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2017"]
});
```

### Related:
- https://github.com/babel/babel/tree/master/packages/babel-preset-es2015
- https://github.com/jbach/babel-preset-es2015-node4
- https://github.com/babel/babel/tree/master/packages/babel-preset-react
- https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0
