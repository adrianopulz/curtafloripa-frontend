import React from "react"
import ExternalLink from "../../external-link/ExternalLink"

import './external-links-list.scss'

const ExternalLinkList = ({items}) => {
  return (
    <ul className={"external-link-list"}>
      {items.map((item, index) => {
        return (
          <li key={index} className={"link-item"}><ExternalLink url={item.url} value={item.value} /></li>
        )
      })}
      
    </ul>
  )
}

export default ExternalLinkList