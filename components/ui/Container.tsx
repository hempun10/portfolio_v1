import { cn } from "@/libs/utils";
import React from "react";

interface ConatinerProps {
  children: React.ReactNode;
  className?: any;
}
const Container = ({ children, className }: ConatinerProps) => {
  return <div className={cn(" mx-auto max-w-7xl", className)}>{children}</div>;
};

export default Container;
