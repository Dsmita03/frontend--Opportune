import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer.jsx";

const Main = () => (
  <Fragment>
    <Header />
    <Outlet></Outlet>
    <Footer />
  </Fragment>
);

export default Main;
