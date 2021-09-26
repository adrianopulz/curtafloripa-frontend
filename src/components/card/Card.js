import React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"

import "./card.scss"

const Card = ({ node }) => {
  const image = () => {
    if (!node.image) {
      return (
        <StaticImage
          src="../../assets/images/no-image.png"
          alt="Fundo roxo com texto branco dizendo: Sem Imagem"
          width="352"
          height="230"
          placeholder="blurred"
          className="cover-image"
          objectFit="cover"
          quality={100}
        />
      )
    }

    const alt = node.image.field_media_image.alt
    const img = getImage(node.image.relationships.field_media_image.localFile.childImageSharp)
    return <GatsbyImage alt={alt} image={img} />
  }

  return (
    <article className="cards-item">
      <Link to={node.path} aria-label={`Veja mais sobre a praia ${node.title}`} className="image">
        {image()}
      </Link>
      <h2>
        <Link to={node.path}>{node.title}</Link>
      </h2>
    </article>
  )
}

export default Card
