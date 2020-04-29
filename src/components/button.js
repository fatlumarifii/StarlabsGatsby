import React from "react"
const Buttoni = props => {
  return (
    <div className="loadit">
      <button type="button" className={[props.classNames]}>
        {props.text}
      </button>
    </div>
  )
}

export default Buttoni
