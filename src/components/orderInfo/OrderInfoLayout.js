import React from "react";

import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";

//components
import CartBadge from "../builder/CartBadge";
import OrderDetails from "./OrderDetails";
import OrderForm from "./OrderForm";

export default function OrderInfoLayout() {
  const [currentAlbum] = useCurrentAlbumContext();

  return (
    <div
      className="order-info-layout-container"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CartBadge />
      <div
        className="order-details-container"
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <OrderDetails />
      </div>
      <div
        className="order-checkoutform-container"
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OrderForm />
      </div>
    </div>
  );
}
