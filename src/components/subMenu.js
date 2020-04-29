import React from "react"

const SubMenu = props => {
  return (
    <div className="menuSwitch">
      <ul>
        <li className="cat-active" category="prod-cnt">
          {props.menuItem[0]}
        </li>
        <li className="" category="webdesign">
          {props.menuItem[1]}
        </li>
        <li className="" category="graphic">
          {props.menuItem[2]}
        </li>
        <li className="" category="inspiration">
          {props.menuItem[3]}
        </li>
        <li className="" category="creative">
          {props.menuItem[4]}
        </li>
      </ul>
    </div>
  )
}

export default SubMenu
