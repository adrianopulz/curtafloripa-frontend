import React, { useState } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/regions/header/Header"
import Footer from "../components/regions/footer/Footer"
import TitleHero from "../components/paragraphs/hero/TitleHero"
import BeachesList from "../components/views/beaches/BeachesList"
import NoResults from "../components/messages/no-results/NoResults"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import Filters from "../components/filters/Filters"

const Beaches = ({ data }) => {
  let regions = []
  let addedRegions = []
  const nodes = data.allNodeBeach.edges.map((value) => {
    const node = value.node
    const regionId = node.relationships.field_region.id
    const path = node.path.alias
    ? node.path.alias
    : `/praia/praia-${node.drupal_internal__nid}`

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
  const [beaches, setBeaches] = useState(nodes);

  // The static page hero.
  const heroImage = (
    <StaticImage
      src="../assets/images/beaches-hero.jpg"
      alt="Sol visto de cima de uma montanha com vista do mar ao por do sol."
      placeholder="blurred"
      className="cover-image"
      objectFit="cover"
      quality={100}
    />
  )

  const breadcrumbLinks = [
    {
      value: "Praias",
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
    setBeaches(filteredData)
  }

  return (
    <>
      <Seo title="Praias" article={false} />
      <Header />
      <main id="main" className="beaches-page">
        <TitleHero title="Praias" image={heroImage} />
        <section className="main-content">
          <div className={"container"}>
            <Breadcrumb links={breadcrumbLinks} />
            <Filters name={name} setName={setName} region={region} setRerion={setRegion} regions={regions} submitHandler={submitHandler} />

            {
              beaches.length ? <>
                <BeachesList items={beaches} />
              </> : <NoResults />
            }
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const query = graphql`
  query BeachesQuery {
    allNodeBeach(filter: { status: { eq: true } }) {
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

export default Beaches
