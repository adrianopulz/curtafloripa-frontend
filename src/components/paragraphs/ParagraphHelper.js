import React from "react"
import loadable from '@loadable/component'

const components = {
  paragraph__slide_show: 'SlideShow',
  paragraph__simple_text: 'SimpleText',
  paragraph__image: 'Image',
  paragraph__featured_side_by_side: 'SideBySide',
  paragraph__video: 'Video',
  paragraph__image_gallery: 'ImageGallery'
}

export const getParagraph = (node, index) => {
  if (components.hasOwnProperty(node.type)) {
    const ParagraphComponent = loadable(() => import('./components'), {
      resolveComponent: (components, props) => components[props.component],
    })
    return <ParagraphComponent key={`${node.id}_${index}`} node={node} component={components[node.type]} />
  }

  return <p key={node.id}>Unknown type {node.__typename}</p>
}
