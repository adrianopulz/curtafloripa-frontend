import React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"

import "./card.scss"

const Card = ({ node }) => {
  const path = node.path.alias
    ? node.path.alias
    : `/praia/praia-${node.drupal_internal__nid}`
  const image = () => {
    if (!node.relationships.field_single_image) {
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

    const alt = node.relationships.field_single_image.field_media_image.alt
    const img = getImage(
      node.relationships.field_single_image.relationships.field_media_image
        .localFile.childImageSharp
    )
    return <GatsbyImage alt={alt} image={img} />
  }

  return (
    <article className="cards-item">
      <Link to={path} className="image">
        {image()}
      </Link>
      <h2>
        <Link to={path}>{node.title}</Link>
      </h2>
    </article>
  )
}

export default Card
