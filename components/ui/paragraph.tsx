import { cn } from "@/libs/utils";
import React from "react";

interface paragraphProps {
  text: string;
  className?: any;
}
const Paragraph = ({ text, className }: paragraphProps) => {
  return (
    <p className={cn(" text-xl w-[70%] text-center", className)}>{text}</p>
  );
};

export default Paragraph;
