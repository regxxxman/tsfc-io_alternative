import styles from "./FaqBlock.module.scss";
import FaqItem from "../FaqItem/FaqItem";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Feathers from "../Feathers/Feathers";
import { useEffect, useState } from "react";

interface FaqData {
  question: string;
  answer: string;
}

const FaqBlock = () => {
  const { t, i18n } = useTranslation();
  
  // Состояние для хранения переведенных данных
  const [faqItems, setFaqItems] = useState<FaqData[]>([]);

  // Обновление данных при первом рендере или изменении языка
  useEffect(() => {
    const updateFaqItems = () => {
      setFaqItems([
        {
          question: t("faq.weCanBeTrustedQ"),
          answer: t("faq.weCanBeTrustedA"),
        },
        {
          question: t("faq.amoundOfMoneyToStartQ"),
          answer: t("faq.amoundOfMoneyToStartA"),
        },
        {
          question: t("faq.howTheWorkIsGoingQ"),
          answer: t("faq.howTheWorkIsGoingA"),
        },
      ]);
    };

    // Обновляем данные сразу при первом рендере
    updateFaqItems();

    // Перезапускаем обновление при изменении языка
    i18n.on("languageChanged", updateFaqItems);

    // Удаляем обработчик при размонтировании
    return () => i18n.off("languageChanged", updateFaqItems);
  }, []); // Зависимости от i18n и t, чтобы обновлять при изменении языка

  return (
    <section className={styles.faq} id="faq" style={{marginTop: "100vh"}}>
      <h3 className={styles.faq__heading}>
        {t("faq.FAQ")} (<span>FAQ</span>)
      </h3>
      <ul className={styles.faq__list}>
        {faqItems.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </ul>

      <Link to="faq" className={styles.faq__button}>
        {t("faq.learnMore")}
      </Link>

      <div className={styles.faq__feathers}>
        <Feathers />
      </div>
    </section>
  );
};

export default FaqBlock;
