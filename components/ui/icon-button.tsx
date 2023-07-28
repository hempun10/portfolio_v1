import { cn } from "@/libs/utils";
import Link from "next/link";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
  href: string;
}

const IconButton = ({ onClick, icon, className, href }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        " rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      <Link href={href} target="_blank" className=" text-2xl">
        {icon}
      </Link>
    </button>
  );
};

export default IconButton;
