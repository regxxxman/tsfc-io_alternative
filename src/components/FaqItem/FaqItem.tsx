import { SvgIcon } from "@/common/SvgIcon/SvgIcon"; 
import styles from "./FaqItem.module.scss";
import { useState, useRef } from "react";

interface Props {
  question: string;
  answer: string;
  greenQuestion?: boolean;
}

const FaqItem = ({ question, answer, greenQuestion }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const answerRef = useRef<HTMLParagraphElement>(null);

  const toggleItem = () => {
    if (isOpen) {
      // Если элемент открыт, начинаем анимацию скрытия
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 400); // Должно быть время анимации
    } else {
      setIsOpen(true);
    }
  };

  return (
    <li className={styles.faq__item} onClick={toggleItem}>
      <button
        className={`${styles.faq__question} ${
          greenQuestion ? styles["faq__question--green"] : ""
        }`}
      >
        <span>{question}</span>
        <SvgIcon
          src="arrowIcon.svg"
          className={`${styles.faq__arrow} ${
            isOpen && styles["faq__arrow--open"]
          }`}
        />
      </button>
      <div
        className={`${styles.faq__divider} ${isAnimating ? styles["faq__divider--animating"] : ""}`}
        style={
          isOpen
            ? { height: `0.5px` }
            : { height: "0.0px", margin: "0" }
        }
      ></div>
      <p
        ref={answerRef}
        className={`${styles.faq__answer} ${
          isOpen ? styles["faq__answer--show"] : ""
        }`}
        style={
          isOpen
            ? { height: `${answerRef.current?.scrollHeight}px` }
            : { height: "0px" }
        }
      >
        {answer}
      </p>
    </li>
  );
};

export default FaqItem;
