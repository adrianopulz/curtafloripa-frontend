import React from "react"
import Card from "../../card/Card"

const TrailsList = ({ items }) => {
  return (
    <section className="trails cards-list">
      {items.map((value) => {
        return <Card key={value.id} node={value} />
      })}
    </section>
  )
}

export default TrailsList
