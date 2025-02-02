scriptify/
├── package.json          // 루트 패키지 (공통 의존성 및 스크립트 관리)
├── tsconfig.json         // 모노레포 전체에 대한 타입스크립트 설정 (필요에 따라 각 패키지별 tsconfig도 사용)
├── lerna.json            // Lerna 사용 시 (또는 Yarn Workspaces 설정)
├── packages/
│   ├── core/             // 공통 유틸리티 및 타입, 공유 모듈
│   │   └── package.json
│   ├── electron/         // Electron 전용 컴포넌트 패키지
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       └── MyElectronComponent.tsx
│   ├── react/            // React 전용 컴포넌트 패키지
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       └── MyButton.tsx
│   └── vanilla/          // Vanilla JS 전용 컴포넌트 패키지
│       ├── package.json
│       └── src/
│           └── MyVanillaComponent.js
└── demo/                 // 데모 애플리케이션 및 문서
    ├── docs/
    ├── client/
    └── server/
