// import { Logo, LogoImage, LogoText } from "@/components/shadcnblocks/logo";
import { CopyrightBar, navigation } from "@/data/footer";
import { IoLogoApple } from "react-icons/io";
import { useNavigateHandler } from "@/hooks/useNavigateHandler";
import { Button } from "../ui/button";
import { Car, Mail, Phone, Pin } from "lucide-react";
import { company } from "@/data/company";

const Footer = () => {
  const handleNavigate = useNavigateHandler();
  return (
    <section className="pt-12 pb-8 flex justify-center w-full">
      <div className="container">
        <footer>
          <div
            className={`grid grid-cols-2 gap-8 lg:grid-cols-${
              navigation.length + 2
            } max-max-md:px-6`}
            onClick={() => console.log(navigation.length + 2)}
          >
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center max-md:flex-col max-md:text-center max-md:justify-center gap-2 mb-6">
                <div className="w-10 h-10 max-md:w-12 max-md:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Car className="h-6 w-6 max-md:h-8 max-md:w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-xl max-md:text-2xl font-bold">
                    {company[0].companyName}
                  </h1>
                  <p className="text-sm max-md:text-[13px] text-gray-400">
                    {company[0].companyDescription}
                  </p>
                </div>
              </div>
              <div className="max-md:text-center">
                <p className="mt-4 font-bold capitalize">
                  {CopyrightBar[0].tagline}
                </p>
                <p className="text-gray-500 mb-6 leading-relaxed pr-0 lg:pr-12 font-raleway">
                  Your trusted partner in finding the perfect vehicle. We
                  connect buyers with quality cars from verified dealers
                  nationwide, ensuring a seamless and transparent car buying
                  experience.
                </p>
              </div>
              <div className="space-y-3 font-montserrat max-md:flex max-md:flex-col max-md:items-center">
                <div className="flex gap-3 items-center text-sm cursor-pointer">
                  <Phone className="w-4 h-4 text-blue-400" />
                  {company[0].phoneNumber}
                </div>
                <div className="flex gap-3 items-center text-sm cursor-pointer">
                  <Mail className="w-4 h-4 text-blue-400" />
                  {company[0].companyEmail}
                </div>
                <div className="flex gap-3 items-center text-sm cursor-pointer">
                  <Pin className="w-4 h-4 text-blue-400" />
                  {company[0].companyLocation}
                </div>
              </div>
            </div>
            {navigation.map((item, index) => (
              <div key={index} className="font-montserrat">
                <h3 className="mb-4 font-bold text-lg">{item.title}</h3>
                <ul className="text-muted-foreground text-[13px] space-y-4">
                  {item.urls.map((url, index) => {
                    const Icon = url.icon;
                    return (
                      <li
                        key={index}
                        className="hover:text-primary font-medium flex items-center gap-1 cursor-pointer"
                        onClick={() => handleNavigate(url.link)}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                        {url.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-12 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <div className="flex md:flex-row flex-col max-md:mx-auto gap-6">
              <p>{CopyrightBar[0].copyright}</p>
              <ul className="flex gap-5">
                {CopyrightBar[0].bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="hover:text-blue-600 underline">
                    <a href={link.link}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 max-md:mx-auto items-center">
              {/* This is alternative for "Social navigation footer" */}
              <p className="font-raleway font-semibold">Follow Us:</p>
              <ul className="flex gap-4">
                {CopyrightBar[0].bottomSocials.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index}>
                      {Icon && (
                        <Button
                          className="w-8 h-8 bg-gray-800 hover:bg-blue-600 transition-colors cursor-pointer rounded-lg flex items-center justify-center"
                          onClick={() => handleNavigate(item.link)}
                        >
                          <Icon className="h-4 w-4 text-card" />
                        </Button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
