import React from "react"
import { Link } from "gatsby"

import "../menu.scss"
import "./main.scss";

export default () => {
  return (
    <nav className={"menu"} id={"main-menu"}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/praias">Praias</Link></li>
        <li><Link to="/">Trilhas</Link></li>
        <li><Link to="/">Onde Ficar</Link></li>
      </ul>
    </nav>
  );
}