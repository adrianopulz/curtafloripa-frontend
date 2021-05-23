import React from "react"
import { Link } from "gatsby"

import "./categories.scss"

const Categories = ({region, tags}) => {
  return (
    <section className={"categories"}>
      <div className={"region taglist"}>
        <div className={"label"}>Região</div>
        <div className={"value"}>
          <Link to={region.path.alias}>{ region.name }</Link>
        </div>
      </div>
      <div className={"tags taglist"}>
        <div className={"label"}>Tags</div>
        <div className={"value"}>
          {tags.map((value, index) => {
            return <Link key={value.id} to={value.path.alias}>{value.name}</Link>
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;