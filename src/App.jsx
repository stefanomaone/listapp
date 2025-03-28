import React, { useState } from 'react'
import './App.css'
import FormAggiungiLibro from './components/FormAggiungiLibro'
import ListaLibri from './components/lista-libri'

function App() {
  const [libri,setLibri] =useState([
    {titolo: '1984', autore: 'George Orwell'},
    {titolo: 'Il signore degli anelli', autore: 'J.R.R. Tolkien'}
  ])

  const aggiungiLibro= (nuovoLibro) => {
    setLibri([...libri,nuovoLibro])
  }
  

  return (
    <>
     <div className='app'>
      <h1>La Mia Lista Di Libri</h1>

     <FormAggiungiLibro onAggiungiLibro={aggiungiLibro}></FormAggiungiLibro>
     <ListaLibri libri={libri}></ListaLibri>
    </div> 
    </>
  )
}

export default App
