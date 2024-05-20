import React, { useState } from 'react';
import './calculadora.css';
import Boton from './Boton';

const Calculadora = () => {
    const [data, setData] = useState({ resultado: '', operacion: '', primerNumero: '', segundoNumero: '', operador: '' });

    const escritura = (event) => {
        if (data.resultado.length >= 9) return;

        if (data.operador) {
            setData({ ...data, segundoNumero: data.segundoNumero + event.target.innerText });
        } else {
            if (data.resultado !== '' && data.primerNumero === data.resultado) {
                setData({ ...data, primerNumero: event.target.innerText, segundoNumero: '', resultado: '', operador: '' });
            } else {
                setData({ ...data, primerNumero: data.primerNumero + event.target.innerText });
            }
        }
    };

    const borrarUno = () => {
        if (data.segundoNumero !== '') {
            setData({ ...data, segundoNumero: data.segundoNumero.slice(0, -1) });
        } else if (data.operador !== '') {
            setData({ ...data, operador: '' });
        } else {
            setData({ ...data, primerNumero: data.primerNumero.slice(0, -1) });
        }
    };

    const borrarTodo = () => {
        setData({ resultado: '', operacion: '', primerNumero: '', segundoNumero: '', operador: '' });
    };

    const calcular = () => {
        let resultado = 0;
        const primerNum = parseFloat(data.primerNumero);
        const segundoNum = parseFloat(data.segundoNumero || data.resultado); 

        switch (data.operador) {
            case '+':
                resultado = primerNum + segundoNum;
                break;
            case '-':
                resultado = primerNum - segundoNum;
                if (resultado < 0) {
                    setData({ resultado: 'Error', operacion: '', primerNumero: '', segundoNumero: '', operador: '' });
                    return;
                }
                break;
            case '*':
                resultado = primerNum * segundoNum;
                break;
            case '/':
                if (segundoNum === 0) {
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
        if (data.primerNumero !== '' && data.segundoNumero === '') {
            setData({ ...data, operador: operacion });
        } else if (data.segundoNumero !== '') {
            calcular(); 
            setData(prevData => ({ ...prevData, operador: operacion, segundoNumero: '' })); 
        }
    };

    return (
        <main>
            <span className='answer'>{data.resultado === 'Error' ? 'Error' : (data.segundoNumero || data.primerNumero)}</span>
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
