import React from "react"
import Buttoni from "./button"
import {Link} from 'gatsby'

const ServiceCard = props => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-3">
      <div className="blok text-center">
        <div className="hexagon-a">
          <Link className="hlinktop" to="#">
            <div className="hexa-a">
              <div className="hcontainer-a">
                <div className="vertical-align-a">
                  <span className="texts-a">
                    <i className={props.icon}></i>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="hexagon">
          <Link className="hlinkbott" to="#">
            <div className="hexa">
              <div className="hcontainer">
                <div className="vertical-align">
                  <span className="texts"></span>
                </div>
              </div>
            </div>
          </Link>
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
