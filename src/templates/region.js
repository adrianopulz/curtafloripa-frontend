import React from "react"
import Seo from "../components/seo"
import Header from "../components/regions/header/Header"
import Footer from "../components/regions/footer/Footer"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TitleHero from "../components/paragraphs/hero/TitleHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import BeachesList from "../components/views/beaches/BeachesList"
import NoResults from "../components/messages/no-results/NoResults"

const Region = ({ data }) => {
  // All returned node of type Beach.
  const nodes = data.allNodeBeach.edges.map((value) => {
    const node = value.node
    const path = node.path.alias
    ? node.path.alias
    : `/praia/praia-${node.drupal_internal__nid}`

    return {
      id: node.id,
      title: node.title,
      path: path,
      image: (node.relationships.field_single_image) ? node.relationships.field_single_image : null
    }
  })

  // The region data.
  const region = data.taxonomyTermRegions

  // The static page hero.
  const heroImage = (
    <StaticImage
      src="../assets/images/beaches-hero.jpg"
      alt="Sol visto de cima de uma montanha com vista do mar ao por do sol."
      placeholder="blurred"
      className="cover-image"
      objectFit="cover"
      layout={"constrained"}
      sizes={"(min-width: 1920px) 1920px, 100w"}
      breakpoints={[750, 1024, 1280, 1440, 1920]}
      width={1920}
      quality={100}
    />
  )

  const breadcrumbLinks = [
    {
      value: "Praias",
      link: "/praias",
    },
    {
      value: region.name,
    },
  ]

  return (
    <>
      <Seo title={region.name} article={false} />
      <Header />
      <main id="main" className="region-page">
        <TitleHero title={region.name} image={heroImage} />
        <section className="main-content">
          <div className={"container"}>
            <Breadcrumb links={breadcrumbLinks} />
            {nodes.length ? <BeachesList items={nodes} /> : <NoResults />}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Region

export const query = graphql`
  query ($id: String) {
    taxonomyTermRegions(id: { eq: $id }) {
      id
      drupal_internal__tid
      name
    }
    allNodeBeach(
      sort: {order: ASC, fields: title},
      filter: {
        status: { eq: true }
        relationships: { field_region: { id: { eq: $id } } }
      }
    ) {
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
