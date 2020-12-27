import React from "react"
import { graphql } from 'gatsby'

import { Splide, SplideSlide } from '@splidejs/react-splide';

import SlideShowItem from "../slide-show-item/SlideShowItem"

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './slide-show.scss';

const slideItem = data => {
  return (
    <SplideSlide key={ data.id } className={"slide-item"}>
      <SlideShowItem data={ data } />
    </SplideSlide>
  );
}

export const SlideShow = ({ node }) => {
  const slides = node.relationships.field_slide_items.map(slideItem);

  return (
    <Splide
      options={ {
        type: 'fade',
        rewind: true
      } }
      className={"slide-show"}>
      { slides }
    </Splide>
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
