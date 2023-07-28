import React from "react";
import Paragraph from "./ui/paragraph";
import IconButton from "./ui/icon-button";
import { icons } from "react-icons";
import { cn } from "@/libs/utils";

interface FindMeLinkProps {
  icon: React.ReactElement;
  href: string;
}
interface FindMeProps {
  text: string;
  data: FindMeLinkProps[];
  className?: any;
  classNameFromAbout?: any;
  classNameForbtn?: any;
}
const FindMe = ({
  text,
  data,
  className,
  classNameFromAbout,
  classNameForbtn,
}: FindMeProps) => {
  return (
    <div className={cn(" flex justify-center items-center gap-4 ", className)}>
      <Paragraph text={text} className={(cn("w-full"), classNameFromAbout)} />
      {data.map((icon) => (
        <IconButton
          icon={icon.icon}
          href={icon.href}
          className={classNameForbtn}
        />
      ))}
    </div>
  );
};

export default FindMe;
