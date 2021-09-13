import React, { useState } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/regions/header/Header"
import Footer from "../components/regions/footer/Footer"
import TrailsList from "../components/views/trails/TrailsList"
import NoResults from "../components/messages/no-results/NoResults"
import TitleHero from "../components/paragraphs/hero/TitleHero"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import Filters from "../components/filters/Filters"

const Trails = ({ data }) => {
  let regions = []
  let addedRegions = []
  const nodes = data.allNodeTrails.edges.map((value) => {
    const node = value.node
    const regionId = node.relationships.field_region.id
    const path = node.path.alias
    ? node.path.alias
    : `/trilha/trilha-${node.drupal_internal__nid}`

    if (addedRegions.indexOf(regionId) === -1) {
      regions.push({
        id: regionId,
        name: node.relationships.field_region.name
      })
      addedRegions.push(regionId)
    }

    return {
      id: node.id,
      title: node.title,
      region: regionId,
      path: path,
      image: (node.relationships.field_single_image) ? node.relationships.field_single_image : null
    }
  })
  const [trails, setTrails] = useState(nodes);

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

  // Filters
  const [name, setName] = useState('');
  const [region, setRegion] = useState('all');
  const submitHandler = () => {
    const filteredData = nodes.filter((value) => {
      let titleFilter = true
      let regionFilter = true
      if (name !== '') {
        titleFilter = (value.title.toLowerCase().includes(name.toLowerCase()))
      }

      if (region !== 'all') {
        regionFilter = (value.region === region)
      }

      return (titleFilter && regionFilter)
    })
    setTrails(filteredData)
  }

  return (
    <>
      <Seo title="Trilhas" article={false} />
      <Header />
      <main id="main" className="trails-page">
        <TitleHero title="Trilhas" image={heroImage} />
        <section className="main-content">
          <div className={"container"}>
            <Breadcrumb links={breadcrumbLinks} />
            <p>Relaxa, caminhar ou se exercitar admirando as paisagens naturais, respirando ar puro. Quem ama essa sensação, vai ficar encantado pelas várias opções de trilhas em Floripa. Independente do seu perfil, mais sedentário ou mais atleta, poderá escolher desde os caminhos mais leves até os mais longos e curtir a natureza em meio a lindas paisagens. Listamos algumas das principais trilhas da ilha da magia para você não perder nada.</p>

            <Filters name={name} setName={setName} region={region} setRerion={setRegion} regions={regions} submitHandler={submitHandler} />
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
    allNodeTrails(filter: { status: { eq: true } }) {
      edges {
        node {
          id
          drupal_internal__nid
          title
          path {
            alias
          }
          relationships {
            field_region {
              id
              name
            }
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

export default Trails
