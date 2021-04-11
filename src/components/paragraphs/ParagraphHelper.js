import React from "react";
import SlideShow from "./slide-show/SlideShow";

const components = {
  paragraph__slide_show: SlideShow
};

export const getParagraph = node => {
  if (components.hasOwnProperty(node.type)) {
    const ParagraphComponent = components[node.type];
    return <ParagraphComponent key={node.id} node={node} />;
  }

  return <p key={node.id}>Unknown type {node.__typename}</p>;
};