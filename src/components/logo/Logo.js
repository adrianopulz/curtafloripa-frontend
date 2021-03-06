import React from "react"
import { Link } from "gatsby"

import "./logo.scss"
import url from "../../assets/svgs/logo.svg"

const Logo = () => {
  return (
    <figure className={"logo"}>
      <Link to={"/"}>
        <img width="218px" height="70px" src={url} alt="Curta Floripa" />
      </Link>
    </figure>
  )
}

export default Logo
