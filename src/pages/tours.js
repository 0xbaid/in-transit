import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import StyledHero from "../components/StyledHero"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.ToursImage.childImageSharp.fluid} />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query ToursImage {
    ToursImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
