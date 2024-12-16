import { Image } from "@/common/Image/Image";
import styles from "./AdvantagesGraph.module.scss";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";

const AdvantagesGraph = () => {
  const { t } = useTranslation();

  const inViewOptions = {
    threshold: 1,
    triggerOnce: true,
  };

  const { ref: itemDividerRef, inView: itemDividerInView } =
    useInView(inViewOptions);
  const { ref: itemTextRef, inView: itemTextInView } = useInView(inViewOptions);

  const xAxisPoints = [
    "QIII 2020",
    "QIV 2020",
    "QI 2021",
    "QII 2021",
    "QIII 2021",
    "QIV 2021",
    "QI 2022",
    "QII 2022",
    "QIII 2022",
    "QIV 2022",
    "QI 2023",
    "QII 2023",
    "QIII 2023",
    "QIV 2023",
    "QI 2024",
    "QII 2024",
  ];

  return (
    <article className={styles.container}>
      <div className={styles["left-part"]}>
        <h6 className={styles.graph__heading}>
          {t("advantagesGraph.chartOfTradingStatistics")}
        </h6>

        <div className={styles["graph-legend__block"]}>
          <p className={styles["graph-legend__text"]}>SPX -</p>
          <div
            className={`${styles["graph-legend__square"]} ${styles["graph-legend__square--white"]}`}
          ></div>
          <div
            className={`${styles["graph-legend__square"]} ${styles["graph-legend__square--green"]}`}
          ></div>
          <p className={styles["graph-legend__text"]}>- TSFC</p>
        </div>

        <Image
          image="advantagesGraph.jpg"
          image2x="advantagesGraph2X.png"
          imageWebp="advantagesGraph.webp"
          className={styles.graph}
          alt="Advantages graph image"
        />

        <div className={styles.graph__x}>
          {xAxisPoints.map((point) => (
            <p className={styles["graph__x-text"]} key={point}>
              {point}
            </p>
          ))}
        </div>
      </div>

      <ul className={styles.list}>
        <li className={styles.list__item}>
          <p className={styles["list__item-title"]}>
            <AnimatedNumber
              end={Number(t("advantagesGraph.countriesCount"))}
              start={0}
            />{" "}
            {t("advantagesGraph.countries")}
          </p>
          <div
            ref={itemDividerRef}
            className={`${styles["list__item-divider"]} ${
              itemDividerInView ? styles["list__item-divider--show-first"] : ""
            }`}
          ></div>
          <p
            ref={itemTextRef}
            className={`${styles["list__item-text"]} ${
              itemTextInView ? styles["list__item-text--show-first"] : ""
            }`}
          >
            {t("advantagesGraph.weContinueToExpand")}
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles["list__item-title"]}>
            <AnimatedNumber
              end={Number(t("advantagesGraph.yearsCount"))}
              start={0}
            />
            {t("advantagesGraph.years")}
          </p>
          <div
            ref={itemDividerRef}
            className={`${styles["list__item-divider"]} ${
              itemDividerInView ? styles["list__item-divider--show-second"] : ""
            }`}
          ></div>
          <p
            ref={itemTextRef}
            className={`${styles["list__item-text"]} ${
              itemTextInView ? styles["list__item-text--show-second"] : ""
            }`}
          >
            {t("advantagesGraph.yearsOfBlockchain")}
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles["list__item-title"]}>
            <AnimatedNumber
              end={Number(t("advantagesGraph.APYCount1"))}
              start={0}
            />
            ,
            <AnimatedNumber
              end={Number(t("advantagesGraph.APYCount2"))}
              start={0}
            />
            {t("advantagesGraph.APY")}
          </p>
          <div
            ref={itemDividerRef}
            className={`${styles["list__item-divider"]} ${
              itemDividerInView ? styles["list__item-divider--show-third"] : ""
            }`}
          ></div>
          <p
            ref={itemTextRef}
            className={`${styles["list__item-text"]} ${
              itemTextInView ? styles["list__item-text--show-third"] : ""
            }`}
          >
            {t("advantagesGraph.averageAnnualYield")}
          </p>
        </li>
      </ul>
    </article>
  );
};

export default AdvantagesGraph;
