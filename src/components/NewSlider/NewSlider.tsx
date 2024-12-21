import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./HorizontalScroll.scss";
import styles from "./NewSlider.module.scss"
import MoneyPathBlock from "../MoneyPathBlock/MoneyPathBlock";
import DescriptionBlock from "../DescriptionBlock/DescriptionBlock";
import AdvantagesBlock from "../AdvantagesBlock/AdvantagesBlock";
import Partners from "../Partners/Partners";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll: React.FC = () => {
  const containerRef_new = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef_new.current;

    if (!container) return;

    // Анимация для горизонтального скролла
    const fakeHorizontal = gsap.to(container, {
      ease: "none",
      x: () => -(container.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: "#horizontal-scroll",
        start: "center center",
        end: () => "+=" + (container.scrollWidth - window.innerWidth),
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        markers: true
      },
    });

    // Получаем все элементы .bar внутри слайдов
    const bars = gsap.utils.toArray<HTMLDivElement>("#slide #bar");

    // Создаем анимации для каждого .bar
    bars.forEach((bar, index) => {
      const slide = bar.closest("#slide") as HTMLElement | null;
      if (!slide) return;

      let new_slider = gsap.to(bar, {
        ease: "none",
        x: () => window.innerWidth * 2,
        scaleX: 1,
        scrollTrigger: {
          containerAnimation: fakeHorizontal,
          trigger: slide,
          start: "left left",
          end: () => "+=" + window.innerWidth * 2,
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true
        },
      });
    });

    // Очистка GSAP-триггеров при размонтировании компонента
    return () => {
      // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section id="horizontal-scroll" className={styles["horizontal-scroll"]}>
        <div className={styles["horizontal-inner"]} ref={containerRef_new}>
          <div id="slide" className={`${styles.slide} ${styles.one} ${styles.blue}`}></div>
  
          <div id="slide" className={`${styles.slide} ${styles.two}`}>
            <div id="bar" className={styles.bar}>
              <MoneyPathBlock />
            </div>
          </div>
  
          <div id="slide" className={`${styles.slide} ${styles.three}`}>
            <div id="bar" className={styles.bar}>
              <DescriptionBlock />
            </div>
          </div>
  
          <div id="slide" className={`${styles.slide} ${styles.three}`}>
            <div id="bar" className={styles.bar}>
              <AdvantagesBlock />
            </div>
          </div>
        </div>
      </section>
      {/* <section className={style.panel}>Content</section>
      <section className={style.panel}>Content</section> */}
    </div>
  );
  };
  
  export default HorizontalScroll;