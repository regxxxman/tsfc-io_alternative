import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DescriptionBlock from "../DescriptionBlock/DescriptionBlock";
import MoneyPathBlock from "../MoneyPathBlock/MoneyPathBlock";
import AdvantagesBlock from "../AdvantagesBlock/AdvantagesBlock";
import style from "./ScrollBlock.module.scss";
import Partners from "../Partners/Partners";

gsap.registerPlugin(ScrollTrigger);

const ScrollBlock = () => {
  const panelsContainerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const panelsContainer = panelsContainerRef.current;
    if (!panelsContainer) return;

    // Найдите все панели внутри контейнера
    const panels = gsap.utils.toArray<HTMLDivElement>("#panel", panelsContainer);

    // Настройка GSAP анимации
    let scrooll_trigger = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1), // Прокрутка всех панелей
      ease: "none", // Без плавности
      scrollTrigger: {
        trigger: panelsContainer,
        pin: true, // Закрепляем контейнер
        start: "top top",
        scrub: 1, // Скролл-синхронизация
        snap: {
          snapTo: 1 / (panels.length - 1), // Привязка к панелям
          inertia: false,
          duration: { min: 0.2, max: 0.5 }, // Более плавная анимация
        },
      },
    });

    return () => {
      scrooll_trigger.scrollTrigger?.kill(); // Уничтожение анимации и триггера
    };
  }, []);

  return (
    <div
      ref={panelsContainerRef}
      id="panels-container"
      style={{
        display: "flex",
        overflowX: "hidden", // Скрываем горизонтальный скролл
      }}
    >
      <div id="panel" className={style.panel} style={{ flex: "0 0 100vw" }}>
        <MoneyPathBlock />
      </div>
      <div id="panel" className={style.panel} style={{ flex: "0 0 100vw" }}>
        <div style={{ height: "100vh", alignContent: "center" }}>
          <DescriptionBlock />
        </div>
      </div>
      <div id="panel" className={style.panel} style={{ flex: "0 0 100vw" }}>
        <div style={{ height: "100vh", alignContent: "center", width: "100vw" }}>
          <AdvantagesBlock />
        </div>
      </div>
      <div id="panel" className={style.panel} style={{ flex: "0 0 100vw" }}>
        <div style={{ height: "100vh", alignContent: "center" }}>
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default ScrollBlock;
