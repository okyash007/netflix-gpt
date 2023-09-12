import React, { useState } from "react";

const Header = () => {
  const [signIn, setsignIn] = useState(true);

  const togglesignIn = () => {
    setsignIn(!signIn);
  };

  return (
    <>
      <div className="w-full h-96 absolute z-10 bg-gradient-to-b from-black">
        <img
          className="w-48 absolute z-20 m-3"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <form className="flex flex-col p-14 bg-black absolute z-40 m-auto top-0 bottom-0 right-0 left-0 h-3/4 w-96 text-white rounded bg-opacity-80">
        <h1 className="font-sans font-semibold text-4xl my-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="Full name"
            className="p-3 my-2 text-sm bg-gray-700 rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-3 my-2 text-sm bg-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 text-sm bg-gray-700 rounded"
        />
        <button className="bg-red-600 p-3 my-4 text-lg rounded">
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="text-xs font-semibold text-gray-400 py-6 cu">
          {signIn ? "New to Netflix?" : "Alredy a user?"}{" "}
          <p
            className="text-white inline-block cursor-pointer hover:underline"
            onClick={togglesignIn}
          >
            {signIn ? "Sign Up Now" : "Sign in"}
          </p>{" "}
        </div>
      </form>
    </>
  );
};

export default Header;
