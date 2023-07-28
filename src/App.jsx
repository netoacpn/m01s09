import { useState } from "react"
import './App.css'
import AdicionarCard from './components/CardAdicionar'
import ListItem from "./components/ListItem"

function App() {

  const [listaTarefas, setListaTarefas] = useState([])

  function criarTarefa(texto){
    if(texto == ""){
      alert("Insira uma tarefa válida.")
      return
    }

    const novaTarefa = {id: listaTarefas.length + 1, textoTarefa: texto, finalizado: false}

    setListaTarefas([...listaTarefas, novaTarefa])

  }

  return (
    <>
      <AdicionarCard criarTarefa={criarTarefa}/>
      <div>{listaTarefas.map(tarefa => (<ListItem key={tarefa.id} textoTarefa={tarefa.textoTarefa} finalizado={tarefa.finalizado} />))}</div>
    </>
  )
}

export default App
