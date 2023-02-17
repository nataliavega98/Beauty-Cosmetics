import React from 'react'
import { Link } from 'react-router-dom'
import "./Buttons.css"
const ButtonSecondary = (props) => {
    const {textButton, pathLink, icon, onClick} = props
    const isClickeable = () => {
      if(onClick) {
        return onClick()
      }

    }
  return (
    <Link to={pathLink} className="linkContainer"><button className="buttonSecondary" onClick={() => isClickeable()}><i className={icon}/>{textButton}</button></Link>
    )
}
export default ButtonSecondary