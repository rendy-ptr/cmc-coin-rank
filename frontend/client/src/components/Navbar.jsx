import React from "react";
import ThemeChanger from "./ThemeChanger";

function Navbar() {
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content z-50 relative">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">CMC COIN RANK</a>
        </div>
        <div className="flex-none mr-40">
          <ThemeChanger />
        </div>
      </div>
    </>
  );
}

export default Navbar;
