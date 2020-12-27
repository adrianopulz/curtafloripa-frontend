import React from "react"

import Logo from "../../logo/Logo"
import MainNav from "../../menus/main/Main";

import "./header.scss";

export default () => {
  return (
    <header id={"header"}>
      <div className={"container"}>
        <Logo />
        <MainNav />
      </div>
    </header>
  );
}
