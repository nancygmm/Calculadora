import React, { useState } from 'react';
import './calculadora.css';
import Boton from './Boton';

const Calculadora = () => {
    const [data, setData] = useState({ resultado: '', operacion: '', primerNumero: '', segundoNumero: '', operador: '' });

    const escritura = (event) => {
        if (data.resultado.length >= 9) return;

        if (data.resultado !== '') {
            // Si hay un resultado anterior, establecer el nuevo número como el primer número de la próxima operación
            setData({ ...data, resultado: '', primerNumero: event.target.innerText, segundoNumero: '', operador: '' });
        } else if (data.operacion === '') {
            setData({ ...data, primerNumero: data.primerNumero + event.target.innerText });
        } else {
            setData({ ...data, segundoNumero: data.segundoNumero + event.target.innerText });
        }
    };

    const borrarUno = () => {
        setData({ ...data, resultado: data.resultado.slice(0, -1), numeroActual: data.numeroActual.slice(0, -1) });
    };

    const borrarTodo = () => {
        setData({ resultado: '', operacion: '', primerNumero: '', segundoNumero: '', operador: '' });
    };

    const calcular = () => {
        let resultado = 0;
        const primerNum = parseFloat(data.primerNumero);
        const segundoNum = parseFloat(data.segundoNumero || data.resultado); // Usamos el resultado si no hay segundo número
    
        switch (data.operador) {
            case '+':
                resultado = primerNum + segundoNum;
                break;
            case '-':
                resultado = primerNum - segundoNum;
                break;
            case '*':
                resultado = primerNum * segundoNum;
                break;
            case '/':
                if (segundoNum === 0) {
                    // Manejar división por cero
                    setData({ resultado: 'Error', operacion: '', primerNumero: '', segundoNumero: '', operador: '' });
                    return;
                }
                resultado = primerNum / segundoNum;
                break;
            default:
                resultado = 0;
        }
    
        setData({ ...data, resultado: resultado.toString(), primerNumero: resultado.toString(), segundoNumero: '', operador: '' });
    };
    

    const agregarOperacion = (operacion) => {
        if (data.primerNumero !== '' && data.operador === '') {
            setData({ ...data, operador: operacion, operacion: data.primerNumero + operacion });
        }
    };

    return (
        <main>
            <span className='answer'>{data.resultado || data.segundoNumero || data.primerNumero}</span>
            <Boton texto='AC' clase='gris' handleCLick={borrarTodo} />
            <Boton texto='C' clase='gris' handleCLick={borrarUno} />
            <Boton texto='+/-' clase='gris' />
            <Boton texto='/' clase='operacion' handleCLick={() => agregarOperacion('/')} />
            <Boton texto='7' clase='numero' handleCLick={escritura} />
            <Boton texto='8' clase='numero' handleCLick={escritura} />
            <Boton texto='9' clase='numero' handleCLick={escritura} />
            <Boton texto='*' clase='operacion' handleCLick={() => agregarOperacion('*')} />
            <Boton texto='4' clase='numero' handleCLick={escritura} />
            <Boton texto='5' clase='numero' handleCLick={escritura} />
            <Boton texto='6' clase='numero' handleCLick={escritura} />
            <Boton texto='-' clase='operacion' handleCLick={() => agregarOperacion('-')} />
            <Boton texto='1' clase='numero' handleCLick={escritura} />
            <Boton texto='2' clase='numero' handleCLick={escritura} />
            <Boton texto='3' clase='numero' handleCLick={escritura} />
            <Boton texto='+' clase='operacion' handleCLick={() => agregarOperacion('+')} />
            <Boton texto='0' clase='numero' handleCLick={escritura} />
            <Boton texto='%' clase='numero' />
            <Boton texto='.' clase='numero' />
            <Boton texto='=' clase='operacion' handleCLick={calcular} />
        </main>
    );
};

export default Calculadora;
