/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import EventoItem from './eventosItem'

import './eventos.css'

export default ({ eventos, CompletarEvento, EliminarEvento }) => {
    
    return(
        <ul>
            {
                eventos.length === 0 ? 
                <p className='aviso'>Nenhum evento registrado ainda.</p> :
                eventos.map((evento,index) => <EventoItem key={index} dados={evento} CompletarEvento={CompletarEvento} EliminarEvento={EliminarEvento}/>)
            }
        </ul>
    )
}