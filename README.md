# scriptfy


## 소개

1. 기능 제공 웹 서비스: scriptfy
    - 컴포넌트와 기능을 사용자 웹서비스에 제공하는 역학을 담당합니다.
    - 이 서비스는 공통 기능과 컴포넌트를  API로 제공하거나 모듈로 공유하여 사용자 웹서비스가 필요한 경우 해당 컴포넌트를 요청하고 사용할 수 있게 합니다.
    - 독립된 서비스로 유지해 다양한 기능을 확장하기 쉽게 만들고, 필요한 경우 웹 서비스에서만 로드 되도록 설정할수 있습니다.
    - 
## 파일 구조 

<details>

/my-ui-library
│
├── /dist                         # 빌드된 파일 (배포용)
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
│   ├── styles/
│   │   └── my-ui-library.css
│   │
│   └── index.js
│
├── /docs                        # 문서화와 데모 웹페이지 소스
│   ├── /public                  # 정적 파일
│   │   └── favicon.ico
│   │
│   ├── /src                     # 문서화 페이지 소스
│   │   ├── /components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── DemoSection.js   # 데모용 섹션 컴포넌트
│   │   │
│   │   ├── /pages
│   │   │   ├── Home.js          # 메인 페이지
│   │   │   ├── Docs.js          # 설명 페이지
│   │   │   └── Examples.js      # 데모 페이지
│   │   │
│   │   ├── App.js               # 문서화 웹사이트의 진입점
│   │   └── index.js             # ReactDOM 렌더링
│   │
│   └── package.json             # 문서화 웹사이트의 별도 의존성
│
├── /src                        # 라이브러리 소스
│   ├── /components
│   │   ├── /react
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── /vanilla
│   │   │   ├── Button.js
│   │   │   ├── Input.js
│   │   │   └── index.js
│   │   │
│   │   └── index.js             # React & Vanilla 공통 모음
│   │
│   ├── /styles
│   │   ├── global.css
│   │   └── theme.js
│   │
│   └── index.js
│
├── /examples                   # 데모 코드
│   ├── react/                  # React 데모 코드
│   │   ├── react-button-demo.js
│   │   ├── react-input-demo.js
│   │   └── index.js
│   │
│   ├── vanilla/                # Vanilla JS 데모 코드
│   │   ├── vanilla-button-demo.js
│   │   ├── vanilla-input-demo.js
│   │   └── index.html
│
├── package.json
├── rollup.config.js
├── tsconfig.json
├── README.md                   # GitHub 문서
└── .gitignore

</details>
