import React from "react";
import Container from "./ui/Container";

const Footer = () => {
  return (
    <div className=" bg-gray-700">
      <Container className={" pt-3 text-center text-whiteSmoke"}>
        &copy; {new Date().getFullYear()} Hem Bahadur Pun | Made with 💖
      </Container>
    </div>
  );
};

export default Footer;
