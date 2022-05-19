import { useState, useEffect } from "react";
import clsx from "~lib/utils/clsx";

export default function ScrollDownAnimation() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 70) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <p className={clsx("scroll", isFixed && "hidden")}></p>
    </>
  );
}
