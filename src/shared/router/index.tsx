import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  </Suspense>
);

export default Router;
