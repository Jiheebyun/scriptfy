import React, {
  createContext,
  useContext,
  useState,
  Suspense,
  ReactNode,
} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routeConfig from './routes/routeConfig';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { RouteObject } from 'react-router-dom';

import './App.css';
import Overlay from './components/overlayPanel/overlayPanel';

// ---------------------
// 1) Context 생성
// ---------------------
interface OverlayContextValue {
  openOverlay: () => void;
  closeOverlay: () => void;
}

// 기본값은 빈 함수로 대체
const OverlayContext = createContext<OverlayContextValue>({
  openOverlay: () => {},
  closeOverlay: () => {},
});

// 커스텀 훅 (선택사항): 손쉽게 useContext
export function useOverlay() {
  return useContext(OverlayContext);
}

// ---------------------
// 2) 라우트 렌더링 함수 (원본과 동일)
// ---------------------
const renderRoutes = (routes: RouteObject[]): JSX.Element[] =>
  routes.map((route, index) => {
    if (route.children && route.children.length > 0) {
      return (
        <Route key={index} path={route.path} element={route.element}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
    return <Route key={index} path={route.path} element={route.element} />;
  });

// ---------------------
// 3) App 컴포넌트
// ---------------------
function App() {
  // 오버레이 열림 여부를 관리할 state
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    // OverlayContext.Provider로 감싸서 open/close 함수를 하위에 제공
    <OverlayContext.Provider value={{ openOverlay, closeOverlay }}>
      <div className="App">
        {/* isOpen === true 일 때만 Overlay 컴포넌트 렌더링 */}
        {isOpen && <Overlay onClose={closeOverlay} />}

        <Router>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>{renderRoutes(routeConfig)}</Routes>
            </Suspense>
          </ErrorBoundary>
        </Router>
      </div>
    </OverlayContext.Provider>
  );
}

export default App;
