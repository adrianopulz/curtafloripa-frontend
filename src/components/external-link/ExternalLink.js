import React from "react"
import ExternalLinkIcon from "../svgs/ExternalLinkIcon"

import "./external-link.scss"

const ExternalLink = ({url, value, btn, label = ''}) => {
  let classes = 'external-link'
  if (btn) {
    classes = classes + ' btn'
  }
  return (
    <a href={url} target="_blank" className={classes} rel="noreferrer" aria-label={label}>
      <span><ExternalLinkIcon /> { value }</span>
    </a>
  )
}

export default ExternalLink