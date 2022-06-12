import React , { useContext } from 'react'
import { CartContext } from '../context/CardContextProvidor'
import { shorten } from '../helpers/functions';
import trash from "../assets/icons/trash.png"
const Cart =(props)=> {
  const{dispatch} =useContext(CartContext);
  const {price,title,quantity,image}=props.data;

  return (
    <div>
      <img src={image} alt="" />
      <div>
        <h3>Title : {shorten(title)}</h3>
        <p>Price: {price} $</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Cart;