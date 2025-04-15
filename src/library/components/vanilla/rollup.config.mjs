// rollup.config.mjs
import path from 'path';

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.js',      // generateIndex.js가 만든 index.js
  output: [
    {
      file: 'dist/esm/index.js',
      format: 'es',           // ES Module
      sourcemap: true
    },
    {
      file: 'dist/cjs/index.cjs',
      format: 'cjs',          // CommonJS
      sourcemap: true
    }
  ],
  plugins: [
  ]
};
