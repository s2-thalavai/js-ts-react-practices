import {lazy} from 'react';
import ProtectedRoute from './ProtectedRoute';

/* Lazy imports */
const Home = lazy (() => import ('../pages/Home'));
const About = lazy (() => import ('../pages/About'));
const Login = lazy (() => import ('../pages/Login'));
const Dashboard = lazy (() => import ('../pages/Dashboard'));
const Overview = lazy (() => import ('../pages/dashboard/Overview'));
const Users = lazy (() => import ('../pages/dashboard/Users'));
const Settings = lazy (() => import ('../pages/dashboard/Settings'));
const NotFound = lazy (() => import ('../pages/NotFound'));

export const routes = ({isAuth}) => [
  {
    path: '/',
    element: <Home />,
    preload: () => import ('../pages/Home'),
  },
  {
    path: '/about',
    element: <About />,
    preload: () => import ('../pages/About'),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute isAuth={isAuth}>
        <Dashboard />
      </ProtectedRoute>
    ),
    preload: () => import ('../pages/Dashboard'),
    roles: ['admin', 'user'],
    children: [
      {
        index: true,
        element: <Overview />,
        preload: () => import ('../pages/dashboard/Overview'),
      },
      {
        path: 'users',
        element: <Users />,
        roles: ['admin'],
        preload: () => import ('../pages/dashboard/Users'),
      },
      {
        path: 'settings',
        element: <Settings />,
        preload: () => import ('../pages/dashboard/Settings'),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];