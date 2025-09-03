import { InfiniteSlider } from "../../components/ui/infinite-slider";
import { ProgressiveBlur } from "../../components/ui/progressive-blur";
import bmwLogo from "../../assets/imgs/bmw.png";
import LamboLogo from "../../assets/imgs/lamborghini.png";
import FordLogo from "../../assets/imgs/Ford.svg";
import VolvoLogo from "../../assets/imgs/volvo.png";
import VtechLogo from "../../assets/imgs/VTech.jpg";

const partners = [
  {
    id: 0,
    title: "BMW logo",
    src: bmwLogo,
    link: "https://www.bmw.com/en/index.html",
  },
  {
    id: 1,
    title: "Lamborghini logo",
    src: LamboLogo,
    link: "https://www.lamborghini.com/en-en",
  },
  {
    id: 2,
    title: "Vtech logo",
    src: VtechLogo,
    link: "https://vtech.pl/",
  },
  {
    id: 3,
    title: "Ford logo",
    src: FordLogo,
    link: "https://www.ford.com",
  },
  {
    id: 4,
    title: "Volvo logo",
    src: VolvoLogo,
    link: "https://www.volvo.com/en/",
  },
];

const Partners = () => {
  return (
    <section className="md:flex flex-col max-w-7xl mx-auto w-full text-center my-6 justify-center hidden">
      <h1 className="mb-12 text-4xl font-montserrat font-semibold tracking-tight">
        Our Partners
      </h1>
      {/* https://tailark.com/logo-cloud */}
      <div className="flex justify-center mx-auto">
        <div className="relative overflow-hidden py-6 md:w-7xl w-full">
          <InfiniteSlider speedOnHover={10} speed={50} gap={112}>
            {partners.map((item) => (
              <div key={item.id} className="flex shrink-0">
                <a href={item.link} target="_blank">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="mx-auto h-10 w-fit dark:invert"
                  />
                </a>
              </div>
            ))}
          </InfiniteSlider>
          <div className="md:block hidden pointer-events-none">
            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none max-lg:hidden absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none max-lg:hidden absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
