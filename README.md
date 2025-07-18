# scriptfy


## 소개

1. 기능 제공 웹 서비스: scriptfy
    - 컴포넌트와 기능을 사용자 웹서비스에 제공하는 라이브러리 역할을 담당합니다.
    - 이 서비스는 공통 기능과 컴포넌트를  API로 제공하거나 모듈로 공유하여 사용자 웹서비스가 필요한 경우 해당 컴포넌트를 요청하고 사용할 수 있게 합니다.
    - 독립된 서비스로 유지해 다양한 기능을 확장하기 쉽게 만들고, 필요한 경우 웹 서비스에서만 로드 되도록 설정할수 있습니다.
    - 
## 파일 구조 

<details>
  <summary>파일 구조 상세</summary>


```javascript

my-ui-library/
├── package.json
├── tsconfig.json
├── rollup.config.js        # 라이브러리 빌드 (React/Vanilla/Electron)
├── vite.config.ts          # 데모(프론트엔드), Electron Renderer용 설정
├── README.md
├── .gitignore
├── dist                     # 빌드 결과물
│   ├── react/
│   │   ├── my-ui-library.react.esm.js
│   │   ├── my-ui-library.react.cjs.js
│   │   └── my-ui-library.react.d.ts
│   ├── vanilla/
│   │   ├── my-ui-library.vanilla.umd.js
│   │   ├── my-ui-library.vanilla.esm.js
│   │   └── my-ui-library.vanilla.min.js
│   ├── electron/
│   │   ├── my-ui-library.electron.cjs.js
│   │   └── preload.js
│   ├── styles/
│   │   └── my-ui-library.css
│   └── index.js
│
└── src
    ├── library                  # 라이브러리 소스 코드
    │   ├── components
    │   │   ├── react            # React 컴포넌트 (예: Button, Input)
    │   │   │   ├── Button.tsx
    │   │   │   ├── Input.tsx
    │   │   │   ├── Button.module.scss
    │   │   │   └── index.ts
    │   │   ├── vanilla          # Vanilla JS 컴포넌트 (예: Button.js, Input.js)
    │   │   │   ├── Button.js
    │   │   │   ├── Input.js
    │   │   │   ├── Button.scss
    │   │   │   └── index.js
    │   │   └── electron         # Electron 전용 컴포넌트 (예: FileManager.tsx)
    │   │       ├── FileManager.tsx
    │   │       ├── IPCButton.tsx
    │   │       └── index.ts
    │   ├── styles
    │   │   ├── global.scss
    │   │   ├── theme.scss
    │   │   └── mixins.scss
    │   └── index.ts             # 라이브러리 엔트리 포인트(react/vanilla/electron export)
    │
    ├── demo                     # 데모 (프론트엔드+백엔드)
    │   ├── public
    │   │   └── vite.svg
    │   ├── src                  # 프론트엔드(브라우저)용 React 코드
    │   │   ├── assets
    │   │   │   └── react.svg
    │   │   ├── App.css
    │   │   ├── App.tsx          # 프론트엔드 메인 컴포넌트
    │   │   ├── index.css
    │   │   ├── index.tsx        # 브라우저 엔트리포인트(ReactDOM)
    │   │   └── vite-env.d.ts
    │   ├── server               # 백엔드(Node.js)용 코드
    │   │   ├── index.ts         # Node.js 서버 진입점 (예: Express 서버)
    │   │   ├── routes
    │   │   │   └── exampleRoute.ts
    │   │   └── controllers
    │   │       └── exampleController.ts
    │   ├── .gitignore
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── index.html           # Vite가 사용하는 HTML 템플릿
    │   ├── tsconfig.app.json    # 브라우저(프론트엔드)용 TS 설정
    │   ├── tsconfig.json        # demo용 공통 TS 설정(extends)
    │   └── tsconfig.node.json   # Node.js(백엔드)용 TS 설정
    │
    ├── electron                 # Electron 관련 코드
    │   ├── main.js              # Electron 메인 프로세스
    │   ├── preload.js           # Preload 스크립트
    │   ├── ipc-handlers.js      # IPC 핸들러
    │   └── config.js            # Electron 설정
    │
    └── index.ts                 # 필요시 빌드/진입 설정



```
</details>



## 구조와 설정 파일 매칭

1. package.json
- 프로젝트의 최상위 관리 파일로, 의존성 및 스크립트를 관리합니다.
- 현재 구조에 맞게 다음 역할을 합니다:
  - 스크립트 관리:
  - build-library: src/library의 코드를 빌드하여 dist/react, dist/vanilla, dist/electron에 결과물 생성.
  - start-demo: src/demo에서 Vite를 실행하여 데모 개발 서버를 시작.
  - build-demo: src/demo를 빌드하여 최적화된 데모 결과물 생성.
  - build-electron: Electron 관련 파일을 빌드.
  - 의존성 관리:
  - React, Rollup, Vite, TypeScript, Electron 등의 의존성 관리.

## 실행 방법


```javascript
# 1. 의존성 설치
npm install
```
```javascript
# 2. 데모(프론트엔드) 개발 서버 실행
npm run start-demo
```

```javascript
# 3. 데모 빌드
npm run build-demo
```

```javascript
# 4. 라이브러리 빌드 (React/Vanilla/Electron)
npm run build-library
```

```javascript
# 5. Electron 앱 실행
npm run start-electron
```

## 사용 예시 
```javascript
import { Button } from '@scriptify/react-components';
// 또는
import Button from '@scriptify/react-components/Button';
```

## 개발/배포 워크플로우

- **설정/배포**: 루트에서 통합 관리 (`rollup.config.mjs`, `package.json` 등)
- **개발(HMR/Watch)**: 각 패키지 폴더에서 독립적으로 실행
- **공통 규칙/의존성**: 루트에서 일관되게 관리
- **패키지별 빠른 개발 환경**: 각 패키지에서 watch 모드로 즉시 재빌드 가능
```javascript
  ### 패키지별 개발(Watch 모드) 예시

  # React 패키지에서
  cd src/library/components/react
  npm install
  npm run build:rollup -- --watch

  # Vanilla 패키지에서
  cd src/library/components/vanilla
  npm install
  npm run build:rollup -- --watch
```

## 테스트 
- (추후 테스트 코드 및 실행 방법 추가 예정)

## Dev Environment 

1. Library - React 
- demo 폴더에는 docs 웹 애플리케이션이 존재합니다. 이 애플리케이션은 미리 설치된 React 라이브러리 모듈인 @scriptify_js/react를 import 하여 사용합니다. (ES Module(esm), CommonJS(cjs), 타입 정의(.d.ts) 등 다양한 포맷을 지원)
- docs웹 페이지에서 /dev url로 접근하게되면 모듈을 가져와 확인 또는 개발 할수 있는 환경을 별로도 제공 (해당 페이지를 웹 어플리케이션이 배포할때 제외)
2. Library - vanilla javascript
- react와 동일

```javascript

// 예시: demo/src/App.jsx
// scriptfy/src/demo/client/src/pages/devEnvironment/devPage.tsx
import React from 'react';
import { Button } from '@scriptify_js/react';

function App() {
  return (
    <div>
      <h1>Docs Demo</h1>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
}

export default App;
```





## 문서 











