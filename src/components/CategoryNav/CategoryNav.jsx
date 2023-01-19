import React from 'react'
// Estilos
import './CategoryNav.css'
const CategoryNav = () => {
  return (
    <nav className='categoryNavContainer'>
        <p>Categories</p>
        <ul className='categoryNavContainerList'>
            <li>All</li>
            <li>Mascara</li>
            <li>Lipstick</li>
            <li>Foundation</li>
            <li>Blush</li>
            <li>Eyeliner</li>
            <li>Eyeshadow</li>
            <li>Nail polish</li>
        </ul>
    </nav>
  )
}

export default CategoryNav 