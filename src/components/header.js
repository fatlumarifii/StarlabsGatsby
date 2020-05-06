import React from "react"
import { Link } from "gatsby"
import Slider1 from "../images/slider/img_1.jpg"
import Slider2 from "../images/slider/img_2.jpg"
import Slider3 from "../images/slider/img_3.jpg"
import Carousel from "react-bootstrap/Carousel"
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRss } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div id="templatemo_top" className="mainTop">
        <div className="container">
          <div className="row">
            <div className="hidden-xs hidden-sm col-md-6">
              <div className="mailme">
                <a href="mailto:info@company.com">
                info@company.com
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="socials">
                <ul>
                  <li>
                    <Link to="">
                    <FaTwitter/>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                     <i className="fa"><FaFacebook/></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                     <FaRss/>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaDribbble/>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaInstagram/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="slider" className="nivoSlider">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Slider1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slider2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slider3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </header>
  )
}

export default Header
