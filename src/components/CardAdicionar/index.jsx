import { useState } from "react"

function AdicionarCard () {  

  const [textoTarefa, setTextoTarefa] = useState("")

  return(
    <>
      <input placeholder="Digite sua Tarefa" type="text" value={textoTarefa} onChange={(e) => setTextoTarefa(e.target.value)}/>
      <button onClick={() => {}}>Adicionar</button>            
    </>
  )
}

export default AdicionarCard