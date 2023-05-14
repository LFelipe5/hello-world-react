import  { useState }  from 'react'
import  Contador  from './Contador'
import '../App.css'

export default function MainContador(){
  const [contagem, setContagem] = useState(0)

  function onclick(){
    setContagem(contagem+1)
  }

  return (
    <div>
      <Contador contagem={contagem} onClick={onclick}/>
    </div>
  )
}