import { Image } from "@/common/Image/Image";
import styles from "./DescriptionBlock.module.scss";
import { useTranslation } from "react-i18next";
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";
import AnimatedText from "../AnimatedText/AnimatedText";
import { useInView } from "react-intersection-observer";

const DescriptionBlock = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className={styles.description} id="about">
      <article className={styles["description__text-block"]}>
        <div className={styles.numbers__block}>
          <div className={styles.numbers__item}>
            <h6 className={styles["numbers__item-title"]}>
              {t("descriptionBlock.expectedROITitle")}
            </h6>
            <p className={styles["numbers__item-text"]}>
              <span className={styles["green-text"]}>
                <AnimatedNumber end={38} start={0} />%
              </span>
              &nbsp;APY*
            </p>
          </div>

          <div className={styles.numbers__item}>
            <h6 className={styles["numbers__item-title"]}>
              {t("descriptionBlock.minimumEntryAmountTitle")}
            </h6>
            <p className={styles["numbers__item-text"]}>
              {t("descriptionBlock.minimumEntryAmount")}
              <span className={styles["green-text"]}>
                &nbsp;$
                <AnimatedNumber end={100} start={500} />
              </span>
            </p>
          </div>

          <div className={styles.numbers__item}>
            <h6 className={styles["numbers__item-title"]}>
              {t("descriptionBlock.feeTitle")}
            </h6>
            <p className={`${styles["numbers__item-text"]}`}>
              <span className={styles["green-text"]}>
                <AnimatedNumber end={30} start={100} />%
              </span>
              <span className={styles["numbers__item-text--small"]}>
                &nbsp;{t("descriptionBlock.fee")}
              </span>
            </p>
          </div>

          <div className={styles.numbers__item}>
            <h6 className={styles["numbers__item-title"]}>
              {t("descriptionBlock.investmentPeriodTitle")}
            </h6>
            <p className={styles["numbers__item-text"]}>
              {t("descriptionBlock.investmentPeriodFrom")}
              <span className={styles["green-text"]}>
                &nbsp;{t("descriptionBlock.investmentPeriod")}
              </span>
            </p>
          </div>
        </div>

        <div className={styles.description__text}>
          <span>TSFC</span> <span className={styles["green-text"]}>-</span>{" "}
          <AnimatedText text={t("descriptionBlock.TSFCDescriptionFirstPart")} />
          <br />
          <br />
          <AnimatedText
            text={t("descriptionBlock.TSFCDescriptionSecondPart")}
          />
        </div>

        <p className={styles["description__text--small"]}>
          <span className={styles["green-text"]}>*</span>
          {t("descriptionBlock.TSFCDescriptionSub")}
        </p>

        <a href="#howToStart" className={styles.description__button}>
          {t("descriptionBlock.howToStart")}
        </a>
      </article>

      <div
        ref={ref}
        className={`${styles["description__image"]} ${
          inView ? styles["description__image--show"] : ""
        }`}
      >
        <Image
          image="phoneVertical.jpg"
          imageWebp="phoneVertical.webp"
          image2x="phoneVertical2X.png"
          alt="Vertical phone image"
        />
      </div>
    </section>
  );
};

export default DescriptionBlock;
