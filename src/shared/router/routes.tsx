// src/shared/router/routes.tsx
import React, { lazy } from 'react';

const AppUno = lazy(() => import('uno/App'));
const AppLogin = lazy(() => import('login/App'));

export interface Route {
  path: string;
  component: React.ComponentType;
}

export const routes: Route[] = [
  {
    path: '/uno',
    component: AppUno,
  },
  {
    path: '/login',
    component: AppLogin,
  },
  {
    path: '/',
    component: () => <div>Hola! Buenos tardes!</div>,
  },
];
