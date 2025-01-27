
import React, { useState, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routeConfig from './routes/routeConfig';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { RouteObject } from 'react-router-dom'; 

import './App.css'
import Overlay from './components/overlayPanel/overlayPanel';


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

function App() {
  return (
    <div className="App">
      {/* <Overlay/> */}
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {renderRoutes(routeConfig)}
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App
