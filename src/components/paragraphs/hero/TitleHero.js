import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./title-hero.scss"

const TitleHero = ({ title }) => {
  return (
    <article id={"title-hero"}>
      <div className={"container"}>
        <StaticImage
          src="../../../assets/images/construcao-bg.jpg"
          alt="Praia com a areia"
          placeholder="blurred"
          layout="fixed"
          width={400}
          height={300}
        />

        <h2>Praias</h2>
      </div>
    </article>
  );
}

export default TitleHero;