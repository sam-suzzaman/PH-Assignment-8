import React from "react";
import './product.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Product=({product,handleCartBtn})=>{
    const {name,image,price}=product;
    return(
        <div className="product">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button onClick={()=>handleCartBtn(product)}>add to cart <span><AiOutlineShoppingCart/></span></button>
        </div>
    )
}

export default Product;