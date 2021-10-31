import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/regions/header/Header"
import Footer from "../components/regions/footer/Footer"
import TitleHero from "../components/paragraphs/hero/TitleHero"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import ExternalLinkList from "../components/list/external-links/ExternalLinksList"

const OndeFicarPage = () => {
  // The static page hero.
  const heroImage = (
    <StaticImage
      src="../assets/images/hotel-bed-wide.jpg"
      alt="Travesseiros na cama de um hotel com lençol branco e fundo levemente borrado de uma janela com raios de sol."
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
      value: "Onde ficar",
    },
  ]

  const optionsList = [
    {
      url: "https://www.booking.com/searchresults.pt-br.html?label=gen173nr-1FCAEoggI46AdIM1gEaCCIAQGYAS24AQfIAQzYAQHoAQH4AQuIAgGoAgO4ArGX84kGwAIB0gIkNmQ4MTIyOWUtYmE1Ni00Mzc4LTk5Y2UtMTkxMGVhNGZhODg42AIG4AIB&sid=2789d9555d7c63609c6470f171211c6b&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.pt-br.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaCCIAQGYAS24AQfIAQzYAQHoAQH4AQuIAgGoAgO4ArGX84kGwAIB0gIkNmQ4MTIyOWUtYmE1Ni00Mzc4LTk5Y2UtMTkxMGVhNGZhODg42AIG4AIB%3Bsid%3D2789d9555d7c63609c6470f171211c6b%3Bsb_price_type%3Dtotal%26%3B&ss=Florian%C3%B3polis%2C+Brasil&is_ski_area=&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=1&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&dest_id=-643337&dest_type=city&search_pageview_id=4c416d19f83a0144&search_selected=true",
      value: "Booking"
    },
    {
      url: "https://www.tripadvisor.com.br/SmartDeals-g303576-Florianopolis_State_of_Santa_Catarina-Hotel-Deals.html",
      value: "Tripadvisor"
    },
    {
      url: "https://www.trivago.com.br/?aDateRange%5Barr%5D=2021-09-13&aDateRange%5Bdep%5D=2021-09-14&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=1&aRooms%5B0%5D%5Badults%5D=1&cpt2=59824%2F200%2C28%2F132&hasList=1&hasMap=1&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=20000&address=&addressGeoCode=&offset=0&ra=&overlayMode=",
      value: "Trivago"
    },
    {
      url: "https://www.airbnb.com.br/s/Florian%C3%B3polis-~-SC/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=october&flexible_trip_dates%5B%5D=september&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Florian%C3%B3polis%20-%20SC&place_id=ChIJ1zLGsk45J5URRscEagtVvIE&adults=1&source=structured_search_input_header&search_type=autocomplete_click",
      value: "Airbnb"
    },
    {
      url: "https://www.google.com/travel/hotels?utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABpZCjsSNzIlMHg5NTI3Mzk0ZWIyYzYzMmQ3OjB4ODFiYzU1MGI2YTA0Yzc0NjoORmxvcmlhbsOzcG9saXMaABIaEhQKBwjlDxAJGAsSBwjlDxAJGAwYATICCAIqCwoHKAE6A0JSTBoA&rp=SAI&destination=Florian%C3%B3polis&ap=MABoAA&ved=0CAAQ5JsGahcKEwiQ0sm8rPfyAhUAAAAAHQAAAAAQVw",
      value: "Google"
    }
  ]

  return (
    <>
      <Seo title="Onde ficar" article={false} />
      <Header />
      <main id="main" className="ondeficar-page">
        <TitleHero title="Onde Ficar" image={heroImage} />
        <section className="main-content">
          <div className={"container"}>
            <Breadcrumb links={breadcrumbLinks} />
            <p>Florianópolis tem varias opções de hospedagens, desde de resorts e Hoteis a Pousadas e campings. A melhor opção é pesquisar nos sites de reservas para encontrar o que vai te atender melhor.</p>
            <p>Além disso ainda tem varias opções de anfitriões no Airbnb, podendo se hospdar em um apartamento mobiliado de frente para o mar com um custo benefício bem interessante. Porém em alta estação, devido a procura os preços vai estar mais altos, sendo interessante pesquisar bem e com antecedencia.</p>

            <h2>Onde encontrar hospedagens?</h2>
            <ExternalLinkList items={optionsList} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default OndeFicarPage