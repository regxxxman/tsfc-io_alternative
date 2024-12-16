import { useTranslation } from "react-i18next";
import styles from "./MoneyPathBlock.module.scss";
import { useInView } from "react-intersection-observer";
import { gsap, ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

const MoneyPathBlock = () => {
  const inViewOptions = {
    threshold: 1,
    triggerOnce: true,
  };

  const { t } = useTranslation();
  const { ref: headingRef, inView: headingInView } = useInView(inViewOptions);
  const { ref: firstPointRef, inView: firstPointInView } =
    useInView(inViewOptions);

    useLayoutEffect( () => {
      ScrollTrigger.create({trigger: "#money_block",
        markers: false,
        end: "bottom bottom",
        onLeave: () => {
          console.log("Kek");
          // location.hash = "about"
        }
      })
    },[])

  return (
    <section id="money_block" className={styles["money-path-block"]}>
      <h3 className={styles.title}>
        {t("moneyPathBlock.yourMoneyStaysWithYou1")}
        <span
          ref={headingRef}
          className={headingInView ? styles.changeHeadingColor : ""}
        >
          {t("moneyPathBlock.yourMoneyStaysWithYou2")}
        </span>
        {t("moneyPathBlock.yourMoneyStaysWithYou3")}
      </h3>

      <div className={styles["visual-block__wrapper"]}>
        <div ref={firstPointRef} className={styles["visual-block"]}>
          <div
            className={`${styles["visual-block__point-wrapper"]} ${
              firstPointInView ? styles.showFirstPoint : ""
            }`}
          >
            <div
              className={`${styles["visual-block__point"]} ${styles["visual-block__point--gray"]}`}
            ></div>
          </div>

          <div
            className={`${styles["white-line"]} ${
              firstPointInView ? styles.showTheWhiteLine : ""
            }`}
          ></div>

          <div
            className={`${styles["visual-block__point-wrapper"]} ${
              firstPointInView ? styles.showSecondPoint : ""
            }`}
          >
            <div
              className={`${styles["visual-block__point"]} ${styles["visual-block__point--gray"]}`}
            ></div>
          </div>

          <div
            className={`${styles["green-line"]} ${
              firstPointInView ? styles.showTheGreenLine1 : ""
            }`}
          ></div>
          <p
            className={`${styles["visual-block__inner-text"]} ${
              firstPointInView ? styles.showApiText : ""
            }`}
          >
            {t("moneyPathBlock.apiKeys")}
          </p>
          <div
            className={`${styles["green-line"]} ${
              firstPointInView ? styles.showTheGreenLine2 : ""
            }`}
          ></div>

          <div
            className={`${styles["visual-block__point-wrapper"]} ${
              styles["visual-block__point-wrapper--green"]
            } ${firstPointInView ? styles.showThirdPoint : ""}`}
          >
            <div
              className={`${styles["visual-block__point"]} ${styles["visual-block__point--green"]}`}
            ></div>
          </div>
        </div>
        <div className={styles["visual-block__titles"]}>
          <h6
            ref={firstPointRef}
            className={`${styles["visual-block__title"]} ${
              firstPointInView ? styles.showFirstPoint : ""
            }`}
          >
            {t("moneyPathBlock.client")}
          </h6>
          <h6
            className={`${styles["visual-block__title"]} ${
              firstPointInView ? styles.showSecondPoint : ""
            }`}
          >
            {t("moneyPathBlock.exchange")}
          </h6>
          <h6
            className={`${styles["visual-block__title"]} ${
              styles["visual-block__title--green"]
            } ${firstPointInView ? styles.showThirdPoint : ""}`}
          >
            TSFC
          </h6>
        </div>
      </div>
    </section>
  );
};

export default MoneyPathBlock;
