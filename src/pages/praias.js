import React from "react"
import Header from "../components/regions/header/Header"
import Footer from "../components/regions/footer/Footer"
import TitleHero from "../components/paragraphs/hero/TitleHero"

export default () => {
  return (
    <div>
      <Header />
      <TitleHero />
      <main id={"main"}>
        <p>Lista das praias...</p>
      </main>
      <Footer />
    </div>
  );
}