import React from "react"
import { Link } from "gatsby"
import Slider1 from "../images/slider/img_1.jpg"
import Slider2 from "../images/slider/img_2.jpg"
import Slider3 from "../images/slider/img_3.jpg"
import Carousel from "react-bootstrap/Carousel"

const Title = props => {
  return (
    <div className="secHeader">
      <h1 className="text-center">{props.title}</h1>
      <p className="text-center">
        <small>{props.desc}</small>
      </p>
    </div>
  )
}

export default Title
