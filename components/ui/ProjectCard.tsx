import Image from "next/image";
import React from "react";
import Paragraph from "./paragraph";
import FlexConatiner from "./Flex-Conatiner";
import { techStack } from "@/types";
import { BiLogoReact } from "react-icons/bi";
import Container from "./Container";
import { cn } from "@/libs/utils";

interface ProjectCardProps {
  imageUrl: string;
  heading: string;
  tag: techStack[];
  previewLink: string;
  codeLink: string;
  paragraph: string;
  className: string;
  displayTwoLinks?: boolean;
}

const ProjectCard = ({
  imageUrl,
  heading,
  paragraph,
  tag,
  previewLink,
  codeLink,
  className,
  displayTwoLinks = false,
}: ProjectCardProps) => {
  return (
    <Container
      className={
        "flex justify-between bg-white p-[1.5rem] rounded-xl flex-col lg:flex-row"
      }
    >
      <div
        className={cn(
          "group img_conatiner relative h-[15rem] sm:h-[30rem] w-full lg:w-[50%] overflow-hidden shadow-lg cursor-pointer rounded-xl order-1",
          className
        )}
      >
        <Image
          src={imageUrl}
          fill
          alt="ProjectImg"
          className=" object-cover object-top group-hover:object-bottom transition-all ease-in-out duration-1000"
        />
      </div>
      <div className="text_conatiner w-full lg:w-[50%]  m-auto order-1">
        <Paragraph
          text={heading}
          className={
            " my-4 mx-auto font-bold text-[1.5rem] sm:text-[2rem] uppercase"
          }
        />
        <Paragraph
          text={paragraph}
          className={
            " my-4 mx-auto text-textColor text-[0.75rem] sm:text-[1.05rem]"
          }
        />
        <div className=" flex flex-col items-center">
          <FlexConatiner data={tag} />
          <FlexConatiner
            isLink={true}
            displayTwoLinks={displayTwoLinks}
            previewLink={previewLink}
            codeLink={codeLink}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProjectCard;
