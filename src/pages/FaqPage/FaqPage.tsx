import FaqItem from "@/components/FaqItem/FaqItem";
import styles from "./FaqPage.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header/Header";
import MainLogo from "@/components/MainLogo/MainLogo";
import { SvgIcon } from "@/common/SvgIcon/SvgIcon";
import ParallaxBackground from "@/components/ParallaxBackground/ParallaxBackground";
import { useEffect } from "react";

interface Props {
  lang: string;
}

const FaqPage = ({ lang }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isMobile = window.matchMedia("(max-width: 932px)").matches;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.faq__wrapper}>
      <ParallaxBackground />

      <div className={styles["faq__header-wrapper"]}>
        <MainLogo />
        <Header lang={lang} hideNavigation={true} />
      </div>

      <section className={styles.faq}>
        <div className={styles.faq__header}>
          <button
            className={styles.faq__back}
            onClick={() => navigate(`/${lang}`)}
          >
            <SvgIcon
              src="arrowBackIcon.svg"
              className={styles["faq__arrow-back"]}
            />
            {!isMobile && t("faq.back")}
          </button>

          <h3 className={styles.faq__heading}>
            {t("faq.FAQ")} (<span>FAQ</span>)
          </h3>

          <div className={styles.faq__empty}>
            <button
              className={styles.faq__back}
              onClick={() => navigate(`/${lang}`)}
              disabled
            >
              <SvgIcon
                src="arrowBackIcon.svg"
                className={styles["faq__arrow-back"]}
              />
              {!isMobile && t("faq.back")}
            </button>
          </div>
        </div>

        <ul className={styles.faq__list}>
          <FaqItem
            question={t("faq.weCanBeTrustedQ")}
            answer={t("faq.weCanBeTrustedA")}
            greenQuestion={true}
          />

          <FaqItem
            question={t("faq.amoundOfMoneyToStartQ")}
            answer={t("faq.amoundOfMoneyToStartA")}
            greenQuestion={true}
          />

          <FaqItem
            question={t("faq.howTheWorkIsGoingQ")}
            answer={t("faq.howTheWorkIsGoingA")}
            greenQuestion={true}
          />

          <FaqItem
            question={t("faq.howToPayMyFeeQ")}
            answer={t("faq.howToPayMyFeeA")}
            greenQuestion={true}
          />

          <FaqItem
            question={t("faq.canIWithdrawPartOfMyFundsQ")}
            answer={t("faq.canIWithdrawPartOfMyFundsA")}
            greenQuestion={true}
          />

          <FaqItem
            question={t("faq.whyTheTransactionHistoryNotShownQ")}
            answer={t("faq.whyTheTransactionHistoryNotShownA")}
            greenQuestion={true}
          />
          <FaqItem
            question={t("faq.noEmailCodeQ")}
            answer={t("faq.noEmailCodeA")}
            greenQuestion={true}
          />
          <FaqItem
            question={t("faq.chartIsNotDisplayingQ")}
            answer={t("faq.chartIsNotDisplayingA")}
            greenQuestion={true}
          />
          <FaqItem
            question={t("faq.howToDepositFundsQ")}
            answer={t("faq.howToDepositFundsA")}
            greenQuestion={true}
          />
        </ul>
      </section>
    </div>
  );
};

export default FaqPage;
