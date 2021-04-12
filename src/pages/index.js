import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"

import Header from "../components/regions/header/Header";
import { getParagraph } from "../components/paragraphs/ParagraphHelper";

import "../assets/scss/global.scss"

const Home = ( { data } ) => {
  const paragraphs = data.page.relationships.paragraphs.map(getParagraph);

  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'pt' }}>
        <meta charSet="utf-8" />
        <title>Curta Floripa</title>
        <link rel="canonical" href="http://curtafloripa.com.br" />
        <meta name="keywords" content="floripa, florianopolis, ilha, magia, praia, trilha, litoral, sul, brasil" />
        <meta name="description" content="Encontre o que você procura na Ilha da Magia. As melhores paraias e trilhas estão aqui, encontre o que procura de forma fácil e organize suas férias para não perder nada." />
      </Helmet>

      <Header />
      <main id={"main"}>
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
