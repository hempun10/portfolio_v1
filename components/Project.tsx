import React from "react";
import Container from "./ui/Container";
import Heading from "./ui/Heading";
import Paragraph from "./ui/paragraph";
import ProjectCard from "./ui/ProjectCard";
import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";

const Project = () => {
  return (
    <div className={"bg-whiteSmoke"}>
      <Container>
        <div className="head_conatiner text-center p-5 " id="project">
          <Heading text="Projects" className={"text-[2.7rem] text-textBlue"} />
          <Paragraph
            text="Each project is a one-of-a-kind creation 🧩."
            className={"m-auto"}
          />
        </div>
        <div className=" p-[2rem] flex flex-col gap-5">
          <ProjectCard
            heading="SASS Webiste UI"
            paragraph=" Manage is an innovative Sass website designed to foster collaboration among developers, empowering them to come together and create exceptional products. With an intuitive platform and a range of powerful features, Manage provides a seamless experience for developers to connect, collaborate, and bring their ideas to life."
            imageUrl="/project-1.png"
            previewLink="https://maanaagee.netlify.app/"
            codeLink="https://github.com/hempun10/talwindcss-landing-page"
            tag={[
              { tech: "Tailwind CSS", icon: <BiLogoTailwindCss /> },
              { tech: "JavaScript", icon: <BiLogoJavascript /> },
            ]}
            className={"order-1"}
          />
          <ProjectCard
            heading="Netflix UI Clone"
            paragraph="For this project, I successfully created a realistic clone of the Netflix user interface using React, TMDB API, and Tailwind CSS. By leveraging React's component-based architecture, I built a dynamic and interactive frontend that allows users to explore a wide range of movies. The TMDB API integration enabled me to fetch real movie data, including titles, descriptions, and posters."
            imageUrl="/project-3.png"
            previewLink="https://neetfflix.netlify.app/"
            codeLink="https://github.com/hempun10/Netflix_React_clone"
            tag={[
              { tech: "Tailwind CSS", icon: <BiLogoTailwindCss /> },
              { tech: "React", icon: <BiLogoReact /> },
              { tech: "TMBD", icon: <TbApi /> },
            ]}
            className={"order-2"}
          />
          <ProjectCard
            heading="Ecommerce Store"
            paragraph={`
Introducing a feature-rich eCommerce website that optimizes the user shopping experience. Stay up-to-date with real-time product updates through dynamic fetching. The convenient "Add to Cart" function and instant toast messages provide seamless purchasing. Enjoy quick product previews for efficient decision-making. Effortlessly find desired items with the powerful search feature. Responsive and efficient, this platform ensures an enjoyable shopping journey, maximizing user satisfaction and business growth.`}
            imageUrl="/project-2.png"
            previewLink="https://online-store-hempun10.vercel.app/"
            codeLink="https://github.com/hempun10/online-store"
            tag={[
              { tech: "NextJS", icon: <SiNextdotjs /> },
              { tech: "TypeScript", icon: <BiLogoTypescript /> },
              { tech: "TailwindCSS", icon: <BiLogoTailwindCss /> },
              { tech: "Fake Store", icon: <TbApi /> },
            ]}
            className={"order-1"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Project;
