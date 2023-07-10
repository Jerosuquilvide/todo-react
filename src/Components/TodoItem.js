import React from 'react'
import '../TodoItem.css'
function TodoItem({text,completed}) {
  return (
    
        <li className='TodoItem'>
        <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>V</span>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
        <span className='Icon Icon-delte'>❌</span>
        </li>
    
  )
}

export  {TodoItem}