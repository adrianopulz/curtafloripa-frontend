import React from "react"
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/regions/header/Header"
import Footer from "../components/regions/footer/Footer"
import TitleHero from "../components/paragraphs/hero/TitleHero"
import BeachesList from "../components/views/beaches/BeachesList"
import NoResults from "../components/messages/no-results/NoResults"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"

const Beaches = ({ data }) => {

  // All returned node of type Beach.
  const nodes = data.allNodeBeach.edges;

  // The static page hero.
  const heroImage = <StaticImage
    src="../assets/images/beaches-hero.jpg"
    alt="Sol visto de cima de uma montanha com vista do mar ao por do sol."
    placeholder="blurred"
    className="cover-image"
    objectFit="cover"
    quality={100}
  />;

  const breadcrumbLinks = [
    {
      'value': 'Praias'
    }
  ];

  return (
    <>
      <Seo title="Praias" article={false} />
      <Header />
      <main id="main" className="beaches-page">
        <TitleHero title="Praias" image={heroImage} />
        <section className="main-content">
          <div className={"container"}>
            <Breadcrumb links={breadcrumbLinks} />
            { nodes.length
              ? <BeachesList items={nodes} />
              : <NoResults />
            }
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query BeachesQuery {
    allNodeBeach(filter: {status: {eq: true}}) {
      edges {
        node {
          id
          drupal_internal__nid
          title
          path {
            alias
          }
          relationships {
            field_single_image {
              field_media_image {
                alt
              }
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(height: 230, quality: 100, width: 352)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Beaches;
