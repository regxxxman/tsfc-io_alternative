import { SvgIcon } from "@/common/SvgIcon/SvgIcon";
import styles from "./Feathers.module.scss";
import { useEffect, useState } from "react";

interface Props {
  isAnimated?: boolean;
}

const Feathers = ({ isAnimated }: Props) => {
  function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      };
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
  }

  const scrollPosition = useScrollPosition();
  const maxTranslation = window.innerHeight / 2;

  const featherStyle = {
    transform: `translate(-50%, -${Math.min(
      maxTranslation,
      scrollPosition
    )}px)`,
    transition: "transform 0.3s ease-out",
  };

  return (
    <SvgIcon
      src="Feathers.svg"
      className={styles.feathers}
      style={isAnimated ? featherStyle : undefined}
    />
  );
};

export default Feathers;
