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
│   │   │   └── index.ts          # React & Vanilla 공통 모음
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
├── /scripts                      # 빌드 및 배포 스크립트
│   ├── build-library.js
│   ├── build-demo.js
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
