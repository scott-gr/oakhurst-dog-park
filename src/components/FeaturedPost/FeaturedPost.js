import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import {featuredBody, featuredCard, featuredDate, featuredTitle} from './featuredpost.module.css'
import SEO from '../seo.js'

const FeaturedPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredpost
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.nodes
  if (posts.length === 0) {
    return (
      <>
        <SEO title="Featured Post" />
        <p>
          No announcements found. Add markdown posts to "content/announcements"
          (or the directory you specified for the "gatsby-source-filesystem"
          plugin in gatsby-config.js).
        </p>
      </>
    )
  }
  return (
    <>
      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug
        const featured = post.frontmatter.featuredpost

        if (featured) {
          return (
            <article
              className={featuredCard}
              itemScope
              itemType="http://schema.org/Article"
            >
              <Link
                to={post.fields.slug}
                itemProp="url"
                className={featuredTitle}
              >
                <h2 itemProp="headline" className={featuredTitle}>
                  {title}
                </h2>
              </Link>

              <small className={featuredDate}>{post.frontmatter.date}</small>

              <section>
                <section
                  className={featuredBody}
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  itemProp="articleBody"
                />
              </section>
            </article>
          )
        }
      })}
    </>
  )
}

export default FeaturedPost
