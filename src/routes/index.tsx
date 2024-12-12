import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "../components/templates/MainTemplate";
import MainPage from "../components/pages/MainPage";
import UserPage from "../components/pages/UserPage";
import RepoPage from "../components/pages/RepoPage";


export const rawRoutes = [
  {
    path: '/',
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/users/:id',
        element: <UserPage />,
      }
      ,
      {
        path: '/repos/:id',
        element: <RepoPage />,
      }
    ],
  },
];

export const routes = createBrowserRouter(rawRoutes);