// import React from "react";
import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import getFirebase from "./Fire";


const Pay = () => {
    const [currentUser, setCurrentUser] = useState(null);

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
