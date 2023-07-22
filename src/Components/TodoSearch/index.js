import React from 'react'
import './TodoSearch.css'
function TodoSearch({searchValue,setSearchValue}) {
  
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