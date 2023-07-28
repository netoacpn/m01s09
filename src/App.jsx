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

  function removerTarefa(id){
    const novaLista = listaTarefas.filter(item => item.id != id)

    setListaTarefas(novaLista)
  }

  return (
    <>
      <AdicionarCard criarTarefa={criarTarefa}/>
      <h2>Lista de Tarefas</h2>
      <div>{listaTarefas.map(tarefa => (<ListItem key={tarefa.id} id={tarefa.id} textoTarefa={tarefa.textoTarefa} finalizado={tarefa.finalizado} removerTarefa={removerTarefa}/>))}</div>
    </>
  )
}

export default App
