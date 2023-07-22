import React from 'react'
import './TodoItem.css'
import { GiCheckMark } from 'react-icons/gi';
import { TfiClose } from 'react-icons/tfi';
function TodoItem({text,completed,onComplete,onDelete}) {
  return (
    
        <li className='TodoItem'>
        <span className={`Icon Icon-check ${completed && "Icon-check--active"}`} onClick={onComplete}><GiCheckMark /></span>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
        <span className='Icon Icon-delete' onClick={onDelete}><TfiClose /></span>
        </li>
    
  )
}

export  {TodoItem}