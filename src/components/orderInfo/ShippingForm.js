import React from "react";
//Context
import { useOrderFormContext } from "../../providers/OrderFormProvider";
//Components
import FormInput from "./FormInput";
//css
import "../../css/FormInput.css";

import { useNavigate } from "react-router-dom";

function ShippingForm({ setIsFormShown }) {
  const { shippingData, setShippingData } = useOrderFormContext();

  const history = useNavigate();
  return (
    <>
      <div className="form-container">
        <h2 className="title-bold" style={{ textAlign: "center" }}>
          Shipping Information
        </h2>
        <FormInput
          formData={shippingData}
          inputData={["firstname", "lastname"]}
          setInputData={setShippingData}
          placeholder={["First Name", "Last Name"]}
        />
        <FormInput
          formData={shippingData}
          inputData={["address"]}
          setInputData={setShippingData}
          placeholder={["Address"]}
        />
        <FormInput
          formData={shippingData}
          inputData={["subaddress"]}
          setInputData={setShippingData}
          placeholder={["Sub Address"]}
        />
        <FormInput
          formData={shippingData}
          inputData={["city"]}
          setInputData={setShippingData}
          placeholder={["City"]}
        />
        <FormInput
          formData={shippingData}
          inputData={["county", "state", "zip"]}
          setInputData={setShippingData}
          placeholder={["Country", "State", "Zip"]}
        />
        {/* Conditionally render billing form upon click*/}
        <button
          className="action-btn"
          onClick={() => history("/orderComplete")}
        >
          Place Order
        </button>
      </div>
    </>
  );
}
export default ShippingForm;
