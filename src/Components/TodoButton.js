import React from 'react'
import '../CreateTodoButton.css'
function TodoButton() {
  return (
    <button className='CreateTodoButton'
    onClick={() => {
      console.log("Crear TODO")
    }}
    >
    +</button>
  )
}

export  {TodoButton}