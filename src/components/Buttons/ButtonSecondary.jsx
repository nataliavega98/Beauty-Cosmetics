import React from 'react'
import { Link } from 'react-router-dom'
import "./Buttons.css"
const ButtonSecondary = (props) => {
    const {textButton, pathLink} = props
    console.log(pathLink)

  return (
    <button className="buttonSecondary"><Link to={pathLink}>{textButton}</Link></button>
    )
}
export default ButtonSecondary