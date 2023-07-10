import '../TodoCounter.css'
function TodoCounter({total,completed}) {
  return (
    <div className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> TODOs </div>
  )
}

export  {TodoCounter}