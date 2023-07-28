import { useState } from "react"

function AdicionarCard (props) {  

  const [textoTarefa, setTextoTarefa] = useState("")

  const handleCriarTarefa = () => {
    props.criarTarefa(textoTarefa)
    setTextoTarefa("")
  }

  return(
    <>
      <input placeholder="Digite sua Tarefa" type="text" value={textoTarefa} onChange={(e) => setTextoTarefa(e.target.value)}/>
      <button onClick={() => handleCriarTarefa()}>Adicionar</button>            
    </>
  )
}

export default AdicionarCard