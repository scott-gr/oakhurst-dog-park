import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import './coverphoto.module.css'

const RulesPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      rulesphoto: file(relativePath: { eq: "beagle.png" }) {
        childImageSharp {
          fluid(
            fit: COVER
            cropFocus: NORTH
            quality: 100
            pngCompressionSpeed: 1
            webpQuality: 100
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      styleName={`heroBoxRules heroBox`}
      tag="section"
      fluid={data.rulesphoto.childImageSharp.fluid}
      durationFadeIn={25}
    >
      <span styleName="pageHeader">
        <h2>Park Rules</h2>
      </span>
    </BackgroundImage>
  )
}

export default RulesPhoto
