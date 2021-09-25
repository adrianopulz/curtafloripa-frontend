import React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Header from "../components/regions/header/Header"
import Footer from "../components/regions/footer/Footer"
import TitleHero from "../components/paragraphs/hero/TitleHero"
import { getParagraph } from "../components/paragraphs/ParagraphHelper"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import Categories from "../components/categories/Categories"

const Beach = ({ data }) => {
  // The page node Object.
  const node = data.nodeBeach

  const paragraphs = node.relationships.paragraphs.map(getParagraph)
  const region = node.relationships.field_region
  const tags = node.relationships.field_tags
  const breadcrumbLinks = [
    {
      value: "Praias",
      link: "/praias",
    },
    {
      value: node.title,
    },
  ]

  const heroImage = () => {
    if (!node.relationships.field_single_image) {
      return (
        <StaticImage
          src="../assets/images/no-image.png"
          alt="Fundo roxo com texto branco dizendo: Sem Imagem"
          width="352"
          height="230"
          placeholder="blurred"
          className="cover-image"
          objectFit="cover"
          quality={100}
        />
      )
    }

    const alt = node.relationships.field_single_image.field_media_image.alt
    const img = getImage(
      node.relationships.field_single_image.relationships.field_media_image
        .localFile.childImageSharp
    )
    return (
      <GatsbyImage
        alt={alt}
        image={img}
        className="cover-image"
        objectFit="cover"
      />
    )
  }

  const seoImage = () => {
    if (!node.relationships.field_single_image) {
      return '../assets/images/no-image.png'
    }
    return node.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp.resize.src
  }

  return (
    <>
      <Seo
        title={node.title}
        description={node.seo_desc}
        image={seoImage()}
        article={true}
      />
      <Header />
      <main id="main" className="beaches-page">
        <TitleHero title={node.title} image={heroImage()} />

        <section className="main-content">
          <div className={"container"}>
            <Breadcrumb links={breadcrumbLinks} />
            <Categories region={region} tags={tags} context={"beach"} />
            {paragraphs}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    nodeBeach(id: { eq: $id }) {
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
                  resize(quality: 100, width: 720) {
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
          ...ParagraphVideo
          ...ParagraphImageGalley
        }
      }
    }
  }
`

export default Beach
