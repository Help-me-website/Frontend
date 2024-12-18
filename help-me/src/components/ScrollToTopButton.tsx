import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <>
          {title && (
            <p className="fixed text-[12px] bg-background-100 bottom-20 right-5 z-50 px-2 py-1 rounded-xl transition-all duration-400">Go to top</p>
          )}
          <button
            onClick={scrollToTop}
            onMouseOver={() => setTitle(true)}
            onMouseOut={() => setTitle(false)}
            className="text-5xl text-text-800 fixed rounded-full bottom-7 right-7 z-50 bg-background-100 shadow-xl focus:outline-none focus:ring-2 focus:ring-text-400 transition duration-300"
          >
            <Icon icon="ic:baseline-arrow-circle-up" />
          </button>
        </>
      )}
    </>
  );
}
