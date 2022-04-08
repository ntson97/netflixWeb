import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const Layout = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
