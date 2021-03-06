import React from "react"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import './layout.css'

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
        {children}
      <Footer />
    </main>
  )
}

export default Layout
