import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AddressContext=createContext();




export const AddressContextProvider=({children})=>{
    const {setLoggedInUser}=useContext(AuthContext)
    const [selectedAddress, setSelectedAddress]=useState(null)

    const addAddress=(newAddress)=>{
    setLoggedInUser((user) => ({
        ...user,
        address: [...user.address, newAddress],
      }))
    }
    const selectAddress=(address)=>{
        setSelectedAddress(address)
    }


    return(
        <AddressContext.Provider value={{selectedAddress,addAddress,selectAddress}}>
            {children}
        </AddressContext.Provider>
    )
}