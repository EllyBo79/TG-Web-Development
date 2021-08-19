// import React from "react";
import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import getFirebase from "./Fire";
// import Basket from "./Basket";
// import data from "./data";


const Pay = () => {
    const [currentUser, setCurrentUser] = useState(null);
    // const { products } = data;

    // const [cartItems, setCartItems] = useState([]);
    // const onAdd = (product) => {
    //   const exist = cartItems.find((x) => x.id === product.id);
    //   if (exist) {
    //     setCartItems(
    //       cartItems.map((x) =>
    //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
    //       )
    //     );
    //   } else {
    //     setCartItems([...cartItems, { ...product, qty: 1 }]);
    //   }
    // };
    // const onRemove = ( product ) => {
    //     const exist = cartItems.find((x) => x.id === product.id);
    //     if (exist.qty === 1) {
    //         setCartItems(cartItems.filter((x) => x.id !== product.id));
    //     } else {
    //         cartItems.map((x) =>
    //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
    //       )
    //     }
    // };

    useEffect(() => {
      const firebase = getFirebase();
  
      if (firebase) {
        firebase.auth().onAuthStateChanged((authUser) => {
          if (authUser) {
            setCurrentUser(authUser.email);
          } else {
            setCurrentUser(null);
          }
        });
      }
    }, []);
     
    return (
        <div>
            {/* <Basket cartItems={cartItems}  onAdd={onAdd} onRemove={onRemove} /> */}
            <h2>Dit is Pay component</h2>
            {currentUser
                ? `The current logged in user is: ${currentUser}.`
                : "No user is currently logged in."}
            <SignUp />  
            <SignIn />
            <SignOut />
        </div>
    )
}

export default Pay
