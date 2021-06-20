import React, { useState } from "react"
import * as styles from "./navbar.module.css"
// import { Link } from "gatsby" replaced with anilink for transition
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../../constants/links"
import socialLinks from "../../constants/social-links"
import logo from "../../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="website logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, i) => (
            <li key={i}>
              <AniLink paintDrip hex="#3fd0d4" to={item.path}>
                {item.text}
              </AniLink>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialLinks.map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
