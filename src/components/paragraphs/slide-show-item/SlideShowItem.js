import React from "react"
import Button from "../../button/Button";

export default ({ data }) => {

  const image = {
    alt: data.relationships.field_single_image.field_media_image.alt,
    url: data.relationships.field_single_image.relationships.field_media_image.localFile.publicURL
  };

  // const image_mobile = {
  //   alt: data.relationships.field_single_image_mobile.field_media_image.alt,
  //   url: data.relationships.field_single_image_mobile.relationships.field_media_image.localFile.publicURL
  // };

  const bgStyle = {
    backgroundImage: `url(${image.url})`,
  }

  return (
    <article className={"slide-content"} style={ bgStyle }>
      <div className={"slide-copy"}>
        <div className={"text"} dangerouslySetInnerHTML={{
          __html: data.field_html_text.value
        }} />
        <Button path={ data.field_link.uri } value={ data.field_link.title } />
      </div>
    </article>
  );
}