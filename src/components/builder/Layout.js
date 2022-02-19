import React from "react";

import "../../css/Layout.css";

import ImageContainer from "./ImageContainer";
import MainContent from "./MainContent";
import CartBadge from "./CartBadge";

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
