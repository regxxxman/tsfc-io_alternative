import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./AnimatedText.module.scss";
import { useSelector } from "react-redux";
import { selectCurrentLanguage } from "@/features/languageSlice";

interface AnimatedTextProps {
  text: string;
  scrambleDuration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  scrambleDuration = 1000,
}) => {
  const [displayText, setDisplayText] = useState(Array(text.length).fill(" "));
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentLanguage = useSelector(selectCurrentLanguage);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  useEffect(() => {
    if (isVisible) {
      const lowerChars =
        currentLanguage === "eng"
          ? "abcdefghijklmnopqrstuvwxyz"
          : currentLanguage === "ru"
          ? "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
          : currentLanguage === "pol"
          ? "aąbcćdeęfghijklłmnńopqrsśtuwxyzźż"
          : "";
      const upperChars =
        currentLanguage === "eng"
          ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          : currentLanguage === "ru"
          ? "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
          : currentLanguage === "pol"
          ? "AĄBCĆDEĘFGHIJKLŁMNŃOPRSŚTUWXYZŹŻ"
          : "";
      const numbers = "0123456789";
      const finalChars = text.split("");
      const charIndexes = finalChars.map((_, index) => index);

      const getRandomChar = (char: string) => {
        if (lowerChars.includes(char))
          return lowerChars[Math.floor(Math.random() * lowerChars.length)];
        if (upperChars.includes(char))
          return upperChars[Math.floor(Math.random() * upperChars.length)];
        if (numbers.includes(char))
          return numbers[Math.floor(Math.random() * numbers.length)];
        return char;
      };

      const scrambleInterval = setInterval(() => {
        setDisplayText((prevText) =>
          prevText.map((char, index) =>
            char === finalChars[index] ? char : getRandomChar(finalChars[index])
          )
        );
      }, 50);

      const revealInterval = setInterval(() => {
        if (charIndexes.length > 0) {
          const randomIndex = Math.floor(Math.random() * charIndexes.length);
          const charIndex = charIndexes[randomIndex];
          charIndexes.splice(randomIndex, 1);

          setDisplayText((prevText) => {
            const newText = [...prevText];
            newText[charIndex] = finalChars[charIndex];
            return newText;
          });
        } else {
          clearInterval(scrambleInterval);
          clearInterval(revealInterval);
        }
      }, scrambleDuration / text.length);

      intervalRef.current = revealInterval;

      return () => {
        clearInterval(scrambleInterval);
        clearInterval(revealInterval);
      };
    }
  }, [isVisible, text, scrambleDuration]);

  return (
    <span
      ref={ref}
      className={`${styles["animated-text"]} ${
        isVisible ? styles.visible : ""
      }`}
    >
      {displayText.map((char, index) => (
        <span key={index} className="char">
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
