import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/contact/Contact"

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.contactImage.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContactImage {
    contactImage: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
