import React from "react";
import Container from "./ui/Container";
import { Mail } from "lucide-react";
import Heading from "./ui/Heading";
import Paragraph from "./ui/paragraph";
import IconButton from "./ui/icon-button";

const Contact = () => {
  return (
    <div className=" bg-white " id="contact">
      <Container className={"p-[2rem] flex gap-[2rem] flex-col sm:flex-row"}>
        <div>
          <Heading text="Contact Me" className={"text-3xl text-textBlue"} />
          <Paragraph
            text="Let's beautify the future with tech"
            className=" text-textColor w-full"
          />
        </div>
        <div className="mail_container flex gap-4 items-center m-auto">
          <div>
            <IconButton icon={<Mail />} href="#" />
          </div>
          <div className="text_content ">
            <Paragraph text="Mail" className={"text-left font-bold"} />
            <a
              href="mailto:hemthegentlemen@gmail.com"
              target="_blank"
              className=" hover:text-textBlue transition-all"
            >
              hemthegentlemen@gmail.com
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
