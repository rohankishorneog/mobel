import CheckOut from '../../Components/CheckOut/CheckOut'
import Address from '../../Components/Address/Address'
import { useState } from 'react'


const CheckOutPage = () => {
  const [confirmCheck,setConfirmCheck]=useState(false)

  const handleConfirm=()=>{
    setConfirmCheck(true)
  }
  return (
    <div>
     {confirmCheck ===false?
      <div >
      <div>
        <CheckOut/>
        <hr/>
        <Address/>    
       </div>
          <button onClick={handleConfirm}>Confirm Checkout ok</button>
      </div>:
      <div>
        Order confirmed
      </div>
      }
       
    </div>
   
)}

export default CheckOutPage