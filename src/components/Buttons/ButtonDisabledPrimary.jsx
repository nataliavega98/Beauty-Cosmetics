import React from 'react'
import "./Buttons.css"
import { Link } from 'react-router-dom'
const ButtonDisabledPrimary = (props) => {
    const {textButton, pathLink, icon, onClick} = props
    const isClickeable = () => {
      if(onClick) {
        return onClick()
      }

    }
  return (
    <Link to={pathLink} className="linkContainer" onClick={() => isClickeable()}><button className="ButtonDisabledPrimary"><i className={icon}/>{textButton}</button></Link>
    )
}
export default ButtonDisabledPrimary