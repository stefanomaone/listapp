import React from 'react'

function ListaLibri({libri}) {
  return (
    <div className='listaLibri'>
      <ul>
      {//Inseriamo del Javascript puro per riempire la lista
        libri.map((libro,indice)=>(
            <li key={indice}>{libro.titolo} di {libro.autore}</li>
        ))}
    </ul>
    </div>
    
  )
}

export default ListaLibri
