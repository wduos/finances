import "./Header.css";
import logo from "/logo.svg";
import logoWhite from "/logo_white.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logoWhite} alt="Logomarca da empresa" />
      </Link>
    </header>
  );
};

export default Header;
