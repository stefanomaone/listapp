import React, { useState } from 'react'
import '../App.css'
function FormAggiungiLibro({onAggiungiLibro}) {
const [titolo,setTitolo] = useState("")
const [autore,setAutore] = useState("")

const gestisciInvio=((e)=>{
  e.preventDefault()
  if(titolo&&autore){
    onAggiungiLibro({titolo,autore})
    setTitolo("")
    setAutore("")
  }
})

  return (
        <form onSubmit={gestisciInvio}  className='form'>
            <input className='input1' type='text' placeholder='Titolo del libro' value={titolo} onChange={(e)=>setTitolo(e.target.value)}></input>
            <input className='input2' type='text' placeholder='Autore del libro' value={autore} onChange={(e)=>setAutore(e.target.value)}></input>
            <button className='btn'> Aggiungi libro alla lista</button>
        </form>
  )
}

export default FormAggiungiLibro
