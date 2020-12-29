import React, { useState } from "react"
import { Link } from "gatsby"

import "../menu.scss"
import "./main.scss";
import { classNames } from "@splidejs/react-splide/src/js/utils"

export default () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const navClasses = classNames({
    'menu': true,
    'opened': menuStatus
  });

  return (
    <>
      <button id={"hamburger"} onClick={ () => setMenuStatus(true) }><i>MENU</i></button>
      <nav className={ navClasses } id={"main-menu"}>
        <button id={"closeMenu"} onClick={ () => setMenuStatus(false) }>X</button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/praias">Praias</Link></li>
          <li><Link to="/">Trilhas</Link></li>
          <li><Link to="/">Onde Ficar</Link></li>
        </ul>
      </nav>
    </>
  );
}