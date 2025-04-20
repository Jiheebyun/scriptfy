// rollup.config.mjs
import resolve from '@rollup/plugin-node-resolve';
import sass from 'rollup-plugin-sass';

export default [
  // ESM 빌드
  {
    input: 'src/index.js',
    output: {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    plugins: [
      resolve(),
      sass({
        insert: true
      })
    ]
  },
  // CJS 빌드
  {
    input: 'src/index.js',
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].cjs'
    },
    plugins: [
      resolve(),
      sass({
        insert: true
      })
    ]
  }
];
