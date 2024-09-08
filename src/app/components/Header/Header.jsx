"use client";
import React, { useEffect, useState } from "react";
import openMenu from "./../../assets/svg/Hamb.svg";
import cart from "./../../assets/svg/cart.svg"
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [displayState, setDisplayState] = useState();
  const display = { display: displayState };

  useEffect(() => {
    const body = document.body;
    const openMenu = document.getElementsByClassName("openMenu")[0];
    const closeMenu = document.getElementsByClassName("closeMenu")[0];

    if (displayState === "flex") {
      body.style.overflow = "hidden";
      openMenu.style.display = "none";
      closeMenu.style.display = "block";
    } else {
      body.style.overflow = "auto";
      openMenu.style.display = "";
      closeMenu.style.display = "none";
    }
  }, [display]);
  return (
    <header>
      <div onClick={() => setDisplayState("flex")} className="openMenu">
        <img src={openMenu.src} />
      </div>
      <div onClick={() => setDisplayState("none")} className="closeMenu">
        <FaXmark />
      </div>
      <div className="logo"><a href="/">Book.</a></div>
      <nav style={display} className="mainMenu">
        <ul className="menu">
          <li className="active"> <a href="/">Accueil</a></li>
          <li><a href="#achete">Acheter</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cart">
        <img src={cart.src}/>
      </div>
    </header>
  );
};
export default Header;
