import React from "react"
import Seo from "../components/seo"
import Header from "../components/regions/header/Header"
import TitleHero from "../components/paragraphs/hero/TitleHero"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import Footer from "../components/regions/footer/Footer"
import { StaticImage } from "gatsby-plugin-image"

const ComingSoon = () => {

  const breadcrumbLinks = [
    {
      'value': 'Em breve'
    }
  ];

  // The static page hero.
  const heroImage = <StaticImage
    src="../assets/images/beaches-hero.jpg"
    alt="Sol visto de cima de uma montanha com vista do mar ao por do sol."
    placeholder="blurred"
    className="cover-image"
    objectFit="cover"
    quality={100}
  />;

  return (
    <>
      <Seo title="Em breve" article={false} />
      <Header />
      <main id="main" className="beaches-page">
        <TitleHero title="Em Breve" image={heroImage} />
        <section className="main-content">
          <div className={"container"}>
            <Breadcrumb links={breadcrumbLinks} />
            <p>Aguarde, em breve essa seção estará ativa.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ComingSoon;