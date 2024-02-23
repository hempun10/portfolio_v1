import { techStack } from "@/types";
import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

interface TechStackProps {
  data?: techStack[];
  isLink?: boolean;
  previewLink?: string;
  codeLink?: string;
  displayTwoLinks?: boolean;
}

const FlexContainer = ({
  data,
  isLink = false,
  previewLink = "#",
  codeLink = "#",
  displayTwoLinks = false,
}: TechStackProps) => {
  return (
    <div className="my-5 mx-auto flex gap-5">
      {isLink ? (
        <>
          <Link
            href={previewLink}
            target="_blank"
            className=" bg-whiteSmoke p-3 rounded-lg cursor-pointer"
          >
            <p className="flex items-center gap-3 text-lg">
              Project Preview <BsBoxArrowUpRight />
            </p>
          </Link>
          {displayTwoLinks ? (
            <Link
              href={codeLink}
              target="_blank"
              className=" bg-whiteSmoke p-3 rounded-lg cursor-pointer"
            >
              <p className="flex items-center gap-3 text-lg">
                Dashboard <BsBoxArrowUpRight />
              </p>
            </Link>
          ) : (
            <Link
              href={codeLink}
              target="_blank"
              className=" bg-whiteSmoke p-3 rounded-lg cursor-pointer"
            >
              <p className="flex items-center gap-3 text-lg">
                Code <BsGithub />
              </p>
            </Link>
          )}
        </>
      ) : (
        <div className=" flex  gap-3 items-center text-xl flex-wrap justify-center">
          <h3 className=" font-semibold text-[0.95rem] sm:text-lg">
            Tech Stack |
          </h3>
          {data?.map((techStack) => (
            <div
              className="bg-whiteSmoke py-1 px-4 rounded cursor-pointer  flex  items-center gap-3  flex-wrap"
              key={techStack.tech}
            >
              <span className=" text-lg hidden sm:block">{techStack.tech}</span>
              <span className=" text-2xl"> {techStack.icon}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlexContainer;
