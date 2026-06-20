import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import useTheme from "../../theme/useTheme";
import { classNames } from "../../helpers/classNames/classNames";

const Layout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
