import React from "react"
import Banner from "../components/banner/Banner"
import Layout from "../components/layout/Layout"
import * as styles from "../css/error.module.css"
import {Link} from 'gatsby'

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="the page doesn't exists">
          <Link to="/" className="btn-white">
            go to home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
