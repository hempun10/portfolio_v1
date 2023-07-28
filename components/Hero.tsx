import React from "react";
import Heading from "./ui/Heading";
import Paragraph from "./ui/paragraph";
import FindMe from "./Find-Me";
import { Github, Linkedin, Codepen } from "lucide-react";

const Hero = () => {
  const shareLinks = [
    {
      href: "https://github.com/hempun10",
      icon: <Github />,
    },
    {
      href: "https://www.linkedin.com/in/hem-bahadur-pun-0621aa21a/",
      icon: <Linkedin />,
    },
    {
      href: "https://codepen.io/Hem-10",
      icon: <Codepen />,
    },
  ];
  return (
    <div
      className=" flex items-center flex-col mt-[4rem] gap-[10rem] max-sm:gap-[5rem] p-2"
      id="home"
    >
      <div className=" flex flex-col items-center gap-4 max-sm:gap-[3rem]">
        <Heading text="Front-End React Developer🧑‍💻" className={""} />
        <Paragraph
          text="Hey It's me Hem Bahadur Pun! A passionate Front-end React Developer based in Pokhara, Nepal📍."
          className={"max-sm:w-[90%] max-sm:text-[1rem]"}
        />
      </div>
      <FindMe text="Find me on |" data={shareLinks} />
    </div>
  );
};

export default Hero;
