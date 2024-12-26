// src/routes/routeConfig.tsx
import React, { lazy } from 'react';
import LayoutContent from '../components/layoutContent/layoutContent.tsx';
import LayoutDoc from '../components/layoutDoc/layoutDoc.tsx';
import DocContent from '../components/docContent/docContent.tsx';

// 페이지 컴포넌트 레이지 로딩
const MainPage = lazy(() => import('../pages/mainPage/mainPage.tsx'));
const MainContent = lazy(() => import('../components/mainContent/mainContent.tsx'));

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
            // /installation
            path: 'installation',
            element: <DocContent />,
          },
          // {
          //   path: 'installation',
          //   element: <OverviewPage />,
          // },
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