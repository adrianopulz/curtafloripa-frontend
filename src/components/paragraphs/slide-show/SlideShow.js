import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'

import { Splide, SplideSlide } from '@splidejs/react-splide';

// Custom Components
import SlideShowItem from "../slide-show-item/SlideShowItem"

// Styles
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './slide-show.scss';

// Map each Slide Item.
const slideItem = data => {
  return (
    <SplideSlide key={ data.id } className={"slide-item"}>
      <SlideShowItem data={ data } />
    </SplideSlide>
  );
}

export default ({ node }) => {
  const [slideShow, loadSlideShow] = useState(null);

  // Using DidMount to avoid conflicts with Splide Lib.
  useEffect(() => {
    const slides = node.relationships.field_slide_items.map(slideItem);

    // Updating data that depends of window property.
    loadSlideShow(
      <Splide className={"slide-show"} options={
        {
          type: 'fade',
          rewind: true
        }
      }>
        { slides }
      </Splide>
    );
  }, []);

  return (
    slideShow
  );
}

export const fragment = graphql`
  fragment ParagraphSlideShow on paragraph__slide_show {
    id
    relationships {
      field_slide_items {
        id

        field_html_text {
          value
        }

        field_link {
          title
          uri
        }

        relationships {
          field_single_image {
            field_media_image {
              alt
            }

            relationships {
              field_media_image {
                localFile {
                  publicURL
                }
              }
            }
          }

          field_single_image_mobile {
            field_media_image {
              alt
            }
              
            relationships {
              field_media_image {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  }
`;
