import React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Header from "../components/regions/header/Header"
import Footer from "../components/regions/footer/Footer"
import TitleHero from "../components/paragraphs/hero/TitleHero"
import { getParagraph } from "../components/paragraphs/ParagraphHelper"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import Categories from "../components/categories/Categories"

const Beach = ({ data }) => {
  // The page node Object.
  const node = data.nodeBeach;

  const childImageSharp = node.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp;
  const image = getImage(childImageSharp);
  const alt = node.relationships.field_single_image.field_media_image.alt;
  const heroImage = <GatsbyImage alt={alt} image={image} className="cover-image" objectFit="cover" />;
  const paragraphs = node.relationships.paragraphs.map(getParagraph);
  const region = node.relationships.field_region;
  const tags = node.relationships.field_tags;
  const breadcrumbLinks = [
    {
      'value': 'Praias',
      'link': '/praias'
    },
    {
      'value': node.title
    }
  ];

  console.log(region);
  console.log(tags);

  return (
    <>
      <Seo title={node.title} description={node.seo_desc} image={childImageSharp.resize.src} article={true} />
      <Header />
      <main id="main" className="beaches-page">
        <TitleHero title={node.title} image={heroImage} />

        <section className="main-content">
          <div className={"container"}>
            <Breadcrumb links={breadcrumbLinks} />
            <Categories region={region} tags={tags} />
            { paragraphs }
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query($id: String) {
    nodeBeach(id: {eq: $id}) {
      id
      title
      seo_desc: field_seo_short_description
      relationships {
        field_region {
          id
          name
          path {
            alias
          }
        }
        field_tags {
          id
          name
          path {
            alias
          }
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
                  resize {
                    src
                  }
                }
              }
            }
          }
        }
        paragraphs: field_paragraphs {
          type: __typename
          ...ParagraphSimpleText
          ...ParagraphImage
          ...ParagraphSideBySide
        }
      }
    }
  }
`

export default Beach;
