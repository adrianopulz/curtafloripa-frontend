import React from "react"

import FooterMenu from "../../menus/footer/FooterMenu"

import "./footer.scss";

export default () => {
  return (
    <footer id={"footer"}>
      <div className={"container"}>
        <p className={"copyright"}>© 2020 Curta Floripa</p>
        <FooterMenu />
      </div>
    </footer>
  );
}
