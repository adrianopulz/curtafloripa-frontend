import React, { useState } from "react"
import { Link } from "gatsby"
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from "../../dark-mode-toggle";

import "../menu.scss"
import "./main.scss"

const MainMenu = () => {
  const [menuStatus, setMenuStatus] = useState(false)
  const darkMode = useDarkMode(false);
  let classes = "menu"

  if (menuStatus) {
    classes += " opened"
  }

  return (
    <div className="navigation">
      <DarkModeToggle
        onChange={darkMode.toggle}
        checked={darkMode.value}
        size={70}
        className="dark-mode-toggle"
      />
      <button id={"hamburger"} onClick={() => setMenuStatus(true)}><i>MENU</i></button>
      <nav className={classes} id={"main-menu"}>
        <button id={"closeMenu"} onClick={() => setMenuStatus(false)}>
          X
        </button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/praias">Praias</Link>
          </li>
          <li>
            <Link to="/trilhas">Trilhas</Link>
          </li>
          <li>
            <Link to="/onde-ficar">Onde Ficar</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainMenu
