import {
  createHashRouter,
} from "react-router-dom";

import DataHub from "../DataHub";
import ErrorPage from "../Error/ErrorPage";

import Home from "../Home/Home";


export const router = createHashRouter([
  {
    path: "/",
    element: <DataHub />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);
