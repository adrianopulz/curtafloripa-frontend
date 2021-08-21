import React from "react"

import Logo from "../../logo/Logo"
import MainNav from "../../menus/main/Main"

import "./header.scss"

const HeroHome = () => {
  return (
    <header id={"header-home"} className={"header"}>
      <div className={"container"}>
        <Logo />
        <MainNav />
      </div>
    </header>
  )
}

export default HeroHome
