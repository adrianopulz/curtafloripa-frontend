import React from "react"
import { graphql } from 'gatsby'

import Seo from "../components/seo";
import HeaderHome from "../components/regions/header/HeaderHome";
import { getParagraph } from "../components/paragraphs/ParagraphHelper";

import "../assets/scss/global.scss"

const Home = ( { data } ) => {
  const paragraphs = data.page.relationships.paragraphs.map(getParagraph);

  return (
    <>
      <Seo title="Home" article={false} bodyClass={"home-page"} />
      <HeaderHome />
      <main id={"main"} className="home-page">
        { paragraphs }
      </main>
    </>
  )
};

export const pageQuery = graphql`
  query HomePageQuery {
    page: nodeLandingPage(id: {eq: "f420d1c9-4f92-51ef-b86d-22052bade40a"}) {
      id
      relationships {
        paragraphs: field_paragraphs {
          type: __typename
          ...ParagraphSlideShow
        }
      }
    }
  }
`;

export default Home;
