// importato Footer
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function defaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />;
    </>
  );
}

export default defaultLayout;
