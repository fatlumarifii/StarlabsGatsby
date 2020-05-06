import React from "react"

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
