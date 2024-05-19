import React, { useState } from 'react'
import './calculadora.css'
import Boton from './Boton'

const Calculadora = () => {
    const [data, setData] = useState({resultado: '', operacion: ''})

    const escritura = (event) => {
        if (data.resultado.length >= 9) return

        setData({...data, resultado: data.resultado + event.target.innerText})
    }

    const borrarUno = () => {
        setData({ ...data, resultado: data.resultado.slice(0, -1) });
    }  
    
    const borrarTodo = () => {
        setData({resultado: ''})
    }

    const resultado = () => {
        const resultado = eval(data.operacion)

        setData({...data, resultado})
    }

  return (
    <main>
        <span className='answer'>{data.resultado}</span>
        <Boton texto='AC' clase='gris' handleCLick={borrarTodo}/>
        <Boton texto='C' clase='gris' handleCLick={borrarUno}/>
        <Boton texto='+/-' clase='gris' />
        <Boton texto='/' clase='operacion' />
        <Boton texto='7' clase='numero' handleCLick={escritura}/>
        <Boton texto='8' clase='numero' handleCLick={escritura}/>
        <Boton texto='9' clase='numero' handleCLick={escritura}/>
        <Boton texto='*' clase='operacion' />
        <Boton texto='4' clase='numero' handleCLick={escritura}/>
        <Boton texto='5' clase='numero' handleCLick={escritura}/>
        <Boton texto='6' clase='numero' handleCLick={escritura}/>
        <Boton texto='-' clase='operacion' />
        <Boton texto='1' clase='numero' handleCLick={escritura}/>
        <Boton texto='2' clase='numero' handleCLick={escritura}/>
        <Boton texto='3' clase='numero' handleCLick={escritura}/>
        <Boton texto='+' clase='operacion' />
        <Boton texto='0' clase='numero' handleCLick={escritura}/>
        <Boton texto='%' clase='numero' />
        <Boton texto='.' clase='numero' />
        <Boton texto='=' clase='operacion' handleCLick={resultado}/>
    </main>
  )
}

export default Calculadora