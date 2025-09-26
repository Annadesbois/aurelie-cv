import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      {isPageLoading ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
};
export default HomeLayout;
