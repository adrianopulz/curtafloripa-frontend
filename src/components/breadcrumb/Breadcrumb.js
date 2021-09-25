import React from "react"
import { Link } from "gatsby"

import "./breadcrumb.scss"
import ArrowRight from "../svgs/ArrowRight"

const renderBreadcrumbItem = (item, index) => {
  if (item.link) {
    return (
      <li key={index}>
        <Link to={item.link}>{item.value}</Link>
        <ArrowRight />
      </li>
    )
  } else {
    return <li key={index}>{item.value}</li>
  }
}

const Breadcrumb = ({ links }) => {
  return (
    <div className="breadcrumb">
      <ul>
        <li key="label">Você esta aqui:</li>
        <li key="home">
          <Link to={"/"}>HOME</Link>
          <ArrowRight />
        </li>
        {links.map(renderBreadcrumbItem)}
      </ul>
    </div>
  )
}

export default Breadcrumb
