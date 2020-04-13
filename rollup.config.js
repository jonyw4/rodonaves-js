import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const input = 'src/rodonaves-js.js';
const defaultPlugins = [
  babel({
    babelrc: false,
    plugins: ['external-helpers'],
    presets: [['env', { modules: false }]],
  }),
];

export default [
  {
    input,
    plugins: [].concat(defaultPlugins, [commonjs()]),
    output: {
      file: pkg.main,
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
      file: pkg.module,
      format: 'umd',
      name: 'rodonaves',
    },
  },
];
