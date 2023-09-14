import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header2 = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const clickSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="w-full h-20 bg-gradient-to-b from-black absolute flex flex-row justify-between">
      <div>
        <img
          className="w-36 z-0 m-2 max-sm:m-4 max-sm:w-28"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      <button
        className="text-white h-12 hover:underline"
        onClick={clickSignOut}
      >
        Sign out
      </button>
    </div>
  );
};

export default Header2;
