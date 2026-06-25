import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import type { RouteObject } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: RouteObject[] = [
  {
    index: true,
    element: <MainPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
];
