import React from 'react'
import './CreateTodoButton.css'
function TodoButton({onUpdate}) {
  return (
    <>
    <button className='CreateTodoButton'onClick={onUpdate}>

    +</button>
    </>
  )
  
}

export  {TodoButton}