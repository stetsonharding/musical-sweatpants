import React from 'react';
import { useOrderFormContext } from "../../providers/OrderFormProvider";
import { useHistory } from "react-router-dom";
import FormInput from "./FormInput"

function ShippingForm() {
    const {shippingData, setShippingData} = useOrderFormContext();
    // const history = useHistory();

    console.log(shippingData)
    return (
        <div className="shipping-form-container">
            <h1 className="title-bold">Shipping Information</h1>
            
            <FormInput
            formData={shippingData}
            inputData={['firstname', 'lastname']}
            setInputData={setShippingData}
            placeholder={['First Name', 'Last Name']}
            />

            <FormInput
            formData={shippingData}
            inputData={['address']}
            setinputData={setShippingData}
            placeholder={['Address']}
            />

            <FormInput
            formData={shippingData}
            inputData={['subaddress']}
            setinputData={setShippingData}
            placeholder={['Sub Address']}
            />

            <FormInput
            formData={shippingData}
            inputData={['city']}
            setinputData={setShippingData}
            placeholder={['City']}
            />

            <FormInput
            formData={shippingData}
            inputData={['county', 'state', 'zip']}
            setinputData={setShippingData}
            placeholder={['Country', 'State', 'Zip']}
            />

            <button>Continue to Billing</button>
        </div>
    )
}

export default ShippingForm
