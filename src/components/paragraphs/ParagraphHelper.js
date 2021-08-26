import React from "react"
import SlideShow from "./slide-show/SlideShow"
import SimpleText from "./simple-text/SimpleText"
import Image from "./image/Image"
import SideBySide from "./side-by-side/SideBySide"
import Video from "./video/Video"
import ImageGallery from "./image-gallery/ImageGallery"

const components = {
  paragraph__slide_show: SlideShow,
  paragraph__simple_text: SimpleText,
  paragraph__image: Image,
  paragraph__featured_side_by_side: SideBySide,
  paragraph__video: Video,
  paragraph__image_gallery: ImageGallery
}

export const getParagraph = node => {
  if (components.hasOwnProperty(node.type)) {
    const ParagraphComponent = components[node.type]
    return <ParagraphComponent key={node.id} node={node} />
  }

  return <p key={node.id}>Unknown type {node.__typename}</p>
}
