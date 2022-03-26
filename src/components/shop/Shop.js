import React, { useEffect, useState } from "react";
import './shop.css'
import fakeData from "../../utilities/fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Button from "../Button/Button";

const Shop=()=>{
    const [products,setProducts]=useState([]);
    const [cartItems,setCartItems]=useState([]);
    
    useEffect(()=>{
        setProducts(fakeData);
    },[])

    function handleCartBtn(Product){
            let newCartArray =[...cartItems,Product];
            setCartItems(newCartArray);
    }
    
    const handleChooseOne=()=>{
        let cartLength=cartItems.length;
        let targetNum=Math.floor(Math.random()*cartLength);
        let selectedItem=cartItems[targetNum];
        let newArr=[selectedItem];
        setCartItems(newArr);
    }

    const handleRemoveBtn=()=>{
        setCartItems([]);
    }

    return(
        <section>
            <div className="shop-contianer">
                <div className="products-container">
                    {
                        products.map(product=>{
                            return(
                                <Product key={product.id} product={product} handleCartBtn={handleCartBtn}/>
                            )
                        })
                    }
                </div>
                <div className="cart-container">
                    <h3>Selected Items</h3>
                    <div className="cart-item">
                    {
                        cartItems.map(cart=>{
                            return <Cart key={cart.id} cart={cart}/>
                        })
                    }
                    </div>
                    <div className="btn-container">
                        <Button btnName="choose one" btnHandler={handleChooseOne}/>
                        <Button btnName="remove all" btnHandler={handleRemoveBtn}/>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Shop;