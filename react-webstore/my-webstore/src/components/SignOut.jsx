import React from "react";
import getFirebase from "./Fire";

const SignOut = () => { 
  const firebaseInstance = getFirebase();

  const signOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
        alert("Successfully signed out!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <title>Sign out</title>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default SignOut;




