import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}
