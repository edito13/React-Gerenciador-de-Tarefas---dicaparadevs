/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import { useHistory } from 'react-router-dom'

import { Assignment, Delete } from '@material-ui/icons'

export default ({ dados, CompletarEvento, EliminarEvento }) => {

    const history = useHistory()
    return(
        <div style={
            dados.completed === true ? 
            {borderLeft: '7px solid chartreuse'} :
            {borderLeft: 'none'}
        } className='evento-container'>
            <div className="evento-titulo" onClick={() => CompletarEvento(dados.id)}>
                {dados.titulo}
            </div>
            <div className='evento-botoes'>
                <Assignment style={{background : '#444'}} onClick={() => history.push(`/${dados.titulo}`)}/>
                <Delete style={{background : '#444'}} onClick={() => EliminarEvento(dados.id)}/>
            </div> 
        </div>
    )
}