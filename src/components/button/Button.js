import React from "react"
import { Link } from "gatsby"

import "./button.scss"

const Button = ({ path, value }) => {
  return (
    <Link className={"btn"} to={path}>
      {value}
    </Link>
  )
}

export default Button
