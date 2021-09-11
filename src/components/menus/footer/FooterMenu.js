import React from "react"
import { Link } from "gatsby"

import "../menu.scss"
import "./footer-menu.scss"

const FooterMenu = () => {
  return (
    <nav className={"menu"} id={"footer-menu"}>
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
  )
}

export default FooterMenu
