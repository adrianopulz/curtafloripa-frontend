import React from "react"
import { Link } from "gatsby"

import "./logo.scss";
import url from "../../assets/svgs/logo.svg"

export default () => {
  return <figure className={"logo"}><Link to={"/"}><img src={ url } alt="Curta Floripa" /></Link></figure>;
};
