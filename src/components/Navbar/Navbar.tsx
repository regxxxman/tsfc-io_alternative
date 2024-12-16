import { Dispatch, SetStateAction, useState, useRef, useEffect, useLayoutEffect } from "react";
import "./navbar.scss";
import { useTranslation } from "react-i18next";
import { ScrollTrigger, gsap } from "gsap/all";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  setIsMenuOpen: Dispatch<SetStateAction<boolean | undefined>>;
}

const Navbar = ({ setIsMenuOpen }: Props) => {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.hash.split("#")[1] || "bannerId");
  const [dimensions, setDimensions] = useState({ marginLeft: 0, width: 0 });
  const { t } = useTranslation();
  const navigate = useNavigate();

  const refs = useRef([
    { id: "bannerId", name: "home" },
    { id: "about", name: "about" },
    { id: "howToStart", name: "howToStart" },
    { id: "faq", name: "faq" },
    { id: "financialServicesSectionId", name: "contactUs" },
  ].map(item => ({ ...item, ref: useRef<HTMLAnchorElement>(null) })));

  const getWidthMargin = (id: string): { marginLeft: number; width: number } => {
    const index = refs.current.findIndex((item) => item.id === id);
    if (index === -1) return { marginLeft: 0, width: 0 };

    const marginLeft = refs.current
      .slice(0, index)
      .reduce((acc, { ref }) => acc + (ref.current ? ref.current.clientWidth : 0), 0);

    const width = refs.current[index]?.ref.current?.clientWidth || 0;
    return { marginLeft, width };
  };

  const updateDimensions = () => {
    const route = window.location.hash.split("#")[1] || "bannerId";
    setDimensions(getWidthMargin(route));
  };

  useEffect(() => {
    const handleResize = () => updateDimensions();

    updateDimensions();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [t]);

  useLayoutEffect(() => {
    refs.current.forEach(({ ref, id }) => {
      const element = ref.current;
      if (!element) return;

      const handleScrollTrigger = (direction: "enter" | "enterBack") => {
        setCurrentRoute(id);
        
        // Удаляем активный класс с других элементов
        document
          .querySelectorAll(".navbar__item--active")
          .forEach((el) => el.classList.remove("navbar__item--active"));
        
        // Добавляем активный класс текущему элементу
        ref.current?.classList.add("navbar__item--active");
      
        // Меняем анимацию в зависимости от направления
        const animationProps = direction === "enter" ? {
          marginLeft: getWidthMargin(id).marginLeft,
          width: getWidthMargin(id).width - 5,
          duration: 0.1,
          ease: "power2.out",
        } : {
          marginLeft: getWidthMargin(id).marginLeft + 10, // немного смещаем назад, например
          width: getWidthMargin(id).width - 10, // уменьшаем ширину при возвращении
          duration: 0.3,
          ease: "power2.in",
        };
      
        // Применяем анимацию
        gsap.to(".selection_new", animationProps);
      };

      ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => handleScrollTrigger("enter"),
        onEnterBack: () => handleScrollTrigger("enterBack"),
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const handleClickLink = (id: string): void => {
    setCurrentRoute(id);
    setIsMenuOpen(false);
    navigate(`#${id}`);
    
    document
      .querySelectorAll(".navbar__item--active")
      .forEach((el) => el.classList.remove("navbar__item--active"));
    refs.current.find((item) => item.id === id)?.ref.current?.classList.add("navbar__item--active");

    gsap.to(".selection_new", {
      marginLeft: getWidthMargin(id).marginLeft,
      width: getWidthMargin(id).width - 5,
      duration: 0.1,
      ease: "power2.out",
    });
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {refs.current.map(({ id, ref, name }) => (
          <li key={id}>
            <a
              ref={ref}
              href={`#${id}`}
              className={`navbar__item ${currentRoute === id ? "navbar__item--active" : ""}`}
              onClick={() => handleClickLink(id)}
            >
              {t(`navbar.${name}`)}
            </a>

            {id !== "financialServicesSectionId" && <div className="navbar__divider"></div>}
          </li>
        ))}
      </ul>
      <div className="selection__wrapper_new">
        <div
          className="selection_new"
          style={{
            marginLeft: dimensions.marginLeft,
            width: dimensions.width - 5,
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
