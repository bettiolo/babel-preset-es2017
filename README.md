# babel-preset-es2017

[![Build status](https://img.shields.io/travis/bettiolo/babel-preset-es2017.svg)]
(https://travis-ci.org/bettiolo/babel-preset-es2017)
[![Dependency status](https://david-dm.org/bettiolo/babel-preset-es2017.svg)]
(https://david-dm.org/bettiolo/babel-preset-es2017)
[![npm version](https://img.shields.io/npm/v/babel-preset-es2017.svg)]
(https://www.npmjs.com/package/babel-preset-es2017)
[![node version](https://img.shields.io/node/v/babel-preset-es2017.svg)]
(https://github.com/bettiolo/babel-preset-es2017/blob/master/package.json)
[![npm license](https://img.shields.io/npm/l/babel-preset-es2017.svg)]
(https://github.com/bettiolo/babel-preset-es2017/blob/master/LICENSE)

> Babel preset to use ES2015, ES2016 and ES2017 (incl. stage 3) with Node 5.x.

## Install


[![NPM](https://nodei.co/npm/babel-preset-es2017.png?mini=true)](https://www.npmjs.org/package/babel-preset-es2017)

```sh
$ npm install --save babel-preset-es2017
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

## ES2017 (incl. stage 3), ES2016/ES7, ES2015/ES6, ES5.x support

### ES2017 (incl. stage 3)

Support for [stage4/stage3 proposals](https://github.com/tc39/ecma262/blob/master/README.md):
- [ ] SIMD.JS
- [x] [Async Functions](http://www.2ality.com/2016/02/async-functions.html)
      | [transform-async-to-generator](https://babeljs.io/docs/plugins/transform-async-to-generator/),
        [syntax-async-functions](https://babeljs.io/docs/plugins/syntax-async-functions/)
- [x] [Object.values/Object.entries](http://www.2ality.com/2015/11/stage3-object-entries.html)
      | [es7.object.values](https://github.com/zloirock/core-js/blob/v2.2.1/modules/es7.object.values.js),
        [es7.object.entries](https://github.com/zloirock/core-js/blob/v2.2.1/modules/es7.object.entries.js)
- [ ] [String.prototype.padStart/String.prototype.padEnd](https://github.com/tc39/proposal-string-pad-start-end)
      | [es7.string.pad-start](https://github.com/zloirock/core-js/blob/v2.4.1/modules/es7.string.pad-start.js),
      [es7.string.pad-end](https://github.com/zloirock/core-js/blob/v2.4.1/modules/es7.string.pad-end.js)
- [ ] Trailing commas in function parameter lists and calls
- [ ] Object.getOwnPropertyDescriptors

### ES2016 / ES6

- [x] [Array.prototype.includes](http://www.2ality.com/2016/02/array-prototype-includes.html) 
      | [array-includes](https://www.npmjs.com/package/babel-plugin-array-includes)
- [x] [Exponentiation Operator (`**`)](http://www.2ality.com/2016/02/exponentiation-operator.html)
      | [transform-exponentiation-operator](https://babeljs.io/docs/plugins/transform-exponentiation-operator/)

### ES2015 / ES6
_TODO: describe support_

### ES5
_TODO: describe support_

## Documentation:
- [ES2017 Language Specification](https://tc39.github.io/ecma262)
- [ECMAScript process](http://www.2ality.com/2015/11/tc39-process.html)
- [Final feature set of ES2016](http://www.2ality.com/2016/01/ecmascript-2016.html)
- [Proposed features of ES2017](http://www.2ality.com/2016/02/ecmascript-2017.html)


## Related projects:
- https://github.com/babel/babel/tree/master/packages/babel-preset-es2015
- https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0
- https://github.com/babel/babel/tree/master/packages/babel-preset-stage-1
- https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2
- https://github.com/babel/babel/tree/master/packages/babel-preset-stage-3
- https://github.com/babel/babel/tree/master/packages/babel-preset-react
- https://github.com/jbach/babel-preset-es2015-node4
- https://github.com/alekseykulikov/babel-preset-es2015-node5
- https://github.com/leebenson/babel-preset-node5
- https://github.com/rtsao/babel-preset-es2015-node
- https://github.com/colinbate/babel-preset-es2015-node-plus
- https://github.com/MattMcFarland/babel-preset-bleeding
- https://github.com/airbnb/babel-preset-airbnb
