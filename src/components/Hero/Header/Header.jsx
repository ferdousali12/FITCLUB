import React, { useState } from "react";
import "./Header.css";
import Logo from "../../../assets/logo.png";
import Bars from "../../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  const navLinks = [
    { label: "Home", to: "home" },
    { label: "Programs", to: "programs" },
    { label: "Why Us", to: "reasons" },
    { label: "Plans", to: "plans" },
    { label: "Testimonials", to: "testimonials" },
  ];

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpened(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
