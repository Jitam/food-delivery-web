import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuList = [
    { id: 1, name: "home" },
    { id: 2, name: "menu" },
    { id: 3, name: "mobile-app" },
    { id: 4, name: "contact-us" },
  ];

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu(item.name)}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu(item.name)}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu(item.name)}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu(item.name)}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Tomato Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>signin</button>
      </div>
    </div>
  );
};

export default Navbar;
