"use client";

import React, { useState } from "react";
import { AlignRight, AlignLeft } from "lucide-react";
import { MainLinks } from "./NavLink";
import { routes } from "@/types";

interface NavActionProps {
  data: routes[];
}

const NavActions = ({ data }: NavActionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" relative">
      <div className=" lg:hidden cursor-pointer">
        {isOpen ? (
          <AlignLeft
            size={25}
            onClick={handleOpen}
            className=" hover:text-blue-800 transition-all"
          />
        ) : (
          <AlignRight
            size={25}
            onClick={handleOpen}
            className=" hover:text-blue-800 transition-all"
          />
        )}
      </div>
      {isOpen && (
        <div className="h-[250px] w-[200px] absolute right-[4px] top-7 rounded-xl bg-white shadow-md">
          <MainLinks
            routes={data}
            className={"flex-col flex p-6 gap-5 text-2xl"}
          />
        </div>
      )}
    </div>
  );
};

export default NavActions;
