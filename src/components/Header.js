import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="navbar w-full h-48 max-sm:h-48 z-40">
        <div className="w-full h-48 max-sm:h-48 absolute z-10 bg-gradient-to-b from-black max-sm:bg-gradient-to-b max-sm:from-red-950 bg-local">
          <div className="flex flex-row justify-between">
            <img
              className="w-48 z-0 m-3 max-lg:w-36 max-sm:m-4 max-sm:w-28 "
              src={Logo}
              alt="logo"
            />

            {user && (
              <>
                <div className="flex">
                  
                  <div
                    onClick={clickSignOut}
                    className="text-gray-300 cursor-pointer font-semibold hover:underline p-8 shadow_any"
                  >
                    Sign out
                  </div>
                  <div className="mt-6 mr-5">
                    <button class="shadow__btn">
                      <div className="font-sans text-sm font-medium">
                        <img
                          src="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png"
                          alt=""
                          width={30}
                        />{" "}
                      </div>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
