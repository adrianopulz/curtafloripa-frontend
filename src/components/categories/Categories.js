import React from "react"
import { Link } from "gatsby"

import "./categories.scss"

const Categories = ({ region, tags, context }) => {
  const link_region =
    context === "beach"
      ? `/praias${region.path.alias}`
      : `/trilhas${region.path.alias}`
  return (
    <section className={"categories"}>
      <div className={"region taglist"}>
        <div className={"label"}>Região</div>
        <div className={"value"}>
          <Link to={link_region}>{region.name}</Link>
        </div>
      </div>
      <div className={"tags taglist"}>
        <div className={"label"}>Tags</div>
        <div className={"value"}>
          {tags.map((value, index) => {
            let link_tag =
              context === "beach"
                ? `/praias${value.path.alias}`
                : `/trilhas${value.path.alias}`
            return (
              <Link key={value.id} to={link_tag}>
                {value.name}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categories
