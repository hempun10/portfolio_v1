import React from "react";
import Container from "./ui/Container";
import Image from "next/image";
import Heading from "./ui/Heading";
import Paragraph from "./ui/paragraph";
import FindMe from "./Find-Me";
import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";

const About = () => {
  const techStackLink = [
    {
      icon: <BiLogoReact />,
      href: "#",
    },
    {
      icon: <BiLogoTailwindCss />,
      href: "#",
    },
    {
      icon: <BiLogoTypescript />,
      href: "#",
    },
    {
      icon: <BsFiletypeScss />,
      href: "#",
    },
    {
      icon: <SiNextdotjs />,
      href: "#",
    },
  ];
  return (
    <div className=" p-7 max-sm:p-2 " id="about">
      <Heading text="About Me 😎" className={"text-[2.7rem] text-textBlue"} />
      <Container
        className={"flex gap-[5rem] p-5 max-lg:flex-col max-lg:items-center"}
      >
        <div className="img_container w-[500px] h-[400px]  bg-black relative rounded-xl max-sm:w-[300px] max-sm:h-[300px]">
          <Image
            src={"/about.jpg"}
            fill
            alt="img"
            className=" object-cover rounded-xl"
          />
        </div>
        <div className="about_content flex lg:w-[50%] max-lg:w-[80%] max-sm:w-full flex-col gap-[2.5rem] p-2  ">
          <Paragraph
            text="An enthusiastic Front-end Developer with a strong focus on creating exceptional user experiences, proudly located in the beautiful city of Nepal, Pokhara 📍"
            className={
              " text-left  w-full text-lg  font-bold max-lg:text-center max-sm:text-xl "
            }
          />
          <Paragraph
            text="As a Junior Front-End Developer, I bring an impressive array of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. My focus is on crafting responsive websites that deliver seamless user experiences. With a penchant for clean and optimized code, I thrive on creating dynamic, engaging interfaces using cutting-edge tools and techniques. Collaboration is at the heart of my work, as I enjoy working with cross-functional teams to produce outstanding web applications."
            className={
              "text-left text-[15px] leading-[1.5] tracking-wider w-full text-textColor max-lg:text-center text-sm"
            }
          />
          <FindMe
            text="Tech Stack |"
            data={techStackLink}
            className={"justify-normal max-lg:justify-center"}
            classNameFromAbout={
              " text-left w-auto font-[500] max-sm:text-lg  max-sm:w-full max-sm:flex max-sm:flex-col "
            }
            classNameForbtn={"flex-row"}
          />
        </div>
      </Container>
    </div>
  );
};

export default About;
