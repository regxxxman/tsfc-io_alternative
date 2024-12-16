import { SvgIcon } from "@/common/SvgIcon/SvgIcon";
import { Link } from "react-router-dom";

import "./mainLogo.scss";

const MainLogo = () => {
  return (
    <Link to="/">
      <SvgIcon src="logo.svg" className="headerLogo" />
    </Link>
  );
};

export default MainLogo;
