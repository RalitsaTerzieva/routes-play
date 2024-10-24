import { Outlet, RouteObject } from "react-router-dom";
import Redirect from "../Redirect";
import First from "./First";
import Second from "./Second";

const routes: RouteObject = {
  path: "/products",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <Redirect path="/products/1" />,
    },
    {
      path: "1",
      element: <First />,
    },
    {
      path: "2",
      element: <Second />,
    },
  ],
};

export default routes;