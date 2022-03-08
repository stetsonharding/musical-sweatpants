import React from 'react';
//Context
import { useOrderFormContext } from '../../providers/OrderFormProvider';
//Components
import FormInput from './FormInput';
//css
import "../../css/FormInput.css"

export default function BillingForm({setIsFormShown}) {

  const {
    setBillingData, 
    billingData, 
  } = useOrderFormContext();

  return(
<>
<div className="form-container">
<h2 className="title-bold" style={{textAlign: 'center'}}>Billing Information</h2>
<div className="checkbox">
{/* //CheckBox will go here */}
</div>
<FormInput
formData={billingData}
inputData={['firstname', 'lastname']}
setInputData={setBillingData}
placeholder={['First Name', 'Last Name']}
/>
<FormInput
formData={billingData}
inputData={['address']}
setInputData={setBillingData}
placeholder={['Address']}
/>
<FormInput
formData={billingData}
inputData={['subaddress']}
setInputData={setBillingData}
placeholder={['Sub Address']}
/>
<FormInput
formData={billingData}
inputData={['city']}
setInputData={setBillingData}
placeholder={['City']}
/>
<FormInput
formData={billingData}
inputData={['country']}
setInputData={setBillingData}
placeholder={['County']}
/>
<FormInput
formData={billingData}
inputData={['state']}
setInputData={setBillingData}
placeholder={['State']}
/>
<FormInput
formData={billingData}
inputData={['zip']}
setInputData={setBillingData}
placeholder={['Zip']}
/>
{/*btn Changes isFormShown to condionally render the next form. */}
<button  className="action-btn" onClick={() => setIsFormShown(2)}>Continue to Payment</button>
</div>
</>
  )
}
