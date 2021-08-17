import React from "react";

import getFirebase from "./Fire";
import useInput from "./UseInput";

const SignUp = () => {
  const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");

  const signUp = async (event) => {
    event.preventDefault();

    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        console.log("user", user);
        alert(`Welcome ${email.value}!`);
      }
    } catch (error) {
      console.log("error", error);
      alert(error.message);
    }
  };

  return (
     
    <form onSubmit={signUp}>
      <p>Sign up</p>
      <input placeholder="Email" {...email} />
      <input placeholder="Password" type="password" {...password} />
      <button type="submit">Sign up</button>
    </form>
   
  );
};

export default SignUp;






