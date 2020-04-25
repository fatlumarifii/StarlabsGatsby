import React from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"

const Navigation = props => {
  let validationHeader = props.scroll > 1 ? "mWrapper fixed" : "mWrapper"
  return (
    <div className={validationHeader}>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="logo">
              <img src={logo} alt="Powerful Theme" />
            </div>
          </div>
          <div className="col-sm-8 col-md-8">
            <nav className="mainMenu">
              <ul className="nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
