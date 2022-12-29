import './ItemListContainer.css'
import React from 'react'

const ItemListContainer = (prop) => {
  return (
    <div className='greeting'><p>Hoy te deseamos un...<span>{prop.greeting}</span></p> <img src={prop.greetimg} alt="Imagen de saludo" /> </div>
  )
}

export default ItemListContainer
