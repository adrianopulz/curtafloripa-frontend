import React from "react"
import Seo from "../components/seo"
import Header from "../components/regions/header/Header"

const Region = ({ data }) => {
  return (
    <>
      <Seo title="Region" article={false} />
      <Header />
      <main id="main" className="region-page">
        asdasd
      </main>
    </>
  );
}

export default Region;
