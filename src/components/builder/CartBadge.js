import React, { useState } from "react";

import "../../css/CartBadge.css";

function CartBadge() {
  const [isQuickCartShown, setIsQuickCartShown] = useState(false);

  const showQuickCart = () => {
    setIsQuickCartShown(!isQuickCartShown);
  };

  return (
    <>
      <div
        onClick={showQuickCart}
        className="cart-badge"
        style={{
          border: isQuickCartShown ? "1px solid rgb(7, 188, 233)" : null,
        }}
      ></div>
      ;{isQuickCartShown && <QuickCartView />}
    </>
  );
}

function QuickCartView() {
  return <div className="quick-cart-container"></div>;
}

export default CartBadge;
