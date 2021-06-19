// import React from "react"
// import Layout from "../components/layout/Layout"

// import { graphql } from "gatsby"

// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import styled from "styled-components"
// import img from "../images/connectBcg.jpeg"

// const blog = ({ data }) => {
//   console.log(data)
//   const image = getImage(data.fixed)
//   return (
//     <Layout>
//       Hello from blog page!
//       <Wrapper>
//         <article>
//           <h3>basic image</h3>
//           <img src={img} alt="basic image" className="basic" />
//         </article>
//         <article>
//           <h3>fixed image</h3>
//           <GatsbyImage image={image} alt="fixed-image" />
//         </article>
//         <article>
//           <h3>fluid image</h3>
//           <GatsbyImage image={getImage(data.fluid)} alt="fluid-image" />
//         </article>
//       </Wrapper>
//     </Layout>
//   )
// }
// const Wrapper = styled.div`
//   margin: 0 auto 10rem auto;
//   width: 80vw;
//   text-align: center;
//   text-transform: capitalize;
//   article {
//     border: 1px solid red;
//     padding: 1rem 0;
//   }
//   .basic {
//     width: 100%;
//   }
// `
// export const pageQuery = graphql`
//   query MyQuery {
//     fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
//       childImageSharp {
//         gatsbyImageData(width: 300, height: 400)
//       }
//     }

//     fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//   }
// `

// export default blog
