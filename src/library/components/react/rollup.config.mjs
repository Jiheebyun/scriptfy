// src/library/components/react/rollup.config.mjs
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default [
  // ESM
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].js'
    },
    external: ['react', 'react-dom'],
    plugins: [
      resolve(),
      typescript({
        tsconfig: './tsconfig.json'  // 여기에는 "declaration": false
      }),
      postcss({
        extensions: ['.scss'],
        extract: true,
        minimize: true
      })
    ]
  },
  // CJS
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].cjs'
    },
    external: ['react', 'react-dom'],
    plugins: [
      resolve(),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      postcss({
        extensions: ['.scss'],
        extract: true,
        minimize: true
      })
    ]
  }
];
