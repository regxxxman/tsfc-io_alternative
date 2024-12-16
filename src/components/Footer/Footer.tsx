import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

import Copyright from "@common/Copyright/Copyright";
import SocialIcon from "@common/SocialIcon/SocialIcon";
import { SvgIcon } from "@common/SvgIcon/SvgIcon";

import "./footer.scss";
import { getLinkToDocument } from "@/helpers/getLinkToDocument";

const footerLinks = [
  { key: "privacy-policy", label: "footer.userAgreementLink" },
  { key: "kyc-policy", label: "footer.kycPolicyLink" },
  { key: "terms-of-services", label: "footer.termsOfServices" },
];
const email = import.meta.env.VITE_EMAIL;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footerWrapper">
        <div className="footerTopPart">
          <Link to="/" className="footerLogo">
            <SvgIcon src="logo.svg" height="30" />
          </Link>
          <nav className="footerNav">
            <NavLink
              className="footerLink"
              to={`mailto:${email}`}
              target="_blank"
            >
              {t("footer.supportLink")}
            </NavLink>
            {footerLinks.map((link) => (
              <a
                key={link.key}
                className="footerLink"
                href={getLinkToDocument(link.key)}
                target="_blank"
                rel="nofollow"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>
        </div>
        <div className="footerLine"></div>
        <div className="footerBottomPart">
          <Copyright className="footerCopyright" />
          <div className="footerSocialLinkSection">
            <SocialIcon />
          </div>
        </div>
      </div>
      {/* <div className="gradient"></div> */}
    </footer>
  );
};

export default Footer;
