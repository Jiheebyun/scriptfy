# scriptfy


## 소개

1. 기능 제공 웹 서비스: scriptfy
    - 컴포넌트와 기능을 사용자 웹서비스에 제공하는 역학을 담당합니다.
    - 이 서비스는 공통 기능과 컴포넌트를  API로 제공하거나 모듈로 공유하여 사용자 웹서비스가 필요한 경우 해당 컴포넌트를 요청하고 사용할 수 있게 합니다.
    - 독립된 서비스로 유지해 다양한 기능을 확장하기 쉽게 만들고, 필요한 경우 웹 서비스에서만 로드 되도록 설정할수 있습니다.
    - 
## 파일 구조 

<details>
  <summary>파일 구조 상세</summary>


```javascript

/my-ui-library
│
├── /dist                         # 배포용 빌드 결과물
│   ├── react/
│   │   ├── my-ui-library.react.esm.js
│   │   ├── my-ui-library.react.cjs.js
│   │   └── my-ui-library.react.d.ts
│   │
│   ├── vanilla/
│   │   ├── my-ui-library.vanilla.umd.js
│   │   ├── my-ui-library.vanilla.esm.js
│   │   └── my-ui-library.vanilla.min.js
│   │
│   ├── electron/                 # Electron 전용 빌드 결과물
│   │   ├── my-ui-library.electron.cjs.js
│   │   └── preload.js
│   │
│   ├── styles/
│   │   └── my-ui-library.css
│   │
│   └── index.js
│
├── /src                          # 라이브러리와 데모 웹페이지 소스
│   ├── /library                  # 라이브러리 소스 코드
│   │   ├── /components
│   │   │   ├── /react            # React 컴포넌트
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Button.module.scss
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── /vanilla          # Vanilla JS 컴포넌트
│   │   │   │   ├── Button.js
│   │   │   │   ├── Input.js
│   │   │   │   ├── Button.scss
│   │   │   │   └── index.js
│   │   │   │
│   │   │   ├── /electron         # Electron 전용 컴포넌트
│   │   │   │   ├── FileManager.tsx
│   │   │   │   ├── IPCButton.tsx
│   │   │   │   └── index.ts      # Electron 컴포넌트 모음
│   │   │   │
│   │   │   └── index.ts          # React, Vanilla, Electron 공통 모음
│   │   │
│   │   ├── /styles
│   │   │   ├── global.scss       # 공통 스타일
│   │   │   ├── theme.scss        # 테마 스타일
│   │   │   └── mixins.scss       # SCSS 믹스인
│   │   │
│   │   └── index.ts              # 라이브러리 진입점
│   │
│   ├── /demo                     # 데모 웹페이지 코드
│   │   ├── /components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── DemoSection.tsx
│   │   │
│   │   ├── /pages
│   │   │   ├── Home.tsx          # 메인 페이지
│   │   │   ├── Docs.tsx          # 설명 페이지
│   │   │   └── Examples.tsx      # 데모 페이지
│   │   │
│   │   ├── App.tsx               # 웹페이지 진입점
│   │   └── index.tsx             # ReactDOM 렌더링
│   │
│   └── index.ts                  # 개발 및 빌드 시 라이브러리/데모 선택 진입점
│
├── /electron                     # Electron 관련 코드
│   ├── main.js                   # Electron 메인 프로세스 코드
│   ├── preload.js                # Preload 스크립트
│   ├── ipc-handlers.js           # IPC 핸들러 모음
│   └── config.js                 # Electron 설정
│
├── /scripts                      # 빌드 및 배포 스크립트
│   ├── build-library.js
│   ├── build-demo.js
│   ├── build-electron.js         # Electron 빌드 스크립트
│   └── start-demo.js
│
├── package.json
├── rollup.config.js              # 라이브러리 빌드 설정
├── vite.config.ts                # 데모 웹페이지 빌드 설정 (Vite)
├── tsconfig.json
├── README.md                     # GitHub 문서
└── .gitignore


```
</details>



### 구조와 설정 파일 매칭

1. package.json
- 프로젝트의 최상위 관리 파일로, 의존성 및 스크립트를 관리합니다.
- 현재 구조에 맞게 다음 역할을 합니다:
-- 스크립트 관리:
--- build-library: src/library의 코드를 빌드하여 dist/react, dist/vanilla, dist/electron에 결과물 생성.
--- start-demo: src/demo에서 Vite를 실행하여 데모 개발 서버를 시작.
--- build-demo: src/demo를 빌드하여 최적화된 데모 결과물 생성.
--- build-electron: Electron 관련 파일을 빌드.
-- 의존성 관리:
--- React, Rollup, Vite, TypeScript, Electron 등의 의존성 관리.


