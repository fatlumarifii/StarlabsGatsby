import React, { useEffect, useState } from "react"
import Navigation from "./navigation"
import Header from "./header"
import "bootstrap/dist/css/bootstrap.css"
import "./template.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset)
    }
  }, [])

  return (
    <div className="lumi">
      <Header />
      <Navigation scroll={scroll} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
