import { useState } from "react"
import './App.css'
import AdicionarCard from './components/CardAdicionar'

function App() {

  const [listaTarefas, setListaTarefas] = useState([
    {textoTarefa: "tarefa ", finalizado: false}    
  ])

  return (
    <>
      <AdicionarCard></AdicionarCard>
    </>
  )
}

export default App
