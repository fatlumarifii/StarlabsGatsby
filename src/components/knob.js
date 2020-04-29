import React from "react"
import "./circle.css"

const Knob = props => {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="knob">
        <div className={props.className}>
          <span>
            {props.number}%
            <br />
            {props.text}
          </span>
          <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Knob
