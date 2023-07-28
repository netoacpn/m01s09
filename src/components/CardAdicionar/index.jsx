import { useState } from "react"
import "./style.css"

function AdicionarCard (props) {  

  const [textoTarefa, setTextoTarefa] = useState("")

  const handleCriarTarefa = () => {
    props.criarTarefa(textoTarefa)
    setTextoTarefa("")
  }

  return(
    <div class="divGrid">
      <input class="input" placeholder="Digite sua Tarefa" type="text" value={textoTarefa} onChange={(e) => setTextoTarefa(e.target.value)}/>
      <button class="button" onClick={() => handleCriarTarefa()}>Adicionar</button>            
    </div>
  )
}

export default AdicionarCard