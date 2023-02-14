import React from 'react'
import './CartWidget.css'

export const CartWidget = () => {
  return (
    <a className='cart' onClick={()=>{alert('Funcionalidad sin realizar aun.')}}>
       <i className="fas fa-shopping-cart">10</i>
    </a>
  )
}
