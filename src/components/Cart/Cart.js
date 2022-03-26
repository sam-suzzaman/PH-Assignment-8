import React from "react";
import './cart.css';

const Cart=(props)=>{
    const{name,image}=props.cart;
    return(
        <div className="cart">
            <div className="img-container">
                <img src={image} alt="" />
            </div>
            <h3>{name}</h3>
        </div>
    )
}


export default Cart;