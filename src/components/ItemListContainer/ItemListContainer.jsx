import './ItemListContainer.css'
import React from 'react'

//Componentes
import CategoryNav from '../CategoryNav/CategoryNav'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = () => {
  return (

    <section className='storeContainer'>
      <h2>Store</h2>
      <CategoryNav/>
      <ItemList/>
    </section>
    
  )
}

export default ItemListContainer
