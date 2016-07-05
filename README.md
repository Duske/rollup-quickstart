# rollup-quickstart [![Build Status](https://travis-ci.org/Duske/rollup-quickstart.svg?branch=1.0.0)](https://travis-ci.org/Duske/rollup-quickstart)

This package provides a simple quickstarter setup for rollup projects. It's
heavily inspired by the official [rollup-starter-project package](https://github.com/rollup/rollup-starter-project) but it has
some small changes. The biggest chance for now is using [AVA](https://github.com/avajs/ava) as a test runner
along with the latest rollup watch package for incremental builds. In addition
you can import your own modules with relative paths. Just take a look at the
files in the `src` directory.

Just like the original package, it features [babel](https://github.com/babel/babel) which compiles your
code written in ES 2015 and beyond.

## Usage

### Usage in a browser/ External dependencies
When building a package for the browser, you probably don't want to rely on
external dependencies.
Just unset the `external` property in `rollup.config.js` to include all modules.

To include packages from npm written as a ES2015 or CommonJS module, you could
use a rollup config like this:

```js
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import includePaths from 'rollup-plugin-includepaths';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

const includePathOptions = {
    paths: ['src'],
    extensions: ['.js', '.json', '.html']
};
export default {
  entry: 'src/index.js',
  plugins: [
    includePaths(includePathOptions),
    babel(babelrc()),
    nodeResolve({ jsnext: true, main: true }),
    commonjs()
  ],
  targets: [
    {
      dest: pkg['main'],
      format: 'umd',
      moduleName: 'rollupQuickstart',
      sourceMap: true
    },
    {
      dest: pkg['jsnext:main'],
      format: 'es6',
      sourceMap: true
    }
  ]
};

```
For more information, please take a look at the
[rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve)
and [rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs) plugin.


### Structure

#### Source code

The source code can be found in the `src` directory. Because of the
`rollup-plugin-includepaths` plugin, you can import your dependencies there with
relative paths, so no `./` is required at the beginning.
The `index.js` is the main and entry file of you package, where you'll import
all other modules.

#### Bundled code

The bundled and compiled code lies in the `dist` directory. Two versions can be
found there, one file with `.mjs` filetype (ES2015 module) and one with
`.js` (UMD module).

#### Tests

The tests can be run by typing `npm test`. The test runner executing these tests
is AVA, which works pretty well with ES2015 code. To follow best practices when
writing the test, an eslint config for AVA is also provided.
