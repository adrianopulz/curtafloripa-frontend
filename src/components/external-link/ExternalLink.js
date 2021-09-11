import React from "react"
import ExternalLinkIcon from "../svgs/ExternalLinkIcon"

import "./external-link.scss"

const ExternalLink = ({url, value}) => {
  return (
    <a href={url} target="_blank" className={"external-link"}>
      <span><ExternalLinkIcon /> { value }</span>
    </a>
  )
}

export default ExternalLink