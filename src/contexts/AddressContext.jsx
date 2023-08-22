import { createContext, useState } from "react";

export const AddressContext=createContext();




export const AddressContextProvider=({children})=>{
    const [address,setAddress]=useState([])
    const [selectedAddress, setSelectedAddress]=useState(null)

    const addAddress=(newAddress)=>{
    setAddress((curr) => ([
        ...curr,
        newAddress
    ]))
    }
    const selectAddress=(address)=>{
        setSelectedAddress(address)
    }


    return(
        <AddressContext.Provider value={{address,selectedAddress,addAddress,selectAddress}}>
            {children}
        </AddressContext.Provider>
    )
}