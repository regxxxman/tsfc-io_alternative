import React, { useState, useEffect } from "react";
import styles from "./AnimatedNumber.module.scss";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  start: number;
  end: number;
  duration?: number;
  className?: CSSModuleClasses;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  start,
  end,
  duration = 1000,
  className,
}) => {
  const [current, setCurrent] = useState(start);

  const inViewOptions = {
    threshold: 1,
    triggerOnce: true,
  };

  const { ref, inView } = useInView(inViewOptions);

  const step = (end - start) / (duration / 16); // 16ms is approx. 60fps

  useEffect(() => {
    if (current !== end && inView) {
      const timer = setTimeout(() => {
        const nextValue = current + step;
        if ((step > 0 && nextValue >= end) || (step < 0 && nextValue <= end)) {
          setCurrent(end);
        } else {
          setCurrent(nextValue);
        }
      }, 16);

      return () => clearTimeout(timer);
    }
  }, [current, end, step, inView]);

  const isIncreasing = end > start;
  const classNames = `${styles["animated-number"]} ${
    isIncreasing ? styles.increasing : styles.decreasing
  } ${className}`;

  return (
    <span ref={ref} className={classNames}>
      {Math.round(current)}
    </span>
  );
};

export default AnimatedNumber;
