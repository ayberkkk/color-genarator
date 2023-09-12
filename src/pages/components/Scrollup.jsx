import React, { useState, useEffect } from "react";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    }
  }, []);

  return (
    <button
      id="scroll-up-button"
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-4 right-4 bg-slate-700 text-white px-4 py-2 rounded-lg`}
      onClick={scrollToTop}
    >
      👍
    </button>
  );
};

export default ScrollUpButton;
