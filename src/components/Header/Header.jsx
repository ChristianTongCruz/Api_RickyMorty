import React from "react";
import logo from "../../img/logo.svg";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="logo_rick_morty" />
        </a>
      </div>
      <div className="docs">
        <a href="#">
          <p>Docs</p>
        </a>
        <a href="#">
          <p>About</p>
        </a>
        <a href="#">
          <button>SUPPORT US</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
