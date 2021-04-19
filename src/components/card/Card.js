import React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import "./card.scss";

const Card = ( {node} ) => {
  const path = node.path.alias;
  const image = getImage(node.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp);
  const alt = node.relationships.field_single_image.field_media_image.alt;

  return <article className="cards-item">
    <Link to={path} className="image">
      <GatsbyImage alt={alt} image={image} />
    </Link>
    <h3><Link to={path}>{node.title}</Link></h3>
  </article>;
};

export default Card;