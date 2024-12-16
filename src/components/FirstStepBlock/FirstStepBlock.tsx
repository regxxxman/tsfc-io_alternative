import { Image } from "@/common/Image/Image";
import styles from "./FirstStepBlock.module.scss";
import { SvgIcon } from "@/common/SvgIcon/SvgIcon";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useLayoutEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

interface TranslationData {
    stepOne: string;
    installTheAppPart1: string;
    installTheAppSpan: string;
    installTheAppPart2: string;
    downloadAndInstallTheApp: string;
    getTheApp: string;
    watchVideoGuide: string;
}

const FirstStepBlock = () => {
    const { t, i18n } = useTranslation();
    const isMobile = window.matchMedia("(max-width: 730px)").matches;

    const StepData = [
        {
            id: 1,
            name: "firstStepBlock",
            image: "firstStep.jpg",
            imageWebp: "firstStep.webp",
            image2x: "firstStep2X.png",
        },
        {
            id: 2,
            name: "secondStepBlock",
            image: "firstStep.jpg",
            imageWebp: "firstStep.webp",
            image2x: "firstStep2X.png",
        },
        {
            id: 3,
            name: "thirdStepBlock",
            image: "firstStep.jpg",
            imageWebp: "firstStep.webp",
            image2x: "firstStep2X.png",
        },
        {
            id: 4,
            name: "fourthStepBlock",
            image: "firstStep.jpg",
            imageWebp: "firstStep.webp",
            image2x: "firstStep2X.png",
        },
    ];

    // Типизация translations: ключ — id (number), значение — TranslationData
    const [translations, setTranslations] = useState<Record<number, TranslationData>>({});

    useEffect(() => {
        // Функция обновления переводов
        const updateTranslations = () => {
            const newTranslations: Record<number, TranslationData> = {};
            StepData.forEach((step) => {
                newTranslations[step.id] = {
                    stepOne: t(`${step.id}StepBlock.stepOne`),
                    installTheAppPart1: t(`${step.id}StepBlock.installTheAppPart1`),
                    installTheAppSpan: t(`${step.id}StepBlock.installTheAppSpan`),
                    installTheAppPart2: t(`${step.id}StepBlock.installTheAppPart2`),
                    downloadAndInstallTheApp: t(`${step.id}StepBlock.downloadAndInstallTheApp`),
                    getTheApp: t(`${step.id}StepBlock.getTheApp`),
                    watchVideoGuide: t(`${step.id}StepBlock.watchVideoGuide`),
                };
            });
            setTranslations(newTranslations);
        };

        // Обновляем переводы при изменении языка
        updateTranslations();
        i18n.on('languageChanged', updateTranslations);

        // Удаляем обработчик при размонтировании
        return () => i18n.off('languageChanged', updateTranslations);
    }, []);

    useLayoutEffect(() => {
        // gsap.from("#kek1 p", {
        //     stagger: {
        //         each:0.25,
        //           from: "start"
        //         },
        //     background: "red",
        //     scrollTrigger: {
        //         start: "top top",
        //         trigger: "#kek1",
        //         markers: true,
        //     }
        // })
        ScrollTrigger.create(
            {
                trigger: "#triggerBox1",
                markers: true,
                pin: "#pin1",
 
            }
        )
    
    }, []);
    

    return (
        <div id="howToStart">
            {StepData.map((step) => (
                <div key={step.id} id={`triggerBox${step.id}`} style={{minHeight: "150vh"}}>
                <section key={step.id} id={`pin${step.id}`} className={styles["first-step"]} >
                    <div id={`kek${step.id}`} className={styles["first-step__left-part"]}>
                        <h3 className={styles["first-step__heading"]}>
                            {translations[step.id]?.stepOne}
                        </h3>
                        <p className={styles["first-step__main-text"]}>
                            {translations[step.id]?.installTheAppPart1}{" "}
                            <span>{translations[step.id]?.installTheAppSpan}</span>{" "}
                            {translations[step.id]?.installTheAppPart2}
                        </p>
                        <p className={styles["first-step__sub-text"]}>
                            {translations[step.id]?.downloadAndInstallTheApp}
                        </p>
                        {!isMobile && (
                            <a
                                href="https://app.tsfc.io/"
                                target="_blank"
                                className={styles["first-step__button"]}
                            >
                                {translations[step.id]?.getTheApp}
                            </a>
                        )}
                        {!isMobile && (
                            <div className={styles["first-step__link-container"]}>
                                <a
                                    href="https://www.youtube.com/watch?v=jhAT3jeLVEk"
                                    target="_blank"
                                    className={styles["first-step__link"]}
                                >
                                    {translations[step.id]?.watchVideoGuide}
                                </a>
                                <SvgIcon src="externalLinkIcon.svg" />
                            </div>
                        )}
                    </div>

                    <Image
                        className={styles["first-step__image"]}
                        image={step.image}
                        imageWebp={step.imageWebp}
                        image2x={step.image2x}
                        alt="Photo from store"
                    />
                    {isMobile && (
                        <div className={styles["first-step__mobile-links"]}>
                            <a
                                href="https://app.tsfc.io/"
                                target="_blank"
                                className={styles["first-step__button"]}
                            >
                                {translations[step.id]?.getTheApp}
                            </a>
                            <div className={styles["first-step__link-container"]}>
                                <a
                                    href="https://www.youtube.com/watch?v=jhAT3jeLVEk"
                                    target="_blank"
                                    className={styles["first-step__link"]}
                                >
                                    {translations[step.id]?.watchVideoGuide}
                                </a>
                                <SvgIcon
                                    src="externalLinkIcon.svg"
                                    className={styles["first-step__link-icon"]}
                                />
                            </div>
                        </div>
                    )}
                </section>
                </div>
            ))}
        </div>
    );
};

export default FirstStepBlock;
