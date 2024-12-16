import { useEffect, useState } from "react";
import styles from "./ParallaxBackground.module.scss";

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const parallaxEffect = scrollY * 0.2;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.background}
      style={{
        transform: `translateY(-${parallaxEffect}px)`,
      }}
    ></div>
  );
};

export default ParallaxBackground;
