import React from "react";
import Navbar from "./navbar/Navbar.js";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Navbar />
      {/* placeholder component */}
      <div style={{ minHeight: "85vh" }} className='mt-5 container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;