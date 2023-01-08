import * as React from 'react'
import { Link } from "gatsby" 
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Nav from './nav'


const IndexPage = () => {
  return (
    <main>
      <Nav/>
      <Layout pageTitle="home">
      <h1>Welcome To Deep Silver!</h1>
      <p> Deep Silver develops and publishes video games for all major consoles worldwide and published over 200 games on different platforms so far.</p>
      <br/>
      <br/>
      <StaticImage
        alt="Een Gatsby astronaut"
        src="../images/Deep_Silver_Logo.svg.png"
        height={650}
        width={500}
      />
      </Layout>
    </main>
  )
}

export default IndexPage