import { Image } from "@/common/Image/Image";
import Form from "../Form/Form";

import styles from "./financialServicesSection.module.scss";
import { Link } from "react-router-dom";
import { SvgIcon, TelegramIcon, WhatsAppIcon } from "@/common/SvgIcon/SvgIcon";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

const telegram = import.meta.env.VITE_TELEGRAM;
const whatsapp = import.meta.env.VITE_WHATSAPP;

interface FinancialServicesSectionProps {
  id: string;
}

const FinancialServicesSection = ({ id }: FinancialServicesSectionProps) => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <section id={id} className={styles["contact"]} style={{marginTop: "100vh"}}>
      <div className={styles["contact__header"]}>
        <h3 className={styles.formHeading}>{t("contactUsBlock.contactUs")}</h3>
        <Link
          to={telegram}
          target="_blank"
          className={styles["contact__header-icon"]}
        >
          <TelegramIcon />
        </Link>
        <Link
          to={whatsapp}
          target="_blank"
          className={styles["contact__header-icon"]}
        >
          <WhatsAppIcon />
        </Link>

        <p className={styles["contact__switzerland"]}>
          {t("basedInSw")} <SvgIcon src="switzerlandIcon.png" />
        </p>
      </div>

      <div ref={ref} className={styles["contact__block"]}>
        <Form />
        <Image
          image="formBackground.png"
          image2x="formBackground2X.png"
          imageWebp="formBackground.webp"
          alt="Form background image"
          className={`${styles["contact__image"]} ${
            inView ? styles["contact__image--show"] : ""
          }`}
        />
        <div className={styles["contact__blur1"]}></div>
        <div className={styles["contact__blur2"]}></div>
        <div className={styles["contact__blur3"]}></div>
      </div>
    </section>
  );
};

export default FinancialServicesSection;
