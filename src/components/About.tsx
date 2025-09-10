import Hero from "./AboutPage/AboutHero";
import CoreValues from "./AboutPage/CoreValues";
import Awards from "./AboutPage/Awards";
import OurStory from "./AboutPage/OurStory";
import Faq from "./AboutPage/faq";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Hero />
        <OurStory />
        <CoreValues />
        <Awards />
        <Faq />
      </div>
    </>
  );
};

export default About;
