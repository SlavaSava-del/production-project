import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "../providers/ThemeProvider";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <Suspense fallback={<div>Loading...</div>}>
            <div className="page-wrapper">
              <Outlet />
            </div>
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
};

export default Layout;
