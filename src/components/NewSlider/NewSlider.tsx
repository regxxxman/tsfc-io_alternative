import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizontalScroll.scss";
import MoneyPathBlock from "../MoneyPathBlock/MoneyPathBlock";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const fakeHorizontal = gsap.to(container, {
      ease: "none",
      x: () => -(container.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: ".horizontal-scroll",
        start: "center center",
        end: () => "+=" + (container.scrollWidth - window.innerWidth),
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    gsap.to(".slide.two .bar", {
      ease: "none",
      x: () => window.innerWidth * 2,
      scaleX: 1,
      scrollTrigger: {
        containerAnimation: fakeHorizontal,
        trigger: ".slide.two",
        start: "left left",
        end: () => "+=" + window.innerWidth * 2,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // Очистка GSAP-триггеров при размонтировании компонента
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* <section className="panel">Content</section> */}

      <section className="horizontal-scroll">
        <div className="horizontal-inner" ref={containerRef}>
          <div className="slide one blue"></div>
          <div className="slide two">
            <div className="bar">
                <MoneyPathBlock />
            </div>
            {/* <div className="bar"></div> */}
          </div>
          <div className="slide two">
            <div className="bar">
                    <MoneyPathBlock />
                </div>
          </div>
          <div className="slide four green"></div>
          <div className="slide five purple"></div>
        </div>
      </section>

      <section className="panel">Content</section>
      <section className="panel">Content</section>
    </div>
  );
};

export default HorizontalScroll;
