import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { gsap, ScrollTrigger } from "gsap/all";

import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentLanguage, setLanguage } from "@/features/languageSlice";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/common/LanguageSwitcher/LanguageSwitcher";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import LoginBlock from "../LoginBlock/LoginBlock";
import BurgerMenuButton from "@/common/BurgerMenuButton/BurgerMenuButton";

interface Props {
  lang: string;
  hideNavigation?: boolean;
}

gsap.registerPlugin(ScrollTrigger);


const Header = ({ lang, hideNavigation }: Props) => {
  const headerRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>();

  const isMobile = window.matchMedia("(max-width: 1060px)").matches;

  const { i18n } = useTranslation();

  const currentLanguage = useSelector(selectCurrentLanguage);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = (): void => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  const handleLanguageChange = (selectedLanguage: string | undefined) => {
    dispatch(setLanguage(selectedLanguage));
    i18n.changeLanguage(selectedLanguage);
    navigate(`/${selectedLanguage}${hideNavigation ? "/faq" : ""}`);
  };

  useEffect(() => {
    // чтобы при перезагрузке вставлялся язык из state
    i18n.changeLanguage(currentLanguage);

    if (lang && lang !== currentLanguage) {
      dispatch(setLanguage(lang));
      i18n.changeLanguage(lang);
    }
  }, [lang, currentLanguage, i18n, dispatch]);

  useLayoutEffect(() => {
    let headerAnimation: gsap.core.Tween | null = null; // Объявляем переменную вне функций

    const updateHeaderPosition = () => {
    headerAnimation = gsap.to(headerRef.current, {
      marginTop: "2rem", // Сдвиг вверх
      duration: 0.3,
      ease: "power1.out",
      paused: true,
    });}

    // Вызываем сразу, чтобы рассчитать изначальную высоту
    updateHeaderPosition();

    // Добавляем слушатель события resize
    window.addEventListener("resize", updateHeaderPosition);

    let header_trigger = ScrollTrigger.create({
      trigger: "#bannerId",
      start: "top top",
      end: "bottom top",
      // markers: true,
      onUpdate: (self) => {
        if (self.direction === 1) {
          // Прокрутка вниз
          headerAnimation?.play();
        } else if (self.direction === -1) {
          // Прокрутка вверх
          headerAnimation?.reverse();
        }
      },
    });
  
    return () => {
      header_trigger.kill(); // Убираем триггеры при размонтировании
    };
  }, []);

  return (
    <header className={"header__wrapper"}>
      <div
        ref = {headerRef}
        className={`header${
          isMenuOpen === undefined && isMobile ? " closeMenu" : ""
        }${isMenuOpen === true && isMobile ? " showMenu" : ""}${
          isMenuOpen === false && isMobile ? " hideMenu" : ""
        }`}
      >
        {!hideNavigation && <Navbar setIsMenuOpen={setIsMenuOpen} />}

        <LanguageSwitcher
          languages={["eng", "ru", "pol"]}
          defaultLanguage={currentLanguage}
          onChange={handleLanguageChange}
          toggleMenu={toggleMenu}
        />

        <LoginBlock />
      </div>

      <div className="burgerMenuWrapper">
        <BurgerMenuButton isMenuOpen={!!isMenuOpen} handleToggle={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
