import * as React from 'react'
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from '../components/layout'

/* wilt niet mappen voor enig andere reden {
        gameFields.map((item) => {
          return <p>{gameFields.name}</p>
        })
      } */

const GamesPage = ({data: {wpGame:{gameFields}}}) => {

  return (
    <main>
      <Layout pageTitle="Games From Deep Silver">
      <Link to="/metro-exodus">Metro Exodus</Link>
      <br/>
      <Link to="/dead-island-2">{gameFields.name}</Link>
      <br/>
      <Link to="/chivalry-2">Chivalry 2</Link>

      <br/>
      <br/>

      <Link to="/">Back to Home</Link>
    </Layout>
    </main>
  )
}

export const query = graphql`
query {
  wpGame {
    gameFields {
      id
      name
    }
  }
}
`

export default GamesPage