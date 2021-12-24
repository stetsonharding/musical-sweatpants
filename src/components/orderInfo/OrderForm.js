import React from "react";

import "../../css/OrderForm.css";

export default function OrderForm() {
  return (
    <div>
      <h1>Shipping Information</h1>
      <form id="order-form-checkout">
        <div className="order-form-name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="order-form-address">
          <input type="text" placeholder="Adress" />
          <br />
          <input type="text" placeholder="Apartment, suite, etc" />
          <br />
          <input type="text" placeholder="City" />

          <div className="order-form-state">
            {/* <label for="country">Country</label> */}
            {/* <br /> */}
            <select name="country" id="county" form="order-form-checkout">
              <option value="volvo">United States</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            {/* <label for="state">State</label> */}
            <select name="state" id="state" form="order-form-checkout">
              <option value="volvo">WA</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <input type="text" placeholder="Zip Code" />
          </div>
        </div>
        <button>Continue to Billing</button>
      </form>
    </div>
  );
}
