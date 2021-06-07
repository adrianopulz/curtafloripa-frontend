import React from "react"
import { Link } from "gatsby"

import "../menu.scss"
import "./footer-menu.scss";

const FooterMenu = () => {
  return (
    <nav className={"menu"} id={"footer-menu"}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/praias">Praias</Link></li>
        <li><Link to="/">Trilhas</Link></li>
        <li><Link to="/em-breve">Onde Ficar</Link></li>
        <li><Link to="/em-breve">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default FooterMenu;