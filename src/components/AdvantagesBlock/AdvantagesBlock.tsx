import { SvgIcon } from "@/common/SvgIcon/SvgIcon";
import styles from "./AdvantagesBlock.module.scss";
import { Image } from "@/common/Image/Image";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

const AdvantagesBlock = () => {
  const isMobile = window.matchMedia("(max-width: 730px)").matches;

  const { t } = useTranslation();

  const inViewOptions = {
    threshold: 1,
    triggerOnce: true,
  };

  const { ref: leftPartRef, inView: leftPartInView } = useInView(inViewOptions);
  const { ref: blockRef, inView: blockInView } = useInView(inViewOptions);

  return (
    <div className={styles.advantages__container}>
    <article
      ref={blockRef}
      className={`${styles["advantages"]} ${
        blockInView ? styles["advantages--show"] : ""
      }`}
    >
      <div
        ref={leftPartRef}
        className={`${styles["advantages__left-part"]} ${
          leftPartInView ? styles["advantages__left-part--show"] : ""
        }`}
      >
        <h3 className={styles["advantages__heading"]}>
          {t("advantagesBlock.whyUs")}
        </h3>
        <ul className={styles["advantages__list"]}>
          <li className={styles["advantages__item"]}>
            <div className={styles["advantages__item-title-block"]}>
              <SvgIcon
                src="lockIcon.svg"
                className={styles["advantages__item-title-icon"]}
              />
              <h6 className={styles["advantages__item-title"]}>
                {t("advantagesBlock.safety")}
              </h6>
            </div>
            <p className={styles["advantages__item-text"]}>
              {t("advantagesBlock.theMoneyStaysWithYou")}
            </p>
          </li>

          <li className={styles["advantages__item"]}>
            <div className={styles["advantages__item-title-block"]}>
              <SvgIcon
                src="convinienceIcon.svg"
                className={styles["advantages__item-title-icon"]}
              />
              <h6 className={styles["advantages__item-title"]}>
                {t("advantagesBlock.convenience")}
              </h6>
            </div>
            <p className={styles["advantages__item-text"]}>
              {t("advantagesBlock.allTradingDecisions")}
            </p>
          </li>

          <li className={styles["advantages__item"]}>
            <div className={styles["advantages__item-title-block"]}>
              <SvgIcon
                src="handsIcon.svg"
                className={styles["advantages__item-title-icon"]}
              />
              <h6 className={styles["advantages__item-title"]}>
                {t("advantagesBlock.transparency")}
              </h6>
            </div>
            <p className={styles["advantages__item-text"]}>
              {t("advantagesBlock.weDontRequireUpfrontFees")}
            </p>
          </li>
        </ul>
      </div>

      <div className={`${styles["advantages__right-part"]}`}>
        <Image
          image={isMobile ? "maleWithPhoneMobile.jpg" : "maleWithPhone.jpg"}
          image2x={
            isMobile ? "maleWithPhoneMobile2X.png" : "maleWithPhone2X.png"
          }
          imageWebp={
            isMobile ? "maleWithPhoneMobile.webp" : "maleWithPhone.webp"
          }
          alt="Male with phone image"
          className={styles.advantages__image}
        />
        {/* <div className={styles["advantages__right-part--blur"]}></div> */}
      </div>
    </article>
      <div className={styles["green"]}></div>
    </div>
          
  );
};

export default AdvantagesBlock;
