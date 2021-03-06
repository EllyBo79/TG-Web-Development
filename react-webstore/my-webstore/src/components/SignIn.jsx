import React from "react";
import getFirebase from "./Fire";
import useInput from "./UseInput";

const SignIn = () => {
  const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");

  const signIn = async (event) => {
    event.preventDefault();

    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        console.log("user", user);
        alert("Welcome back!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form onSubmit={signIn}>
      <p>Sign in</p>
      <input placeholder="Email" {...email} />
      <input placeholder="Password" type="password" {...password} />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default SignIn;







