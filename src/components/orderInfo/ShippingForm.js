import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrderFormContext } from "../../providers/OrderFormProvider";
import FormInput from "./FormInput"

import "../../css/FormInput.css"

function ShippingForm({setShow}) {
    const {shippingData, setShippingData} = useOrderFormContext();
    const history = useNavigate();


    const handleClick = (e) => {
        // e.stopPropagation();
    setShow(1)

    }

    console.log(shippingData)
    return (
        <>
        <div className="form-container">
            <h2 className="title-bold" style={{textAlign: 'center'}}>Shipping Information</h2>
            
            <FormInput
            formData={shippingData}
            inputData={['firstname', 'lastname']}
            setInputData={setShippingData}
            placeholder={['First Name', 'Last Name']}
           
            />

            <FormInput
            formData={shippingData}
            inputData={['address']}
            setInputData={setShippingData}
            placeholder={['Address']}
            />

            <FormInput
            formData={shippingData}
            inputData={['subaddress']}
            setInputData={setShippingData}
            placeholder={['Sub Address']}
            />

            <FormInput
            formData={shippingData}
            inputData={['city']}
            setInputData={setShippingData}
            placeholder={['City']}
            />

            <FormInput
            formData={shippingData}
            inputData={['county', 'state', 'zip']}
            setInputData={setShippingData}
            placeholder={['Country', 'State', 'Zip']}
            />

            <button className="action-btn" onClick={() => handleClick()}>Continue to Billing</button>
        </div>
       
        </>
    )
}

export default ShippingForm
