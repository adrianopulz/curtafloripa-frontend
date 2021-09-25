import React from "react"
import Logo from "../../logo/Logo"
import MainNav from "../../menus/main/Main"

import "./header.scss"

const Hero = () => {
  return (
    <header id={"header"} className={"header"}>
      <div className={"container"}>
        <Logo />
        <MainNav />
      </div>
    </header>
  )
}

export default Hero
