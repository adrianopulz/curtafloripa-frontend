import React from "react"
import { graphql } from "gatsby"
import Gallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import "./image-gallery.scss"

const ImageGallery = data => {
  const items = data.node.results.items
  let images = []

  images = items.map((item) => {
    console.log(item.entity.media.file.image.fluid);
    return {
      thumbnail: item.entity.media.file.thumb[0].fixed.src,
      originalAlt: item.attributes.alt,
      thumbnailAlt: item.attributes.alt,
      sizes: item.entity.media.file.image.fluid.sizes,
      srcSet: item.entity.media.file.image.fluid.srcSet
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
                fluid(
                  srcSetBreakpoints: [750, 940, 1088]
                  sizes: "(min-width: 978px) 940px, (min-width: 1200px) 1088px, 375px"
                  maxWidth: 1088
                  cropFocus: CENTER
                  maxHeight: 740
                ) {
                  sizes
                  srcSet
                  src
                }
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
