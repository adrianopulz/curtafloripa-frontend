import React from "react"
import Logo from "../assets/svgs/logo.svg"
import "../global.css"

export default function Home() {
  return (
    <div className={"logo"}>
      <img src={Logo} alt="Curta Floripa" />
      <p>Em Construção.</p>
    </div>
  )
}
