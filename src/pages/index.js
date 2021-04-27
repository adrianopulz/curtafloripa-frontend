import React from "react"
import { graphql } from 'gatsby'

import Seo from "../components/seo";
import Header from "../components/regions/header/Header";
import { getParagraph } from "../components/paragraphs/ParagraphHelper";

import "../assets/scss/global.scss"

const Home = ( { data } ) => {
  const paragraphs = data.page.relationships.paragraphs.map(getParagraph);

  return (
    <div>
      <Seo title="Home" article={false} />
      <Header />
      <main id={"main"} className="home-page">
        { paragraphs }
      </main>
    </div>
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
