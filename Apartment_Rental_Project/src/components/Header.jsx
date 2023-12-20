import React from "react";
import "/src/styles/Header.css";
import Logo from "../assets/Logo.png";
import MenuIcon from "../assets/Menu.png";

function Header() {
  return (
    <div className="HeaderDiv">
      <h1>M&H Rental Admin Dashboard</h1>
      <img src={Logo}></img>
      <p>Designed by Miguel & Haris</p>
    </div>
  );
}

export default Header;
