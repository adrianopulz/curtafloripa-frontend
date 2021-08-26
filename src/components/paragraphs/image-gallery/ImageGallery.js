import React from "react"
import { graphql } from "gatsby"
import Gallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import "./image-gallery.scss"

const ImageGallery = data => {
  const items = data.node.results.items
  let images = []

  items.map((item) => {
    console.log(item.entity.media.file.image[0]);
    images.push({
      original: item.entity.media.file.image[0].resize.src,
      thumbnail: item.entity.media.file.image[0].fixed.src,
    })
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
              image: childrenImageSharp {
                resize(quality: 100, height: 650) {
                  src
                  width
                  height
                }
                fixed(height: 150, width: 250, quality: 80, cropFocus: CENTER) {
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
