import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const input = 'src/index.js';
const defaultPlugins = [
  babel({
    babelrc: false,
    presets: [['@babel/env', { modules: false }]],
  }),
];

export default [
  {
    input,
    plugins: [].concat(defaultPlugins, [commonjs()]),
    external: ['axios', 'qs', 'tls'],
    output: {
      file: 'dist/rodonaves-js.js',
      format: 'umd',
      name: 'rodonaves',
    },
  },
  {
    input,
    plugins: [].concat(defaultPlugins, [
      resolve({
        browser: true,
      }),
      commonjs(),
    ]),
    context: 'window',
    output: {
      file: 'dist/rodonaves-js-browser.js',
      format: 'umd',
      name: 'rodonaves',
    },
  },
];
