import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.less";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { useState } from "react";
import Layout from "./pages/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPageLazy /> },
      { path: "/about", element: <AboutPageLazy /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
