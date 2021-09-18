import React from "react"
import TrailTeaser from "../../trail-teaser/TrailTeaser"

const TrailsList = ({ items }) => {
  return (
    <section className="trails trail-teaser-list">
      {items.map((node) => {
        return <TrailTeaser key={node.id} node={node} />
      })}
    </section>
  )
}

export default TrailsList
