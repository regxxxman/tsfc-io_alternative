import { useTranslation } from "react-i18next";
import styles from "./AnalysisBlock.module.scss";
import { useInView } from "react-intersection-observer";

const AnalysisBlock = () => {
  const { t } = useTranslation();

  const inViewOptions = {
    threshold: 1,
    triggerOnce: true,
  };

  const { ref: rowHeadingRef, inView: rowHeadingInView } =
    useInView(inViewOptions);

  return (
    <section className={styles.analysis} style={{marginTop: "70vh"}}>
      <div className={styles["analysis__column-rows-wrapper"]}>
        <h3
          ref={rowHeadingRef}
          className={`${styles.analysis__title} ${
            rowHeadingInView ? styles["analysis__row--show"] : ""
          }`}
        >
          {t("analysisBlock.competitiveAnalysis")}
        </h3>
        <div className={styles["analysis__column-rows"]}>
          <div
            className={`${styles.analysis__row} ${
              rowHeadingInView ? styles["analysis__row--show"] : ""
            }`}
          >
            {t("analysisBlock.smallDeposit")}
          </div>
          <div
            className={`${styles.analysis__row} ${
              rowHeadingInView ? styles["analysis__row--show"] : ""
            }`}
          >
            {t("analysisBlock.trustAndTransparency")}
          </div>
          <div
            className={`${styles.analysis__row} ${
              rowHeadingInView ? styles["analysis__row--show"] : ""
            }`}
          >
            {t("analysisBlock.revolvesAroundClientsSuccess")}
          </div>
          <div
            className={`${styles.analysis__row} ${
              rowHeadingInView ? styles["analysis__row--show"] : ""
            }`}
          >
            {t("analysisBlock.noUserInvolvement")}
          </div>
          <div
            className={`${styles.analysis__row} ${
              rowHeadingInView ? styles["analysis__row--show"] : ""
            }`}
          >
            {t("analysisBlock.noHiddenFees")}
          </div>
        </div>
      </div>

      <div
        className={`${styles.analysis__column} ${
          rowHeadingInView ? styles["analysis__column--show"] : ""
        }`}
      >
        <div className={styles["analysis__column-heading--green"]}>TSFC</div>
        <div className={styles.analysis__cells}>
          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--green"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--green"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--green"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--green"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--green"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--green"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--green"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--green"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--green"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--green"]}`}
            ></div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.analysis__column} ${
          rowHeadingInView ? styles["analysis__column--show"] : ""
        }`}
      >
        <div className={styles["analysis__column-heading"]}>
          {t("analysisBlock.copyTrading")}
        </div>
        <div className={styles.analysis__cells}>
          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--green"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--green"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--green"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--green"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--red"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--red"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--green"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--green"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--red"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--red"]}`}
            ></div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.analysis__column} ${
          rowHeadingInView ? styles["analysis__column--show"] : ""
        }`}
      >
        <div className={styles["analysis__column-heading"]}>
          {t("analysisBlock.tradingSignals1")}
          <br />
          {t("analysisBlock.tradingSignals2")}
        </div>
        <div className={styles.analysis__cells}>
          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--green"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--green"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--red"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--red"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--red"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--red"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--red"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--red"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--red"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--red"]}`}
            ></div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.analysis__column} ${
          rowHeadingInView ? styles["analysis__column--show"] : ""
        }`}
      >
        <div className={styles["analysis__column-heading"]}>
          {t("analysisBlock.professionalFunds1")}
          <br />
          {t("analysisBlock.professionalFunds2")}
        </div>
        <div className={styles.analysis__cells}>
          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--red"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--red"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--red"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--red"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--red"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--red"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--green"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--green"]}`}
            ></div>
          </div>

          <div
            className={`${styles["analysis__cell-wrapper"]} ${
              rowHeadingInView ? styles["analysis__cell-wrapper--show"] : ""
            } ${styles["analysis__cell-wrapper--red"]}`}
          >
            <div
              className={`${styles["analysis__cell"]} ${styles["analysis__cell--red"]}`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisBlock;
