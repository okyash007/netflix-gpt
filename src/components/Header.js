import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);

  const clickSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch( addUser({ uid:uid, email:email, displayName:displayName  }) )
        navigate("/browse")

      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
  }, []);

  return (
    <>
      <div className="w-full h-96 max-sm:h-48 absolute z-10 bg-gradient-to-b from-black max-sm:from-red-950">
        <div className="flex flex-row justify-between">
          <img
            className="w-48 z-0 m-3 max-sm:m-4 max-sm:w-28"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
          {user && (
            <button
              className="text-white h-12 hover:underline"
              onClick={clickSignOut}
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
