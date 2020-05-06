import React from "react"
import JSONData from "../content/content.json"

const JsonReader = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <ul>
      {JSONData.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.name}</li>
      })}
    </ul>
  </div>
)
export default JsonReader
