import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import "./CheckOut.css"

const CheckOut = () => {
    const {cartContents}=useContext(CartContext)
  return (
    <div className='checkout-main-div'>
        <div >
            {
                cartContents.map(item=>
                    (
                        <div  className="checkout-item-div"key={item._id}>
                            <img  className='checkout-item-img' src={item.imageUrl} alt={item.title} />
                            <p className='checkout-item-title'>{item.title}  <span> x {item.qty}</span></p>
                            <p className='checkout-item-price'>price: {(item.price)*item.qty}</p>
                        </div>
                    )
                    )
            }

        </div>
        <div className='total-price-div'>
            <p>
                Total Price:
            {
                cartContents.reduce(
                    (sum,cur)=>sum+cur.qty*cur.price,0
                )
            }
            </p>
           
        </div>
       
    </div>
  )
}

export default CheckOut 