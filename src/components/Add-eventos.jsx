/* eslint-disable no-throw-literal */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from './Button'

import './AddEventos.css';

export default ({ addEvento }) => {

    const [inputValue, setInputValue] = useState('')

    const AdicionarEvento = () => {
        try {
            if(inputValue === '') throw 'O campo está vazio, preenche-o.'
            addEvento(inputValue)
        } catch (error) {
            alert(error)
        }finally{
            //Limpar o input
            setInputValue('')
        }
        
    }


    return(
        <div className='adicionar-container'>
            <input type="text" value={inputValue} onChange={ e => setInputValue(e.target.value)}/>
            <Button onClick={AdicionarEvento}><AddCircleIcon style={{color: '#1d1220',transition: '.4s linear', background: 'none'}}/> Adicionar</Button>
        </div>
    )
}