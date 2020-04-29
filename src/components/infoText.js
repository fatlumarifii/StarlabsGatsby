import React from "react"

const InfoText = props => {
  return (
    <div className="infoTxt">
      <p className="text-center">
        <small>{props.text}</small>
      </p>
    </div>
  )
}

export default InfoText
