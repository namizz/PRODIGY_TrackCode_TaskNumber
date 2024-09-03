import React from "react";
import NavBar from "./NavBar";
import MyImage from "./images/IMG_20231121_173608_694.jpg";

export default function Home() {
  const AboutMe = function () {
    return (
      <div id="intro">
        <h1>Hey there, I'm Naomi Zerfu</h1>
        <p>
          {" "}
          a passionate junior front-end developer with a keen eye for detail. I
          specialize in HTML, CSS, JavaScript, and React, crafting visually
          appealing and user-friendly websites. My goal is to ensure that every
          project I work on meets the highest standards of quality and leaves my
          clients fully satisfied. I thrive on creativity and precision, and I
          take pride in delivering clean, polished, and completed work. You can
          see my project below.
        </p>
      </div>
    );
  };
  const Image = function () {
    return <img id="image" src={MyImage} />;
  };
  const Body = function () {
    return (
      <div className="home-body">
        <AboutMe />
        <Image />
      </div>
    );
  };
  return (
    <div>
      <NavBar />
      <Body />
    </div>
  );
}
