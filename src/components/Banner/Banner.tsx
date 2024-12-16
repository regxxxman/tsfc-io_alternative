import { useTranslation } from "react-i18next";

import { Image } from "@common/Image/Image";
import { SvgIcon } from "@common/SvgIcon/SvgIcon";

import styles from "./banner.module.scss";
// import Feathers from "../Feathers/Feathers";
import { useInView } from "react-intersection-observer";
import Feathers_new from "../Feathers_new/Fethers_new";

interface BannerProps {
  id: string;
}

const GooglePlay = import.meta.env.VITE_GOOGLE_PLAY;
const AppStore = import.meta.env.VITE_APP_STORE;

const Banner = ({ id }: BannerProps) => {
  const { t } = useTranslation();

  const inViewOptions = {
    threshold: 1,
    triggerOnce: true,
  };

  const { ref, inView } = useInView(inViewOptions);

  return (
    <section id={id} className={styles["banner__wrapper"]}>
      <div className={styles["banner__section"]}>
        <div className={styles["banner__content"]}>
          <div ref={ref} className={styles["banner__textSection"]}>
            <h1
              className={`${styles["banner__title"]} ${
                inView ? styles["banner__title--show"] : ""
              }`}
            >
              {t("banner.tradingService")}
            </h1>
            <p
              className={`${styles["banner__description"]} ${
                inView ? styles["banner__description--show"] : ""
              }`}
            >
              {t("banner.youDontNeedTo")}
              <span>{t("banner.trust")}</span>
            </p>
          </div>
          <div
            className={`${styles["banner__appLinks"]} ${
              inView ? styles["banner__appLinks--show"] : ""
            }`}
          >
            <a href={GooglePlay} target="_blank">
              <SvgIcon
                src="googlePlayIcon.svg"
                className={styles["banner__storeIcon"]}
              />
            </a>

            <a href={AppStore} target="_blank">
              <SvgIcon
                src="appStoreIcon.svg"
                className={styles["banner__storeIcon"]}
              />
            </a>
          </div>
        </div>
        <Image
          image="iPhone2016.png"
          imageWebp="iPhone16.webp"
          image2x="iPhone16@2x.png"
          className={`${styles["banner__image"]} ${
            inView ? styles["banner__image--show"] : ""
          }`}
          alt="iPhone"
        />
      </div>
      <p className={styles["banner__switzerland"]}>
        {t("basedInSw")}
        <SvgIcon src="switzerlandIcon.png" />
      </p>
      {/* <Feathers isAnimated /> */}
      <Feathers_new />
    </section>
  );
};

export default Banner;
