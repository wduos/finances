import "./Header.css";
import logo from "/logo_sqr.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="limiter">
        <Link to="/">
          <img src={logo} alt="Logomarca da empresa" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
