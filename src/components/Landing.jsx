import React from 'react'
import ItemListContainer from './Contenedor/ItemListContainer'
import Navbar from './Navbar/Navbar'

export const Landing = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting='Bienvenidos a la tienda de articulos usados!!!'/>
    
    </>
    
  )
}
