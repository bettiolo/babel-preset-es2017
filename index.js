module.exports = {
  plugins: [
    // ES2015 w/ Node 5
    require('babel-plugin-syntax-object-rest-spread'),
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-modules-commonjs'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-sticky-regex'),
    require('babel-plugin-transform-es2015-unicode-regex'),
    require('babel-plugin-transform-strict-mode'),
    require('babel-plugin-transform-flow-strip-types'),
    require('babel-plugin-transform-object-rest-spread'),

    // ES2016 w/ Node 5
    require('babel-plugin-array-includes').default,
    require('babel-plugin-transform-exponentiation-operator'),

    // ES2017 w/ Node 5
    require('babel-plugin-syntax-async-functions'),
    require('babel-plugin-transform-async-to-generator'),
    require('babel-plugin-syntax-trailing-function-commas'),
  ]
};

require('./polyfill');
