import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './components/Error';
import Portfolio from './components/Portfolio';
import Color from './components/color/Home'
import Scheme from './components/color/schemes/Color'
import * as te from 'tw-elements';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/color-wheel",
        element: <Color />,
        children: [
          {
            path: '/color-wheel/:id',
            element: <Scheme />
          }
        ]
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

