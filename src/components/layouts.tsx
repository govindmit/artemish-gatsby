import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
