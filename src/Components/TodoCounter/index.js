import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContex';
function TodoCounter() {  
  const {
    completedTodos,
    todos
  } = React.useContext(TodoContext);
  
  if(todos.completed){
    return (
      <div className='TodosFinish'>¡ Felidades, completaste todas las tareas pendientes !</div>
    )
    
  }else{
    return (
      <div className='TodoCounter'>Has completado <span>{completedTodos}</span> de <span>{todos.length}</span> TODOs </div>
    )
  }
  
}

export  {TodoCounter}