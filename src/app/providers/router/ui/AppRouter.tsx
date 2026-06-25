import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../../layout/Layout";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routeConfig,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
