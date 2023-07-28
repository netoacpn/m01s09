import { useState } from "react"
import "./style.css"

function ListItem(props) {

  const [finalizado, setFinalizado] = useState(props.finalizado)

  return(
    <div class="container" >
      <p className={finalizado && 'trastejado'}>{props.textoTarefa}</p>
      <button onClick={() => setFinalizado(!finalizado)}>Finalizar</button>
      <button onClick={() => props.removerTarefa(props.id)}>Remover</button>
    </div>
  )
}

export default ListItem