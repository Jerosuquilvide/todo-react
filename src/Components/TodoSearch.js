import React from 'react'
import '../TodoSearch.css'
function TodoSearch() {
  let [searchValue, setSearchValue] = React.useState('');
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