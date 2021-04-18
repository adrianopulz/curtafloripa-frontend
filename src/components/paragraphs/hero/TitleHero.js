import React from "react"

import "./title-hero.scss"

const TitleHero = ({ title, image }) => {
  return (
    <article id={"title-hero"}>
      <div className={"container"}>
        { image }
        <h1>{ title }</h1>
      </div>
    </article>
  );
}

export default TitleHero;