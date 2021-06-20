import React from "react"
import Banner from "../components/banner/Banner"
import Layout from "../components/layout/Layout"
import * as styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="the page doesn't exists">
          <AniLink paintDrip hex="#3fd0d4" to="/" className="btn-white">
            go to home
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
