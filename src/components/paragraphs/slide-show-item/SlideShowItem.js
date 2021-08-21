import React, { useState } from "react"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import Button from "../../button/Button"
import { drupalToGatsby } from "../../../helpers/Urls"

const SlideShowItem = ({ data }) => {
  const url = drupalToGatsby(data.field_link.uri)
  const mobileImage =
    data.relationships.field_single_image_mobile.relationships.field_media_image
      .localFile.childImageSharp
  const image =
    data.relationships.field_single_image.relationships.field_media_image
      .localFile.childImageSharp
  const alt = data.relationships.field_single_image.field_media_image.alt
  const images = withArtDirection(getImage(mobileImage), [
    {
      media: "(min-width: 960px)",
      image: getImage(image),
    },
  ])

  return (
    <article className={"slide-content"}>
      <GatsbyImage alt={alt} image={images} className={"slide-image"} />
      <div className={"slide-copy"}>
        <div
          className={"text"}
          dangerouslySetInnerHTML={{
            __html: data.field_html_text.value,
          }}
        />
        <Button path={url} value={data.field_link.title} />
      </div>
    </article>
  )
}

export default SlideShowItem
