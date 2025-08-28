import React from "react";
import Hero from "./AboutPage/AboutHero";
import Mission from "./AboutPage/Mission";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Hero />
        <Mission />
      </div>
    </>
  );
};

export default About;
