
import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';


// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));



function App() {
  
  const {
    item: todos, 
    saveItem: setTotal,
    error,
    loading
  } = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length

  const searchedValue = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    }
  )



  // const saveTodos = (newTodos) => {
  //   localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    
  //   setTotal(newTodos);
  // };


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

  return (
    <AppUI
    error={error}
    loading={loading}
    todos={todos}
    searchedValue={searchedValue}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  )
  
}


export default App;