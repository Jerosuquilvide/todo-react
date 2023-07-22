import React from 'react'
import './CreateTodoButton.css'
function TodoButton() {
  return (
    <button className='CreateTodoButton'
    onClick={() => {
      <>
        <h1>Crear Todo</h1>
        <p>Texto:</p>
      </>
    }}
    >
    +</button>
  )
}

export  {TodoButton}