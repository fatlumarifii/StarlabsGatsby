import React from "react"
import Buttoni from "./button"

const ServiceCard = props => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-3">
      <div className="blok text-center">
        <div className="hexagon-a">
          <a className="hlinktop" href="#">
            <div className="hexa-a">
              <div className="hcontainer-a">
                <div className="vertical-align-a">
                  <span className="texts-a">
                    <i className={props.icon}></i>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="hexagon">
          <a className="hlinkbott" href="#">
            <div className="hexa">
              <div className="hcontainer">
                <div className="vertical-align">
                  <span className="texts"></span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <h4>{props.title}</h4>
        <p>
          <small>{props.text}</small>
        </p>
        <Buttoni text={"Read More"} classNames={"btn btn-primary"} />
      </div>
    </div>
  )
}

export default ServiceCard
