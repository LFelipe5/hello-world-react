
function Contador({contagem, onClick}: any){
  return (
    <button onClick={onClick}>
      Clicado { contagem } vezes
    </button>
  )
}

export default Contador