import React from 'react'
import './boton.css'

const Boton = (params) => {
    const {texto, clase, handleCLick} = params
  return <button className={clase} onClick={handleCLick}>{texto}</button>
}

export default Boton