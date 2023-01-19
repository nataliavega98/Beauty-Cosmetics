import React from 'react'
import "./Buttons.css"
import { Link } from 'react-router-dom'
const ButtonPrimary = (props) => {
    const {textButton, pathLink} = props
    
  return (
    <button className="buttonPrimary"><Link to={pathLink}>{textButton}</Link></button>
    )
}
export default ButtonPrimary