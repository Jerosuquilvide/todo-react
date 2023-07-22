import './TodoCounter.css'
function TodoCounter({total,completed}) {  
  if(total === completed){
    return (
      <div className='TodosFinish'>¡ Felidades, completaste todas las tareas pendientes !</div>
    )
    
  }else{
    return (
      <div className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> TODOs </div>
    )
  }
  
}

export  {TodoCounter}