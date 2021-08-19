// import React from "react"
import React, { useState} from "react";
import Main from "./Main";
import data from "./data";
import Basket from "./Basket";



export const Clothes = () => {
    const { products } = data;

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
    
    const onRemove = ( product ) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        } 
    };

    return (
        <div>
            <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            <Main  products={products} onAdd={onAdd} ></Main>
        </div>
    )
};
// console.log(data)
export default Clothes



    


