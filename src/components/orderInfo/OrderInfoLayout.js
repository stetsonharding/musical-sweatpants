import React from "react";

import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";

//components
import CartBadge from "../builder/CartBadge";
import OrderDetails from "./OrderDetails";

export default function OrderInfoLayout() {
  const [currentAlbum] = useCurrentAlbumContext();

  return (
    <div className="order-info-layout-container" style={{ width: "100%" }}>
      <CartBadge />
      <div
        className="order-details-container"
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          justifyContent: "flex-end",
          borderRight: "1.5px solid grey",
        }}
      >
        <OrderDetails />
      </div>
      <div className="order-checkoutform-container">
        {/* checkout form here */}
      </div>
    </div>
  );
}
