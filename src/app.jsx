import React, { useState, useEffect } from 'react';

//Biblioteca
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Componentes
import eventoDetalhes from './components/eventoDetalhes';
import AddEventos from './components/Add-eventos'
import Eventos from './components/eventos'

import './app.css'

const App = () => {
    
    const [eventos, setEventos] = useState([])
    

    useEffect(() => {
        const dadosEventos = localStorage.eventos ? JSON.parse(localStorage.eventos) : []
        setEventos(dadosEventos)
    }, [])   


    //Adicionar evento
    const AdicionarEvento = titulo => {
        const newEvents = [...eventos, {
            id: Math.random(),
            titulo: titulo,
            completed: false
        }]
        localStorage.setItem('eventos', JSON.stringify(newEvents))
        setEventos(newEvents)
    }

    //Clicar na tarefa, meter borda
    const CompletarEvento = EventoId => {
        const newEvents = eventos.map(evento => {
            if(evento.id === EventoId) return {...evento, completed: !evento.completed}
            //Se entrar no if já não chegará aqui
            return evento
        })
        localStorage.setItem('eventos', JSON.stringify(newEvents))
        setEventos(newEvents)
    }

    const EliminarEvento = EventoId => {
        const newEvents = eventos.filter(evento => evento.id !== EventoId)
        localStorage.setItem('eventos', JSON.stringify(newEvents))
        setEventos(newEvents)
    }

    return(
        <>
            <div className='container-principal'>
                <h1>Meus Eventos</h1>
                <Router>
                    <Switch>
                        <Route path='/:eventoEspecifico' component={eventoDetalhes}/>
                        <Route path='/' render={() => (
                            <>
                                <AddEventos addEvento={AdicionarEvento}/>
                                <Eventos eventos={eventos} CompletarEvento={CompletarEvento} EliminarEvento={EliminarEvento}/>
                            </>
                        )}/>
                    </Switch>
                </Router>
            </div>
        </>
    )
}

export default App;