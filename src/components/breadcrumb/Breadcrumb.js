import React from "react"
import { Link } from "gatsby"

import "./breadcrumb.scss"
import ArrowRight from "../svgs/ArrowRight"

const renderBreadcrumbItem = item => {
  if (item.link) {
    return (
      <li>
        <Link to={item.link}>{item.value}</Link>
        <ArrowRight />
      </li>
    )
  } else {
    return <li>{item.value}</li>
  }
}

const Breadcrumb = ({ links }) => {
  return (
    <div className="breadcrumb">
      <ul>
        <li>Você esta aqui:</li>
        <li>
          <Link to={"/"}>HOME</Link>
          <ArrowRight />
        </li>
        {links.map(renderBreadcrumbItem)}
      </ul>
    </div>
  )
}

export default Breadcrumb
