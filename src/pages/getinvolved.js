import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import GetInvolvedPhoto from '../components/CoverPhotos/GetInvolvedPhoto.js'
import './styles/getinvolved.module.css'
import LogoFacebookIcon from '../components/icons/LogoFacebookIcon.js'
import CityIcon from '../components/icons/CityIcon.js'

const GetInvolvedPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Get Involved" />
      <GetInvolvedPhoto />
      <main styleName="container">
        <section styleName="contactList">
          <a
            href="https://www.facebook.com/OakhurstDogPark"
            alt="Facebook Page"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <LogoFacebookIcon />
            Facebook Page
          </a>
          {/* <a href="" alt="Email" target="_blank" rel="noreferrer">
            email icon
          </a>
          <span>
            phone icon
          </span> */}
          <a
            href="https://www.decaturga.com/activeliving/page/dog-parks"
            alt="City of Decatur parks site"
            target="_blank"
            rel="noreferrer"
          >
            <CityIcon />
            City of Decatur Parks
          </a>
        </section>
        <article>
          <p>
            Oakhurst Dog Park is 100% community-maintained. The city provides
            resources: water fountains, signage, waste bags, but it is an army
            of volunteers who handle the upkeep. Projects include spreading wood
            chips to fill in muddy areas, cleaning up paths through the woods,
            and keeping the gate and water fountains clean and accessible.
          </p>
          <br></br>
          <p>
            {' '}
            Volunteer hours are every Friday beginning at 9 AM, and finishing by
            noon. Volunteers may come inside without their dogs, and any dogs
            brought along should not disrupt the work. Tools (rakes, shovels,
            wheelbarrows) are available at the park.
          </p>
        </article>
      </main>
      {/* 

      -donate button - ask Lee
      */}
    </Layout>
  )
}

export default GetInvolvedPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
