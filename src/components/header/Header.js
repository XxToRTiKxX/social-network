import React from "react";
import "./Header.css";
import logo from "../img/logo.png";

function Header(){
    return(
      <div className="header">
        <img src={logo}></img>
      </div>
    )
}
export default Header;