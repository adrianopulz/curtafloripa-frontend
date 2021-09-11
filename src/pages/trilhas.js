import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/regions/header/Header"
import Footer from "../components/regions/footer/Footer"
import TitleHero from "../components/paragraphs/hero/TitleHero"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"

const Trails = () => {

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
            <p>A ilha de Florianópolis tem muitas opções de trilhas, e em breve teremos elas disponíveis aqui.</p>
            <p>Desculpe pelo incoviniente, em breve teremos mais informações para você.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Trails
