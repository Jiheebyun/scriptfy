import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/library/index.ts',
    output: [
      {
        file: 'dist/react/my-ui-library.react.esm.js',
        format: 'esm',
        sourcemap: true
      },
      {
        file: 'dist/react/my-ui-library.react.cjs.js',
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [resolve(), commonjs(), typescript(), terser()],
    external: ['react', 'react-dom']
  },
  {
    input: 'src/library/index.js',
    output: [
      {
        file: 'dist/vanilla/my-ui-library.vanilla.umd.js',
        format: 'umd',
        name: 'MyUILibrary',
        sourcemap: true
      }
    ],
    plugins: [resolve(), commonjs(), terser()]
  }
];
