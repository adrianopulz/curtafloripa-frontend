import React from "react"
import { graphql } from 'gatsby'

const SimpleText = data => {
  const node = data.node;

  return (
    <div className="simple-text" dangerouslySetInnerHTML={{ __html: node.copy.processed }} />
  );
}

export default SimpleText;

export const fragment = graphql`
  fragment ParagraphSimpleText on paragraph__simple_text {
    copy: field_html_text {
      value
      processed
      format
    }
  }
`;