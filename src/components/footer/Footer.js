import React from "react"
import * as styles from "./footer.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../../constants/links"
import socialLinks from "../../constants/social-links"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, i) => (
          <AniLink paintDrip hex="#3fd0d4" key={i} to={item.path}>
            {item.text}
          </AniLink>
        ))}
      </div>
      <div className={styles.icons}>
        {socialLinks.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyrights &copy; in transit company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
