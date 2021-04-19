import React from "react"
import Card from "../../card/Card"

const BeachesList = ({ items }) => {
  return (
    <section className="beaches cards-list">
      {items.map((value, index) => {
        const node = value.node;
        return <Card key={node.id} node={node} />
      })}
    </section>
  )
}

export default BeachesList;