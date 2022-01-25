/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import Button from './Button'

//Biblioteca
import { useParams, useHistory } from 'react-router-dom'

import './eventoDetalhes.css';

export default () => {
    const history = useHistory()
    const { eventoEspecifico } = useParams()

    return (
        <>
            <div className='voltar'><Button onClick={() => history.goBack()}>Voltar</Button></div>
            <h2>{ eventoEspecifico }</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusamus necessitatibus voluptas quaerat voluptates, temporibus obcaecati commodi, dolores vero modi accusantium dolorem quae incidunt nam, quos impedit? Quos, vel laborum.</p>
        </>
    )
} 
