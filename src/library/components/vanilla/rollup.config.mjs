// rollup.config.mjs

import resolve from '@rollup/plugin-node-resolve';
// 만약 바닐라 JS에 SCSS를 처리하고 싶다면
// import sass from 'rollup-plugin-sass';

export default [
  // ESM 빌드
  {
    input: 'src/index.js', // generateIndex.js가 생성하는 메인 파일
    output: {
      // 폴더 단위로 결과물을 배치
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      // (선택) 최종 JS 파일명 형태
      entryFileNames: '[name].js'
    },
    external: [],
    plugins: [
      resolve(),
      // sass({
      //   insert: false,
      //   output: 'dist/esm/index.css',
      //   // or extract: true, minimize: true, 등등
      // })
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
    external: [],
    plugins: [
      resolve(),
      // sass({...}) // 같은 옵션
    ]
  }
];
