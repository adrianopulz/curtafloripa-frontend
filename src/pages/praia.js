import React from "react"
import { graphql } from "gatsby"
import { StaticImage, getImage, GatsbyImage  } from "gatsby-plugin-image"

import Header from "../components/regions/header/Header"
import Footer from "../components/regions/footer/Footer"
import TitleHero from "../components/paragraphs/hero/TitleHero"

const Beach = ({ data }) => {
  // The page node Object.
  const node = data.nodeBeach;

  const image = getImage(node.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp);
  const alt = node.relationships.field_single_image.field_media_image.alt;
  const heroImage = <GatsbyImage alt={alt} image={image} className="cover-image" objectFit="cover" />;

  return (
    <>
      <Header />
      <main id="main" className="beaches-page">
        <TitleHero title={node.title} image={heroImage} />

        <section className="main-content">
          <div className={"container"}>
            <p>Nonono nono nonono no nonon nonono</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query($id: String!) {
    nodeBeach(id: {eq: $id}) {
      id
      title
      relationships {
        field_tags {
          name
          id
        }
        field_single_image {
          field_media_image {
            alt
          }
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                }
              }
            }
          }
        }
        field_region {
          name
          id
        }
      }
    }
  }
`

export default Beach;
