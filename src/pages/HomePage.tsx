import { useEffect, useState } from "react";

import Cookies from "js-cookie";

import Banner from "@components/Banner/Banner";
import FinancialServicesSection from "@components/FinancialServicesSection/FinancialServicesSection";

import MainLogo from "@/components/MainLogo/MainLogo";
// import MoneyPathBlock from "@/components/MoneyPathBlock/MoneyPathBlock";
// import DescriptionBlock from "@/components/DescriptionBlock/DescriptionBlock";
// import AdvantagesSection from "@/components/AdvantagesSection/AdvantagesSection";
import ScrollBlock from "@/components/ScrollBlock/ScrollBlock";
import AnalysisBlock from "@/components/AnalysisBlock/AnalysisBlock";
import FaqBlock from "@/components/FaqBlock/FaqBlock";
// import FirstStepBlock from "@/components/FirstStepBlock/FirstStepBlock";
import { CookiesModal } from "@/common/Modal/CookiesModal";
import Header from "@/components/Header/Header";
// import ParallaxBackground from "@/components/ParallaxBackground/ParallaxBackground";
import BackgroundDivider from "@/components/BackgroundDivider/BackgroundDivider";
import ParallaxOnStart from "@components/ParallaxOnStart/ParallaxOnStart.tsx";
// import PartnersBlock from "@components/Partners/Partners.tsx";
import StepBlocks from "@/components/StepBlocks/StepBlocks";
import NewSlider from "@/components/NewSlider/NewSlider";


const HomePage = ({ lang }: { lang: string }) => {
  const cookies = Cookies.get("cookies");

  const [isOpen, setIsOpen] = useState(!cookies);

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (cookies) {
      setIsOpen(false);
    }
  }, []);
  return (
    <>
      <MainLogo />
      <Header lang={lang} />
      <Banner id="bannerId" />
      <BackgroundDivider />
      {/*<ParallaxBackground />*/}
      <ParallaxOnStart />
      <NewSlider />
      {/* <ScrollBlock />  */}
      {/* <MoneyPathBlock /> */}
      {/* <DescriptionBlock /> */}
      {/* <AdvantagesSection /> */}
      {/* <PartnersBlock /> */}
      <StepBlocks />
      {/* <FirstStepBlock /> */}
      <AnalysisBlock />
      <FaqBlock />
      <FinancialServicesSection id="financialServicesSectionId" />
      <CookiesModal isOpen={isOpen} onClose={handleCloseModal} />
       {/*<ScrollButton />*/}
    </>
  );
};

export default HomePage;
