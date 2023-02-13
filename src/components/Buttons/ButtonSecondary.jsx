import React from 'react'
import { Link } from 'react-router-dom'
import "./Buttons.css"
const ButtonSecondary = (props) => {
    const {textButton, pathLink} = props
    console.log(pathLink)

  return (
    <Link to={pathLink} className="linkContainer"><button className="buttonSecondary">{textButton}</button></Link>
    )
}
export default ButtonSecondary