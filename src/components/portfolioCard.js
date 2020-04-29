import React from "react"
import Buttoni from "./button"
const PortfolioCard = props => {
  return (
    <div className="col-xs-6 col-sm-3 col-md-3 dbox prod-cnt graphic">
      <div className="itemCont">
        <a href="#">
          <div className="thumb">
            <img
              className="img-responsive center-block"
              alt="Blue Gate"
              src={props.image}
            />
          </div>
          <div className="itemInfo">
            <h4>{props.title}</h4>
            <h6>{props.type}</h6>
            <p>{props.text}</p>
          </div>
        </a>
        <Buttoni text={"view"} classNames={"btn btn-primary goto"} />
      </div>
    </div>
  )
}
export default PortfolioCard
