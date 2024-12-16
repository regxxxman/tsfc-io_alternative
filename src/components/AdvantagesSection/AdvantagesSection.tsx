import { useTranslation } from "react-i18next";
import AdvantagesBlock from "../AdvantagesBlock/AdvantagesBlock";
import AdvantagesGraph from "../AdvantagesGraph/AdvantagesGraph";
import styles from "./AdvantagesSection.module.scss";
// import { useInView } from "react-intersection-observer";

const AdvantagesSection = () => {
  const { t } = useTranslation();

  // const inViewOptions = {
  //   threshold: 1,
  //   triggerOnce: true,
  // };

  // const { ref: leftPartRef, inView: leftPartInView } = useInView(inViewOptions);

  return (
    <section className={styles.advantages__section}>
      <AdvantagesBlock />
      <AdvantagesGraph />

      <a href="#" className={styles.main__button}>
        <span className={styles.text}>
          {t("advantagesGraph.startInvesting")}
        </span>
      </a>
    </section>
  );
};

export default AdvantagesSection;
