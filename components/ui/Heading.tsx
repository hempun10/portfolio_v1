import { cn } from "@/libs/utils";
import React from "react";

interface HeadingProps {
  text: string;
  className?: any;
}
const Heading = ({ text, className }: HeadingProps) => {
  return (
    <h1
      className={cn(
        " text-[#2d2e32]  text-[4rem] font-bold w-[80%] m-auto text-center max-sm:text-[2.5rem] max-sm:w-[90%]",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default Heading;
