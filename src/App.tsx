import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import routeOne from "./products/index";
import routeTwo from "./details/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <p>Nesting Routes</p>,
      },
      routeOne,
      routeTwo,
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
