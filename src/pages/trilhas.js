import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/regions/header/Header"
import Footer from "../components/regions/footer/Footer"
import TrailsList from "../components/views/trails/TrailsList"
import NoResults from "../components/messages/no-results/NoResults"
import TitleHero from "../components/paragraphs/hero/TitleHero"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"

const Trails = ({ data }) => {
  const trails = data.allNodeTrails.edges.map((value) => {
    const node = value.node
    return {
      id: node.id,
      title: node.title,
      body: node.body.value,
      link: (node.field_link) ? node.field_link.uri : null,
      image: (node.relationships.field_single_image) ? node.relationships.field_single_image : null
    }
  })

  // The static page hero.
  const heroImage = (
    <StaticImage
      src="../assets/images/trails-hero.jpg"
      alt="Nascer do sol visto de sima do morro da lagoinha do leste."
      placeholder="blurred"
      className="cover-image"
      objectFit="cover"
      quality={100}
    />
  )

  const breadcrumbLinks = [
    {
      value: "Trilhas",
    },
  ]

  return (
    <>
      <Seo title="Trilhas" article={false} />
      <Header />
      <main id="main" className="trails-page">
        <TitleHero title="Trilhas" image={heroImage} />
        <section className="main-content">
          <div className={"container"}>
            <Breadcrumb links={breadcrumbLinks} />
            <p>Relaxar, caminhar ou se exercitar admirando as paisagens naturais, respirando ar puro. Quem ama essa sensação, vai ficar encantado pelas várias opções de trilhas em Floripa.</p>
            <p>Independente do seu perfil, mais sedentário ou mais atleta, poderá escolher desde os caminhos mais leves até os mais longos e curtir a natureza em meio a lindas paisagens.</p>
            <p>Listamos algumas das principais trilhas da ilha da magia para você não perder nada.</p>

            { trails.length ? <TrailsList items={trails} />: <NoResults /> }
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const query = graphql`
  query TrailsQuery {
    allNodeTrails(filter: {status: {eq: true}}) {
      edges {
        node {
          id
          title
          body {
            value
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
                      gatsbyImageData(height: 440, quality: 100, width: 440)
                    }
                  }
                }
              }
            }
          }
          field_link {
            uri
          }
        }
      }
    }
  }
`

export default Trails
