import { useNavigate } from "react-router-dom";

export const useNavigateHandler = () => {
  const navigate = useNavigate();

  return (location: string) => {
    if (location.startsWith("/")) {
      navigate(location);
      return;
    } else if (location.startsWith("#")) {
      const element = document.querySelector(location);
      if (element) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      // back to top of the website or if # has other id
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
