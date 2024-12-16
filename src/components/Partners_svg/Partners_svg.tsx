import styles from "./Partners_svg.module.scss";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

interface TranslationData {
    partnersTitle: string;
}

const svgData = [
    { id: 1, svg: "Capital_Horizontal_Logo.svg" },
    { id: 2, svg: "Dyor_Logo.svg" },
    { id: 3, svg: "Midle_Logo.svg" },
    { id: 4, svg: "Capital_Horizontal_Logo.svg" },
    { id: 5, svg: "Dyor_Logo.svg" },
    { id: 6, svg: "Midle_Logo.svg" },
    { id: 7, svg: "Capital_Horizontal_Logo.svg" },
    { id: 8, svg: "Dyor_Logo.svg" },
];

const Partners_svg = () => {
    const { t, i18n } = useTranslation();
    const [translation, setTranslation] = useState<TranslationData>({ partnersTitle: "" });

    useEffect(() => {
        const updateTranslation = () => {
            setTranslation({ partnersTitle: t("Partners.partnersTitle") });
        };

        updateTranslation();
        i18n.on("languageChanged", updateTranslation);

        return () => i18n.off("languageChanged", updateTranslation);
    }, [t, i18n]);

    return (
        <div className={styles.container}>
            <h3 className={styles.secondary}>{translation.partnersTitle}</h3>
            <div style={{ paddingTop: "75px" }} className={styles.wrapper}>
                {svgData.map((data) => (
                    <div
                        key={data.id}
                        className={`${styles.item_left} ${styles[`item${data.id}`]}`}
                    >
                        <img className={styles.img} src={`/icons/${data.svg}`} alt={`Partner ${data.id}`} />
                    </div>
                ))}
            </div>
            <div style={{ paddingTop: "75px" }} className={styles.wrapper}>
                {svgData.map((data) => (
                    <div
                        key={data.id}
                        className={`${styles.item_right} ${styles[`item${data.id}`]}`}
                    >
                        <img className={styles.img} src={`/icons/${data.svg}`} alt={`Partner ${data.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners_svg;
