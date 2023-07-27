import { useState } from "react"
import './App.css'
import AdicionarCard from './components/CardAdicionar'

function App() {

  const [listaTarefas, setListaTarefas] = useState([
    {id: 1, textoTarefa: "tarefa ", finalizado: false}    
  ])

  function criarTarefa(texto){
    const novaTarefa = {id: listaTarefas.length + 1, textoTarefa: texto, finalizado: false}

    setListaTarefas([...listaTarefas, novaTarefa])

  }

  return (
    <>
      <AdicionarCard criarTarefa={criarTarefa}/>
      <div>{listaTarefas.map(tarefa => (<span>{tarefa.textoTarefa}</span>))}</div>
    </>
  )
}

export default App
