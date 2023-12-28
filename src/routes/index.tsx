import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { lazy } from "react";

const Homepage = lazy(() => import("@/pages/Homepage"));
const Women = lazy(() => import("@/pages/Women"));
const Men = lazy(() => import("@/pages/Men"));
const Collection = lazy(() => import("@/pages/Collection"));
const Outlet = lazy(() => import("@/pages/Outlet"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "women",
        element: <Women />,
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
      {
        path: "outlet",
        element: <Outlet />,
      },
    ],
  },
]);
