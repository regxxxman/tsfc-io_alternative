import styles from "./Partners.module.scss";
import { Image } from "@common/Image/Image.tsx";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

interface TranslationData {
    partnersTitle: string;
}

const imageData = [
    {
        id: 1,
        image: "Capital_Horizontal_Logo.png",
        image2x: "Capital_Horizontal_Logo.png",
        imageWebp: "Capital_Horizontal_Logo.png",
    },
    {
        id: 2,
        image: "Dyor_Logo.png",
        image2x: "Dyor_Logo.png",
        imageWebp: "Dyor_Logo.png",
    },
    {
        id: 3,
        image: "Midle_Logo.png",
        image2x: "Midle_Logo.png",
        imageWebp: "Midle_Logo.png",
    },
    {
        id: 4,
        image: "Capital_Horizontal_Logo.png",
        image2x: "Capital_Horizontal_Logo.png",
        imageWebp: "Capital_Horizontal_Logo.png",
    },
    {
        id: 5,
        image: "Dyor_Logo.png",
        image2x: "Dyor_Logo.png",
        imageWebp: "Dyor_Logo.png",
    },
    {
        id: 6,
        image: "Midle_Logo.png",
        image2x: "Midle_Logo.png",
        imageWebp: "Midle_Logo.png",
    },
    {
        id: 7,
        image: "Capital_Horizontal_Logo.png",
        image2x: "Capital_Horizontal_Logo.png",
        imageWebp: "Capital_Horizontal_Logo.png",
    },
    {
        id: 8,
        image: "Dyor_Logo.png",
        image2x: "Dyor_Logo.png",
        imageWebp: "Dyor_Logo.png",
    },
];

const Partners = () => {

    const { t, i18n } = useTranslation();
    const [translation, setTranslation] = useState<TranslationData>({ partnersTitle: "" });

    useEffect(() => {
        // Функция обновления перевода
        const updateTranslation = () => {
            setTranslation({ partnersTitle: t("Partners.partnersTitle") });
        };

        // Инициализируем перевод
        updateTranslation();

        // Обновляем перевод при изменении языка
        i18n.on("languageChanged", updateTranslation);

        // Удаляем обработчик при размонтировании
        return () => i18n.off("languageChanged", updateTranslation);
    }, []);

    return (
        <div className={styles.container}>
            <h3 className={styles.secondary}>{translation.partnersTitle}</h3>
            <div style={{paddingTop: "75px"}} className={styles.wrapper}>
                {imageData.map((data) => (
                    <Image
                        key={data.id}
                        className={`${styles.item_left} ${styles[`item${data.id}`]}`}
                        image={data.image}
                        image2x={data.image2x}
                        imageWebp={data.imageWebp}
                    />
                ))}
            </div>
            <div style={{paddingTop: "75px"}} className={styles.wrapper}>
                {imageData.map((data) => (
                    <Image
                        key={data.id}
                        className={`${styles.item_right} ${styles[`item${data.id}`]}`}
                        image={data.image}
                        image2x={data.image2x}
                        imageWebp={data.imageWebp}
                    />
                ))}
            </div>
        </div>
    );
};

export default Partners;
