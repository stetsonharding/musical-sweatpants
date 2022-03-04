import React from "react";
//components
import ImageContainer from "./ImageContainer";
import MainContent from "./MainContent";
import CartBadge from "./CartBadge";
//css
import "../../css/Layout.css";

//Basic layout structure of website.
//Used to make webpage responsive, and a place for organization.
const Layout = () => {
  return (
    <div className="root">
      <CartBadge />
      <ImageContainer />
      <div className="flex-order">
      <MainContent />
      </div>
    </div>
  );
};
export default Layout;
