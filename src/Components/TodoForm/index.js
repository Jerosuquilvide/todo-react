import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContex';
function TodoForm() {

  const {
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext)

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [busca, setBusca] = React.useState(false);
  const onChange = (event) => {
    var value = event.target.value;
    setNewTodoValue(value)
    setBusca(true)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false)
  }
  return (
    <>
        <form onSubmit={onSubmit}>
            <label>Crear nuevo Todo</label>
                <textarea placeholder="Insertar el TODO aqui" 
                  onChange={onChange}
                />
            <div className='TodoForm-Container'>
                <button type="button" onClick={onCancel} className='TodoFormButton TodoFormButton--Cancel'>Cancelar</button>
                {!busca &&  <button type='submit' className='TodoFormButton TodoFormButton--Add' disabled>Añadir
                  <div className='hoverEffect'><div></div></div>
                </button>}
                {busca &&  <button type='submit' className='TodoFormButton TodoFormButton--Add' >Añadir
                  <div className='hoverEffect'><div></div></div>
                </button>}

            </div>
        </form>
    </>
  )
  
}

export  {TodoForm}