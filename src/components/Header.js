import React from "react";


const Header = () => {

  return (
    <>
      <div className="w-full h-96 max-sm:h-48 absolute z-10 bg-gradient-to-b from-black max-sm:from-red-950">
        <img
          className="w-48 absolute z-0 m-3 max-sm:m-4 max-sm:w-28"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Header;
