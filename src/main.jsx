import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './HomePAge';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
