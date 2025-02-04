// src/library/components/react/rollup.config.mjs
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',   // 라이브러리 진입점
  output: [
    {
      file: 'dist/my-library.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/my-library.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'], // 번들에서 제외
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.json' // 이 패키지 내의 tsconfig.json
    }),
    postcss({
      extensions: ['.scss'],
      extract: true,   // 별도 CSS 파일 생성 가능
      minimize: true
    })
  ]
};
