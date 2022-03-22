/*
 * @Author: yangp004
 * @LastEditors: yangp004
 * @Date: 2022-03-22 11:34:56
 * @LastEditTime: 2022-03-22 14:05:49
 * @Description: Modify here please
 */
import json from 'rollup-plugin-json';
import pkg from './package.json';

export default [{
  input: 'src/main.js',
  output: [{
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  }, {
    file: pkg.unpkg,
    format: 'iife',
    name: 'constantLib',
    sourcemap: true,
  }, {
    file: pkg.module,
    format: 'esm',
    sourcemap: true,
  },],
  plugins: [json()]
}];