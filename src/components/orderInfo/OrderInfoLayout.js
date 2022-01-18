import React from "react";

import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";
import Breadcrumb from "./Breadcrumb";
import routes from "./orderFormRouteConfig";

import ShippingForm from "./ShippingForm";

//components
import CartBadge from "../builder/CartBadge";
import OrderDetails from "./OrderDetails";

import { Route, Routes} from "react-router-dom";


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
         
      
        {/* Breadcrumbs*/}
       {console.log(routes)}
        <Routes>
          {routes.map(({path, Component}, key) => (
            <Route
              exact
              path={path}
              key={key}
              return={props => {
                return(
                  <div className='forms-wrapper'>
                    <Breadcrumb {...props} routes={routes}/>
                    <Component {...props}/>
                  </div>
                )
              }}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}
