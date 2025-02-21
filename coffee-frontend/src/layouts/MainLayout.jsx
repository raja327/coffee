import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
