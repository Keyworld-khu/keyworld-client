import React from "react";
import logo from "../../assets/imgs/keyworld.png";
import "../../assets/css/header.css";

const Header = () => {
  return (
    <div className="header mr-0">
      <img className="header-logo" src={logo} />
    </div>
  );
};

export default Header;
