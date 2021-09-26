import React from "react"
import { graphql } from "gatsby"
import Gallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import "./image-gallery.scss"

const ImageGallery = data => {
  const items = data.node.results.items
  let images = []

  images = items.map((item) => {
    return {
      thumbnail: item.entity.media.file.thumb[0].fixed.src,
      originalAlt: item.attributes.alt,
      thumbnailAlt: item.attributes.alt,
      sizes: "(min-width: 960px) 940px, (min-width: 1200px) 1088px, 100vw",
      srcSet: item.entity.media.file.image.gatsbyImageData.images.sources[0].srcSet
    }
  })

  return (
    <section className={"image-gallery-component"}>
      <h2>Galeria de imagens</h2>
      <Gallery items={images} showFullscreenButton={false} lazyLoad={true} />
    </section>
  )
}

export default ImageGallery

export const fragment = graphql`
  fragment ParagraphImageGalley on paragraph__image_gallery {
    id
    results: relationships {
      items: field_multiple_images {
        entity: relationships {
          media: field_media_image {
            file: localFile {
              image: childImageSharp {
                gatsbyImageData(
                  width: 1088,
                  height: 740,
                  quality: 100,
                  layout: CONSTRAINED,
                  sizes: "(min-width: 960px) 940px, (min-width: 1200px) 1088px, 100vw"
                  transformOptions: {
                    cropFocus: CENTER
                  }
                )
              }
              thumb: childrenImageSharp {
                fixed(height: 120, width: 160, quality: 80, cropFocus: CENTER, toFormat: WEBP) {
                  src
                  width
                  height
                }
              }
            }
          }
        }
        attributes: field_media_image {
          alt
        }
      }
    }
  }
`
