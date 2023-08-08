
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../Components/TodoContex';


// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', id:1, completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', id:2, completed: false },
//   { text: 'Llorar con la Llorona', id:3, completed: false },
//   { text: 'LALALALALA', id:4, completed: false },
//   { text: 'Usar estados derivados', id:5, completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));



function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
  
}


export default App;