import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import menuItem from "./menuItem"


function Nav() {
  return (
    <nav className="Nav">
      <menuItem link="/home" text="Home"/>
      <menuItem link="/about-us" text="About Us"/>
      <menuItem link="/games" text="Games"/>
    </nav>
  )
}

export default Nav