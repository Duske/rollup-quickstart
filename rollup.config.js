import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import includePaths from 'rollup-plugin-includepaths';

const includePathOptions = {
    paths: ['src'],
    extensions: ['.js', '.json', '.html']
};

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/index.js',
  plugins: [
    includePaths(includePathOptions),
    babel(babelrc())
  ],
  external: external,
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
