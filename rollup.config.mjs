import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default [
  // React 번들
  {
    input: 'src/library/components/react/src/index.ts',
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
    plugins: [
      resolve(),            // 모듈 해석 플러그인 추가
      typescript(),         // TypeScript 플러그인
      postcss({
        extensions: ['.scss'],
        extract: 'dist/styles/my-ui-library-react.css',
        minimize: true
      })
    ],
    external: ['react', 'react-dom']
  },
  // Vanilla 번들
  {
    input: 'src/library/components/vanilla/index.js',
    output: [
      {
        file: 'dist/vanilla/my-ui-library.vanilla.umd.js',
        format: 'umd',
        name: 'MyUILibrary',
        sourcemap: true
      }
    ],
    plugins: [
      postcss({
        extensions: ['.scss'],
        extract: 'dist/styles/my-ui-library-vanilla.css',
        minimize: true
      })
    ],
    external: []
  },
  // Electron 번들
  {
    input: 'src/library/components/electron/index.ts',
    output: [
      {
        file: 'dist/electron/my-ui-library.electron.cjs.js',
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [
      typescript(),
      postcss({
        extensions: ['.scss'],
        extract: 'dist/styles/my-ui-library-electron.css',
        minimize: true
      })
    ],
    external: ['react', 'react-dom', 'electron']
  }
];
