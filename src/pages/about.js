import * as React from "react"
import { Link } from "gatsby"
import Nav from './nav'
import Layout from "../components/layout"
import Seo from "../components/seo"


const AboutPage = () => {
  return (
<main>
<Nav/>
<Layout pageTitle="about-us">
<h1>About Us</h1>
      <p>Artist Agency was founded in 1977 by founder, John Doe. AA continues to be at the forefront of art by establishing the careers of our talents on a holistic level -- and setting trends within the industry. </p>
      <Link to="/">Back to Home</Link>
</Layout>
</main>
  )
}

export default AboutPage