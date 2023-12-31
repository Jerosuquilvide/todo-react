import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

const {
    item: todos, 
    saveItem: setTotal,
    error,
    loading
  } = useLocalStorage('TODOS_V1',[]);
  
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  var completedTodos = 0
  var searchedValue = []
  if(typeof todos !== 'string'){
    completedTodos = todos.filter(
      todo => !!todo.completed
    ).length;

    searchedValue = todos.filter(
      (todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
      }
    )
  }
  

  const addTodo = (value) => {
    const newTodos = [...todos];
    newTodos.push({
      id: todos.length+1,
      text: value,
      completed: false
    })
    setTotal(newTodos)
  };


  const  completeTodo = (id) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) =>  todo.id === id
      );
      if(newTodos[todoIndex].completed === true){
        newTodos[todoIndex].completed = false;
      }else{
        newTodos[todoIndex].completed = true;
      }
      setTotal(newTodos);
      localStorage.setItem('TODOS_V1',JSON.stringify(newTodos))
  };


  const deleteTodo = (id) => {
    const newDelTodos = todos.filter(
        todo => todo.id !== id
      )

    setTotal(newDelTodos)
    localStorage.setItem('TODOS_V1',JSON.stringify(newDelTodos))  
  }

  const updateModal = () => {
    if(openModal){
      setOpenModal(false)
    }else{
      setOpenModal(true)
    }
  }
  
  
  return (
    <TodoContext.Provider value={{ // Exponer datos "globales" a la app
      loading,
      error,
      completedTodos,
      todos,
      searchValue,
      setSearchValue,
      searchedValue,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      updateModal,
      addTodo
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };