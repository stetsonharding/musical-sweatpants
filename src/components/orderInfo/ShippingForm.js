import React from 'react';
import { useHistory } from 'react-router-dom';
import { useOrderFormContext } from "../../providers/OrderFormProvider";
import FormInput from "./FormInput"

function ShippingForm({setShow}) {
    const {shippingData, setShippingData} = useOrderFormContext();
    const history = useHistory();


    const handleClick = (e) => {
        // e.stopPropagation();
    setShow(false)

    }

    console.log(shippingData)
    return (
        <>
        <div className="shipping-form-container" style={{ width: '500px', textAlign: 'center'}}>
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

            <button onClick={() => handleClick()}>Continue to Billing</button>
        </div>
       
        </>
    )
}

export default ShippingForm
