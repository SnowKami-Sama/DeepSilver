import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'



const GamePage = ({data:{wpGame:{gameFields}}}) => {
  const image = getImage(gameFields.coverImage.localFile)
  return (
    <Layout pageTitle="Game">
      <div>
      <></>
        <h3>{gameFields.name}</h3>
        <GatsbyImage image={image} alt={gameFields.coverImage.altText} />
        <div dangerouslySetInnerHTML={{__html: gameFields.description}}></div>
        <br/>
        <p>Age rating :{gameFields.ageRating}</p>
        <p>Published :{gameFields.date}</p>
        <p>Platform :{gameFields.platform}</p>
        <p>Players :{gameFields.players}</p>
        <p>Modes : {gameFields.modes}-player</p>
      </div>
    </Layout>
  )
}

export const query	= graphql`
{
  wpGame(slug: {eq: "metro-exodus"}) {
    gameFields {
      id
      name
      ageRating
      date
      description
      platform
      players
      modes
      coverImage {
        localFile {
          childImageSharp{
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
}
`

export default GamePage