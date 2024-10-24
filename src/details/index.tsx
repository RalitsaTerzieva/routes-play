import { RouteObject } from "react-router-dom";
import Redirect from "../Redirect";
import First from "./First";
import Second from "./Second";
import DetailPage from './DetailPage';

const routes: RouteObject = {
  path: "/details",
  children: [
    {
      index: true,
      element: <Redirect path="/details/1" />,
    },
    {
      path: "1",
      element: <First />,
    },
    {
      path: "2",
      element: <Second />,
    },
    {
      path: ":id",
      element: <DetailPage />,
    },
  ],
};

export default routes;