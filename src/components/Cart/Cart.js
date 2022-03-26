import React from "react";
import { AiOutlineDelete } from 'react-icons/ai';
import './cart.css';

const Cart=(props)=>{
    const{name,image}=props.cart;
    return(
        <div className="cart">
            <div className="left">
                <div className="img-container">
                    <img src={image} alt="" />
                </div>
                <h3>{name}</h3>
            </div>
            <button><AiOutlineDelete/></button>
        </div>
    )
}


export default Cart;