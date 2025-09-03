import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { useHandleScrollTop } from "@/hooks/useHandleScrollTop";

const ScrollTopButton = ({ showScrollTop }: { showScrollTop: boolean }) => {
  const handleScrollTop = useHandleScrollTop();

  return (
    <div className="fixed group bottom-10 right-10 z-40">
      <div
        className={
          showScrollTop
            ? "w-14 h-14 cursor-pointer flex items-center justify-center rounded-full bg-blue-600"
            : "hidden"
        }
      >
        <ArrowUpIcon
          className="w-6 h-6 text-white animate-bounce transition-all duration-600 translate-y-0.5 ease-in-out group-hover:scale-115"
          onClick={handleScrollTop}
        />
      </div>
    </div>
  );
};

export default ScrollTopButton;
