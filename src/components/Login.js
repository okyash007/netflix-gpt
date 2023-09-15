import React, { useState, useRef } from "react";
import { validateUser } from "../utils/validation";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const Login = () => {
  const [signIn, setsignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const togglesignIn = () => {
    setsignIn(!signIn);
  };

  const clicked = () => {
    setloading(true);
    const message = validateUser(email.current.value, password.current.value);
    seterrorMessage(message);
    if (message) {
      setloading(false);
    }

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {

            const { uid, email, displayName, photoURL } = auth.currentUser
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            
          }).catch((error) => {
            
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
    if (signIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user)
          if (user.accessToken) {
            navigate("/browse");
          }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          if (errorCode === "auth/user-not-found") {
            seterrorMessage("You are not registered");
            togglesignIn();
          }
        });
    }
  };

  return (
    <div className="w-full h-screen max-sm:bg-black sm:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col p-14 max-sm:p-6 bg-black absolute z-50 m-auto top-0 bottom-0 right-0 left-0 h-3/4 w-96 text-white rounded bg-opacity-80 max-sm:w-full max-sm:h-full max-sm:z-0 max-sm:py-28"
      >
        <h1 className="font-sans font-semibold text-4xl my-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-3 my-2 text-sm bg-gray-700 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 my-2 text-sm bg-gray-700 rounded z-50"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 text-sm bg-gray-700 rounded"
        />
        <p className="text-xs font-semibold text-red-600">{errorMessage}</p>
          <div onClick={clicked} className="my-3">
        <AwesomeButton type="danger" className="w-full" >
          sign up
        </AwesomeButton>
        </div>
        <div className="text-xs font-semibold text-gray-400 py-6 ">
          {signIn ? "New to Netflix?" : "Alredy a user?"}{" "}
          <p
            className="text-white inline-block cursor-pointer hover:underline"
            onClick={togglesignIn}
          >
            {signIn ? "Sign Up Now" : "Sign in"}
          </p>{" "}
          {loading && <p>loading</p>}
        </div>
      </form>
      <Header />
    </div>
  );
};

export default Login;
