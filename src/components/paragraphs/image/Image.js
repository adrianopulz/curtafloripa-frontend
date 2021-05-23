import React from "react"
import { graphql } from 'gatsby'
import { getImage, GatsbyImage  } from "gatsby-plugin-image"

import "./image.scss";

const Image = data => {
  const node = data.node;
  const image = getImage(node.relationships.image.value.media.file.childImageSharp);
  const alt = node.relationships.image.attributes.alt;

  return (
    <GatsbyImage alt={alt} image={image} className="paragraph-image" />
  );
}

export default Image;

export const fragment = graphql`
  fragment ParagraphImage on paragraph__image {
    id
    relationships {
      image: field_single_image {
        attributes: field_media_image {
          alt
        }
        value: relationships {
          media: field_media_image {
            file: localFile {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH, breakpoints: [750, 1088])
              }
            }
          }
        }
      }
    }
  }
`;