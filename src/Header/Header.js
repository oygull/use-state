import React from "react";
import './Header.css';
import HeaderTop from "./HeaderTop";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";

function Header(){
  return(
    <div className="header">
      <HeaderTop/>
      <MainHeader/>
      <Navbar/>
    </div>
  )
}

export default Header;