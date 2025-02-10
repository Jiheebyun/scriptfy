// src/routes/routeConfig.tsx
import React, { lazy } from 'react';
import LayoutContent from '../components/layoutContent/layoutContent.js';
import LayoutDoc from '../components/layoutDoc/layoutDoc.js';
import DocContent from '../components/docContent/docContent.js';
import DocContentIntro from '../components/docContentIntro/docContentIntro.js';

// 페이지 컴포넌트 레이지 로딩
const MainPage = lazy(() => import('../pages/mainPage/mainPage.js'));
const MainContent = lazy(() => import('../components/mainContent/mainContent.js'));

interface RouteType {
  path: string;
  element: React.ReactNode;
  children?: RouteType[];
}

const routeConfig: RouteType[] = [
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/',
        element: <MainContent />,
      },
      // 공통 레이아웃: path가 ''(빈 경로)
      // URL로는 /installation, /overview, /advanced 가 각각 최상위가 됨
      {
        path: '',
        element: <LayoutDoc />,
        children: [
          {
            path: 'installation',
            element: <DocContent />,
          },
          {
            path: 'autocomplete',
            element: <DocContentIntro />,
          },
          {//개발환경을 제공 
            path: 'dev',
            element: "",
          },
          // {
          //   // /advanced
          //   path: 'advanced',
          //   element: <AdvancedPage />,
          // },
        ],
      },
    ]
  },
  // {
  //   path: '*', // 모든 경로에 일치하지 않는 경우 NotFound 페이지 표시
  //   element: <NotFound />,
  // },
];

export default routeConfig;