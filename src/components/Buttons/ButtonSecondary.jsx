import React from 'react'
import "./Buttons.css"
const ButtonSecondary = (props) => {
    const {textButton} = props
  return (
    <button className="buttonSecondary">{textButton}</button>
    )
}
export default ButtonSecondary