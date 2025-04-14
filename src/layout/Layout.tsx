import type { JSX } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface Children {
  children: JSX.Element;
}

// flex flex-col min-h-screen w-full
// flex flex-col items-center w-full
// 
const Layout = ({ children }: Children) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex flex-col items-center justify-center text-center w-full flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
