import { useState } from "react";
import "./styles.scss";

export const Header = () => {
  const [statusNav, setStatusNav] = useState(false);

  function showOrHiddenNav() {
    const i_burguer = document.querySelector(".icon-burger");
    const card_burger = document.querySelector(".card-nav");

    if (statusNav) {
      i_burguer.className = "icon-burger";
      card_burger.className = "card-nav";
      setStatusNav(false);
    } else {
      i_burguer.className = "icon-burger open-icon-burger";
      card_burger.className = "card-nav open-card";
      setStatusNav(true);
    }
  }

  return (
    <header>
      <a href="/" className="title-header">
        Nicolas DEV
      </a>

      <nav>
        <a href="#work-sec">Projetos</a>
        <a href="#about-me-sec">Sobre</a>
        <a href="#connect-sec">Contato</a>
      </nav>

      <div className="humburger-nav">
        <div className="icon-burger" onClick={showOrHiddenNav}>
          <span></span>
          <span></span>
        </div>

        <div className="card-nav">
          <a href="#work-sec">Projetos</a>
          <a href="#about-me-sec">Sobre</a>
          <a href="#connect-sec">Contato</a>
        </div>
      </div>
    </header>
  );
};
