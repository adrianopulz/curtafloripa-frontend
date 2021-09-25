import React from "react"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
import ExternalLink from "../external-link/ExternalLink"

import "./trail-teaser.scss"

const TrailTeaser = ({node}) => {
  const image = () => {
    if (!node.image) {
      return (
        <StaticImage
          src="../../assets/images/no-image.png"
          alt="Fundo roxo com texto branco dizendo: Sem Imagem"
          width="440"
          height="440"
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
    <article className="trail-teaser">
      <div className="col-image">
        <a href={node.link} target="_blank" className="image" rel="noreferrer">
          {image()}
        </a>
      </div>
      <div className="col-content">
        <h2>{ node.title }</h2>
        <div className="description" dangerouslySetInnerHTML={{ __html: node.body }} />
        { node.link ? <ExternalLink url={node.link} value="Ver no mapa" btn={true} />  : '' }
      </div>
    </article>
  )
}

export default TrailTeaser