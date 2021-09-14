import React from "react"
import ExternalLinkIcon from "../svgs/ExternalLinkIcon"

import "./external-link.scss"

const ExternalLink = ({url, value, btn}) => {
  let classes = 'external-link'
  if (btn) {
    classes = classes + ' btn'
  }
  return (
    <a href={url} target="_blank" className={classes} rel="noreferrer">
      <span><ExternalLinkIcon /> { value }</span>
    </a>
  )
}

export default ExternalLink