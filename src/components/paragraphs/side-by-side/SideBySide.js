import React from "react"
import { graphql } from 'gatsby'
import { getImage, GatsbyImage  } from "gatsby-plugin-image"

import "./side-by-side.scss";

const SideBySide = data => {
  const node = data.node;
  const image = getImage(node.relationships.image.value.media.file.childImageSharp);
  const alt = node.relationships.image.attributes.alt;

  return (
    <article className="side-by-side">
      <div className="image">
        <GatsbyImage alt={alt} image={image} />
      </div>
      <div className="content">
        <div className="copy" dangerouslySetInnerHTML={{ __html: node.copy.processed }} />
      </div>
    </article>
  );
}

export default SideBySide;

export const fragment = graphql`
  fragment ParagraphSideBySide on paragraph__featured_side_by_side {
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
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
    copy: field_html_text {
      format
      processed
      value
    }
    field_link {
      title
      uri
    }
  }
`;