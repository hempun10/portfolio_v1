import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className=" border-b shadow-md top-0 sticky z-50  bg-white">
      <div className=" px-9 py-5 text-2xl font-extrabold flex justify-between ">
        <Link href={"/"}>Hem.dev</Link>
        <NavLink />
      </div>
    </div>
  );
};

export default Navbar;
