// scripts/generateIndex.js

import fs from 'fs';
import path from 'path';

/**
 * 자동으로 export 구문을 생성할 폴더 목록
 * 예: ['components', 'utils', 'hooks']
 */
const foldersToScan = ['components'];

/**
 * 모든 export 구문을 담을 배열
 * 스캔하면서 exportLine("export * from '...'")을 채운 뒤,
 * 최종적으로 join해서 index.js를 구성한다.
 */
const exportLines = [];

/**
 * 주어진 디렉터리 내부를 재귀적으로 스캔하며,
 * .js 파일에 대해 "export * from '...';" 구문을 만들고 exportLines 배열에 푸시한다.
 *
 * @param {string} dirPath  - 실제 파일시스템의 절대경로 (예: /project/src/components)
 * @param {string} basePath - 기준이 되는 경로 (예: /project/src), export 경로 계산 시 사용
 */
function walkDir(dirPath, basePath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      // 디렉터리라면 재귀적으로 들어가서 스캔
      walkDir(fullPath, basePath);
    } else if (entry.isFile()) {
      // .js 파일만 처리, 그 외 (.test.js, .d.ts 등) 제외
      if (
        entry.name.endsWith('.js') &&
        !entry.name.endsWith('.test.js') &&
        !entry.name.endsWith('.d.ts')
      ) {
        // basePath를 기준으로 한 상대 경로를 export 구문에 사용
        const relativePath = './' + path.relative(basePath, fullPath).replace(/\\/g, '/');
        exportLines.push(`export * from '${relativePath}';`);
      }
    }
  }
}

/**
 * 실제로 index.js 파일을 생성하는 메인 함수
 * - foldersToScan 안의 폴더를 각각 탐색하여 exportLines를 누적
 * - 최종 결과를 src/index.js에 기록
 * - 기존에 있던 index.js는 .bak로 백업(옵션)
 */
function generateIndex() {
  try {
    const srcPath = path.resolve('src');           // 'src' 폴더 절대경로
    const outputPath = path.join(srcPath, 'index.js'); // 최종 index.js 위치

    // 스캔할 폴더 각각 처리
    for (const folder of foldersToScan) {
      const dir = path.join(srcPath, folder); // 예: /project/src/components
      if (fs.existsSync(dir) && fs.lstatSync(dir).isDirectory()) {
        walkDir(dir, srcPath);
      }
    }

    // 기존 index.js가 있으면 백업 (원치 않으면 생략 가능)
    if (fs.existsSync(outputPath)) {
      fs.renameSync(outputPath, outputPath + '.bak');
      console.log(`[INFO] Existing index.js backed up to index.js.bak`);
    }

    // 최종 export 구문 작성
    const content = exportLines.join('\n') + '\n';
    fs.writeFileSync(outputPath, content, 'utf-8');

    console.log(`[SUCCESS] Generated index.js at: ${outputPath}\n`);
    console.log(content);
  } catch (err) {
    console.error('[ERROR] Failed to generate index.js:\n', err);
    process.exit(1); // 종료 코드 1로 오류 표시
  }
}

// 스크립트 실행
generateIndex();
