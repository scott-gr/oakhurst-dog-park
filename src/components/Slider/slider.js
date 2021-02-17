import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import "./slider.module.css"
import "pure-react-carousel/dist/react-carousel.es.css"

// Pure React Carousel Docs https://github.com/express-labs/pure-react-carousel

const PhotoSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      sliderImgOne: file(relativePath: { eq: "widepark.png" }) {
        childImageSharp {
          fluid(
            maxHeight: 900
            pngCompressionSpeed: 10
            fit: COVER
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgTwo: file(relativePath: { eq: "doglooking.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 900
            fit: COVER
            pngCompressionSpeed: 10
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgThree: file(relativePath: { eq: "pool.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 900
            fit: COVER
            pngCompressionSpeed: 10
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgFour: file(relativePath: { eq: "twodogs.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 900
            fit: COVER
            pngCompressionSpeed: 10
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgFive: file(relativePath: { eq: "falltrees.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 900
            fit: COVER
            pngCompressionSpeed: 10
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgSix: file(relativePath: { eq: "twosheps.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 900
            fit: COVER
            pngCompressionSpeed: 10
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={75}
      totalSlides={6}
      infinite={true}
      touchEnabled={true}
      dragEnabled={true}
      isPlaying={true}
      isIntrinsicHeight={false}
      orientation={"horizontal"}
      styleName="slideGrid"
    >
      <Slider
        styleName="carouselWrapper"
        classNameTray="trayClass"
        classNameTrayWrap="wrapClass"
      >
        <Slide styleName="slide" innerClassName="innerClass" index={0}>
          <Img
            fluid={data.sliderImgOne.childImageSharp.fluid}
            durationFadeIn={50}
          />
        </Slide>
        <Slide styleName="slide" index={1}>
          <Img
            fluid={data.sliderImgTwo.childImageSharp.fluid}
            durationFadeIn={50}
          />
        </Slide>
        <Slide styleName="slide" index={2}>
          <Img fluid={data.sliderImgThree.childImageSharp.fluid} />
        </Slide>
        <Slide styleName="slide" index={3}>
          <Img fluid={data.sliderImgFour.childImageSharp.fluid} />
        </Slide>
        <Slide styleName="slide" index={4}>
          <Img fluid={data.sliderImgFive.childImageSharp.fluid} />
        </Slide>
        <Slide styleName="slide" index={5}>
          <Img fluid={data.sliderImgSix.childImageSharp.fluid} />
        </Slide>
      </Slider>
    </CarouselProvider>
  )
}

export default PhotoSlider
