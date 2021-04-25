import React from "react";
import SlideShow from "./slide-show/SlideShow";
import SimpleText from "./simple-text/SimpleText";
import ParagraphImage from "./image/Image";

const components = {
  paragraph__slide_show: SlideShow,
  paragraph__simple_text: SimpleText,
  paragraph__image: ParagraphImage
};

export const getParagraph = node => {
  if (components.hasOwnProperty(node.type)) {
    const ParagraphComponent = components[node.type];
    return <ParagraphComponent key={node.id} node={node} />;
  }

  return <p key={node.id}>Unknown type {node.__typename}</p>;
};