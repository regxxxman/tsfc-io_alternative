import { SvgIcon } from "@/common/SvgIcon/SvgIcon";
import styles from "./Feathers_new.module.scss";
import { gsap, ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";

const Feathers_new = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    // Параллакс эффект для элемента с классом styles.feathers
    gsap.to(`.${styles.feathers}`, {
      y: () => -window.innerHeight * 0.1, // 20% высоты окна
      ease: "none",
      scrollTrigger: {
        start: "top center", // Когда верх элемента достигает низа экрана
        end: "bottom top",   // Когда низ элемента достигает верха экрана
        scrub: true,         // Плавная синхронизация с прокруткой
        trigger: "#Feathers", // Элемент для отслеживания прокрутки
        invalidateOnRefresh: true,
        // markers: true
      },
    });
  }, []);

  return (
    <div id="Feathers">
      <SvgIcon
        src="Feathers.svg"
        className={styles.feathers} // Класс для применения параллакса
      />
    </div>
  );
};

export default Feathers_new;
