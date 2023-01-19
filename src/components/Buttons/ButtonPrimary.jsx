import React from 'react'
import "./Buttons.css"
const ButtonPrimary = (props) => {
    const {textButton} = props
  return (
    <button className="buttonPrimary">{textButton}</button>
    )
}
export default ButtonPrimary