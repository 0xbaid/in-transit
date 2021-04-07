import React from "react"
import Banner from "../components/banner/Banner"
import SimpleHero from "../components/hero/SimpleHero"
import Layout from "../components/layout/Layout"
import {Link} from 'gatsby'

export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="lets travel the world"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis impedit tenetur nisi minima aperiam sint, ipsum sit debitis culpa vel hic atque exercitationem voluptatem amet, accusantium quos distinctio! Quis."
        >
          <Link to='/tours' className='btn-white'>Letss go!</Link>
        </Banner>
      </SimpleHero>
    </Layout>
  )
}
