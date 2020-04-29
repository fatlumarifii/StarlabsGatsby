import React from "react"

const AboutCard = props => {
  return (
    <li>
      <div className="teamBox">
        <div className="imgWrp">
          <img className="img-responsive" alt="Angel" src={props.image} />
        </div>
        <div className="tInfo">
          <h4 className="text-center">{props.name}</h4>
          <h6 className="text-center">{props.prof}</h6>
        </div>
      </div>
    </li>
  )
}

export default AboutCard
