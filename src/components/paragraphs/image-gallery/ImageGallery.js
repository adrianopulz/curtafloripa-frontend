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
      original: item.entity.media.file.image[0].resize.src,
      thumbnail: item.entity.media.file.thumb[0].fixed.src,
      fullscreen: item.entity.media.file.full[0].resize.src,
      originalAlt: item.attributes.alt,
      thumbnailAlt: item.attributes.alt
    }
  })

  return (
    <section className={"image-gallery-component"}>
      <h2>Galeria de imagens</h2>
      <Gallery items={images} />
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
              thumb: childrenImageSharp {
                fixed(height: 188, width: 250, quality: 80, cropFocus: CENTER) {
                  src
                  width
                  height
                }
              }
              image: childrenImageSharp {
                resize(quality: 100, height: 816) {
                  src
                  width
                  height
                }
              }
              full: childrenImageSharp {
                resize(quality: 100, width: 1920) {
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
