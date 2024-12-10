// src/routes/routeConfig.tsx
import React, { lazy } from 'react';
import LayoutContent from '../components/layoutContent/layoutContent.tsx';

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
    ]
  },
  // {
  //   path: 'about',
  //   element: <About />,
  // },
  // {
  //   path: 'dashboard',
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       path: 'stats',
  //       element: <Stats />,
  //     },
  //     // 추가적인 대시보드 하위 라우트
  //   ],
  // },
  // {
  //   path: '*', // 모든 경로에 일치하지 않는 경우 NotFound 페이지 표시
  //   element: <NotFound />,
  // },
];

export default routeConfig;