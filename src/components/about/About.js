import React from "react"
import Title from "../title/Title"
import * as styles from "./about.module.css"

import { GatsbyImage } from "gatsby-plugin-image"

const About = ({ image }) => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <GatsbyImage image={image} alt="awesome-landscape" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            saepe, sit ullam fuga, quos quam sed consequatur accusantium maxime
            quaerat reprehenderit qui ex natus. Iusto harum dolor facilis alias
            nostrum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            saepe, sit ullam fuga, quos quam sed consequatur accusantium maxime
            quaerat reprehenderit qui ex natus. Iusto harum dolor facilis alias
            nostrum.
          </p>
          <button className="btn-primary" type="button">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
