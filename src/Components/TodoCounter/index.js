import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContex';
function TodoCounter() {  
  const {
    completedTodos,
    todos
  } = React.useContext(TodoContext);
  console.log({todos});
  if((todos !== [] && todos.length<=0) || todos === "TODOS_V1"){
    return (
      <div className='TodosFinish'>¡ Crea tu primer TODO !</div>
    )
  }
  if(todos.length === completedTodos ){
    return (
      <div className='TodosFinish'>¡ Felidades, completaste todas las tareas pendientes !</div>
    )
    
  }
  if(todos !== 'TODOS_V1'){
    return (
      <div className='TodoCounter'>Has completado <span>{completedTodos}</span> de <span>{todos.length}</span> TODOs </div>
    )
  }
  
}

export  {TodoCounter}