import style from "./StepBlocks.module.scss";
import { Image } from "@/common/Image/Image";
import { useState, useEffect, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/all";
import AnimatedText from "../AnimatedText/AnimatedText";
// import { useNavigate } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger, TextPlugin);

interface TranslationData {
    stepOne: string;
    installTheAppPart1: string;
    installTheAppSpan: string;
    installTheAppPart2: string;
    downloadAndInstallTheApp: string;
    getTheApp: string;
    watchVideoGuide: string;
}

const StepBlocks = () => {
    const { t, i18n } = useTranslation();
    // const isMobile = window.matchMedia("(max-width: 730px)").matches;

    // const navigate = useNavigate();


    const [stepActive, setStepActive] = useState(1);
    const [translations, setTranslations] = useState<Record<number, TranslationData>>({});

    const [scrollProgress, setscrollProgress] = useState(0);

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
          image: "secondStep.png",
          imageWebp: "secondStep.webp",
          image2x: "firstStep2X.png",
      },
      {
          id: 3,
          name: "thirdStepBlock",
          image: "thirdStep.png",
          imageWebp: "thirdStep.webp",
          image2x: "firstStep2X.png",
      },
      {
          id: 4,
          name: "fourthStepBlock",
          image: "fourthStep.png",
          imageWebp: "fourthStep.webp",
          image2x: "firstStep2X.png",
      },
      {
        id: 5,
        name: "fiveStepBlock",
        image: "fiveStep.png",
        imageWebp: "fiveStep.webp",
        image2x: "firstStep2X.png",
        },
        {
        id: 6,
        name: "finalStepBlock",
        image: "finalStep.png",
        imageWebp: "finalStep.webp",
        image2x: "firstStep2X.png",
    },
  ];

    useEffect(() => {
        const updateTranslations = () => {
            const newTranslations: Record<number, TranslationData> = {};
            StepData.forEach((step) => {
                newTranslations[step.id] = {
                    stepOne: t(`${step.name}.stepOne`),
                    installTheAppPart1: t(`${step.name}.installTheAppPart1`),
                    installTheAppSpan: t(`${step.name}.installTheAppSpan`),
                    installTheAppPart2: t(`${step.name}.installTheAppPart2`),
                    downloadAndInstallTheApp: t(`${step.name}.downloadAndInstallTheApp`),
                    getTheApp: t(`${step.name}.getTheApp`),
                    watchVideoGuide: t(`${step.name}.watchVideoGuide`),
                };
            });
            setTranslations(newTranslations);
        };

        updateTranslations();
        i18n.on("languageChanged", updateTranslations);

        return () => i18n.off("languageChanged", updateTranslations);
    }, []);

    useLayoutEffect(() => {
        const triggerElement = document.getElementById("scrollBlock");
        const pinnedElement = document.getElementById("step");
        const imageElement = document.querySelector(`.${style.right} img`);
    
        let t1: gsap.core.Timeline | undefined;
    
        if (triggerElement && pinnedElement && imageElement) {
            t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top top",
                    end: "bottom 100%+300px",
                    scrub: true,
                    pin: pinnedElement,
                    pinSpacing: false,
                    markers: false,
                    onUpdate: (self) => {
                        const progress = self.progress * 100;
                        setscrollProgress(progress);
                        if (progress <= 16.6) setStepActive(1);
                        else if (progress > 16.6 && progress <= 33.3) setStepActive(2);
                        else if (progress > 33.3 && progress <= 50) setStepActive(3);
                        else if (progress > 50 && progress <= 66.6) setStepActive(4);
                        else if (progress > 66.6 && progress <= 83.3) setStepActive(5);
                        else if (progress > 83.3) setStepActive(6);
                    },
                },
            });
    
            // Анимация появления картинки
            gsap.fromTo(
                imageElement,
                { x: "20%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: imageElement,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
    
            ScrollTrigger.refresh();
        }
    
        return () => {
            if (t1?.scrollTrigger) t1.scrollTrigger.kill(); // Убиваем только текущий триггер
        };
    }, [stepActive, translations]);
    
    
    

    return (
        <div id="howToStart">
            <div className={style.scrollBlock} id="scrollBlock" style={{ height: `${StepData.length * 200}vh` }}
>
                <div id="step" className={style.container}>
                <div className={style["green-line"]} style={{width: `${scrollProgress}%`, opacity: `${scrollProgress}%`}}></div>
                    <div className={style.flex}>
                        <div className={style.left}>
                            <p className={style.step}>
                              <AnimatedText text={`${translations[stepActive]?.stepOne}`} />
                            </p>
                            <h4 className={style.mainText}>
                              <AnimatedText text={`${translations[stepActive]?.installTheAppPart1}`} />
                                <span className={style.color__secondary}><AnimatedText text={`${translations[stepActive]?.installTheAppSpan}`} /></span>
                                <AnimatedText text={`${translations[stepActive]?.installTheAppPart2}`} />
                            </h4>
                            <p className={style.secondText}><AnimatedText text={`${translations[stepActive]?.downloadAndInstallTheApp}`} /></p>
                            <button className={style.button}>{translations[stepActive]?.getTheApp}</button>
                            <p className={style.guide}>{translations[stepActive]?.watchVideoGuide}</p>
                        </div>
                        <div className={style.right}>
                            <Image
                                image={StepData[stepActive-1]?.image}
                                imageWebp={StepData[stepActive-1]?.imageWebp}
                                image2x={StepData[stepActive-1]?.image2x}
                                alt="Photo from store"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepBlocks;
