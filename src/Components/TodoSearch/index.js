import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContex'
function TodoSearch() {
  const {searchValue,setSearchValue} = React.useContext(TodoContext)
  return (
    <input className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
        console.log()
      }}
    >

    </input>
  )
}

export  {TodoSearch}