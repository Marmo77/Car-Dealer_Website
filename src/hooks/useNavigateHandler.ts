import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { company } from "@/data/company";

export const useNavigateHandler = () => {
  const navigate = useNavigate();
  const locationInfo = useLocation();

  return (location: string) => {
    if (location.startsWith("/")) {
      navigate(location);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    } else if (location.startsWith("#")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // back to top of the website or if # has other id
      return;
    } else if (location.startsWith("https")) {
      window.open(location, "_blank", "noopener,noreferrer");
      return;
    }
    window.open(location, "_blank", "noopener,noreferrer"); //link zewnętrzny (nie jest "/" ani "#")
  };
};

// const navigate = useNavigate();

//   const handleNavigate = (location: string) => {
//     if (location.startsWith("/")) {
//       navigate(location);
//       return;
//     } else if (location.startsWith("#")) {
//       const element = document.querySelector(location);
//       if (element) {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//       // back to top of the website or if # has other id
//       return;
//     }
//     window.open(location, "_blank", "noopener,noreferrer"); //link zewnętrzny (nie jest "/" ani "#")
//   };
