import React from "react"
import Banner from "../components/banner/Banner"
import StyledHero from "../components/StyledHero"
import Layout from "../components/layout/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import About from "../components/about/About"
import Services from "../components/services/Services"

import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const aboutImage = getImage(data.aboutImage)
  return (
    <Layout>
      <StyledHero home="true" img={data.heroImage.childImageSharp.fluid}>
        <Banner
          title="lets travel the world"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis impedit tenetur nisi minima aperiam sint, ipsum sit debitis culpa vel hic atque exercitationem voluptatem amet, accusantium quos distinctio! Quis."
        >
          <AniLink paintDrip hex="#3fd0d4" to="/tours" className="btn-white">
            Letss go!
          </AniLink>
        </Banner>
      </StyledHero>
      <About image={aboutImage} />
      <Services />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    heroImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
