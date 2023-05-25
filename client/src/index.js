import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './components/Error';
import Portfolio from './components/Portfolio';
import Color from './components/color/Home'
import Scheme from './components/color/schemes/Color'
import * as te from 'tw-elements';
import Create from './components/mongoTest/create';
import Dash from './components/dashboard/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Edit from './components/mongoTest/edit';
import BlogReview from './components/blog/Review'
import Posts from './components/blog/Posts';
import Login from './components/login/Login';

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "color-wheel",
        element: <Color />,
        children: [
          {
            path: 'color-wheel/:id',
            element: <Scheme />
          }
        ]
      },
      {
        path: "dashboard",
        element: <Dash />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "review",
        element: <BlogReview />,
        children: [
          {
            path: 'review/:slug',
            element: <Posts />
          }
        ]
      },
      {
        path: "login",
        element: <Login />
      }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

