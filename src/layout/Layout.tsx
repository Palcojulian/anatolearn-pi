import type { JSX } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Breadcrumbs from "../components/BreadCrumbs";

interface Children {
  children: JSX.Element;
}

const Layout = ({ children }: Children) => {
  return (
    <div className="flex flex-col h-screen w-full ">
      <Header />
      <Breadcrumbs />
      <main className="flex flex-col items-center justify-center text-center w-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
