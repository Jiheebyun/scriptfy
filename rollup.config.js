import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/library/index.ts',
  output: [
    {
      file: 'dist/react/scriptify.react.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/react/scriptify.react.cjs.js',
      format: 'cjs',
      sourcemap: true
    }
  ],
  external: ['react', 'react-dom'], 
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({ extract: true }),
    terser()
  ]
};