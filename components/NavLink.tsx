"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavActions from "./NavActions";
import { routes } from "@/types";
import { cn } from "@/libs/utils";

interface MainLinksProps {
  routes: routes[];
  className?: any;
}

export const MainLinks = ({ routes, className }: MainLinksProps) => {
  return (
    <div className={cn(" flex  gap-4", className)}>
      {routes.map((route) => (
        <Link href={route.href} key={route.label} className={` text-black`}>
          {route.label}
        </Link>
      ))}
    </div>
  );
};

const NavLink = () => {
  const pathname = usePathname();
  const routes = [
    {
      href: "/#home",
      label: "Home",
      active: pathname === "/#home",
    },
    {
      href: "#about",
      label: "About",
      active: pathname === "/#about",
    },
    {
      href: "#project",
      label: "Project",
      active: pathname === "/#project",
    },
    {
      href: "#contact",
      label: "Contact",
      active: pathname === "/#contact",
    },
  ];

  return (
    <div className="nav-conatiner">
      <NavActions data={routes} />
      <div className="hidden lg:flex gap-4 text-lg font-medium">
        <MainLinks routes={routes} />
      </div>
    </div>
  );
};

export default NavLink;
