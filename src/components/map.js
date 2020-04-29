import React from "react"

const Map = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="templatemo_maps">
            <div className="fluid-wrapper">
              <iframe src={props.url}></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
