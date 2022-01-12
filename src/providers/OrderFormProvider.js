import React, {useContext, createContext, useState } from 'react'
import {addressData} from "../helpers/data"

export const OrderFormContext = createContext(null)
export const useOrderFormContext = () => useContext(OrderFormContext)

export const OrderFormProvider = ({children}) => {

const [shippingData, setShippingData] = useState(addressData)
//billing
//payment

return(
    <OrderFormContext.Provider
    value={
        shippingData,
        setShippingData
    }
    >
   {children}
    </OrderFormContext.Provider>
)

}

export default OrderFormProvider