import React from "react"
import { Link } from "gatsby"

import "./button.scss";

export default ( {path, value} ) => {
  return (
    <Link className={"btn"} to={ path }>{ value }</Link>
  );
}