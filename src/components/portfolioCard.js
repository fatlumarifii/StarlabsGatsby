import React from "react"
import Buttoni from "./button"
import {Link} from 'gatsby'
const PortfolioCard = props => {
  return (
    <div className="col-xs-6 col-sm-3 col-md-3 dbox prod-cnt graphic">
      <div className="itemCont">
        <Link href="#">
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
        </Link>
        <Buttoni text={"view"} classNames={"btn btn-primary goto"} />
      </div>
    </div>
  )
}
export default PortfolioCard
