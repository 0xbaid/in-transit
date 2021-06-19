import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import StyledHero from "../components/StyledHero"

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogImage.childImageSharp.fluid} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogImage {
    blogImage: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
