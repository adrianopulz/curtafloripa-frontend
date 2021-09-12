import React from "react"
import Card from "../../card/Card"

const BeachesList = ({ items }) => {
  return (
    <section className="beaches cards-list">
      {items.map((value) => {
        return <Card key={value.id} node={value} />
      })}
    </section>
  )
}

export default BeachesList
