import { TodoCounter } from '../Components/TodoCounter/index';
import { TodoSearch } from '../Components/TodoSearch/index';
import { TodoList } from '../Components/TodoList/index';
import { TodoItem } from '../Components/TodoItem/index';
import { TodoButton } from '../Components/TodoButton/index';
import { TodosEmpty } from '../Components/TodosEmpty';
import { TodosError } from '../Components/TodosError';
import { TodosLoading } from '../Components/TodosLoading';
import { TodoContext } from '../Components/TodoContex';
import { Modal } from '../Components/TodoModal';
import React from 'react';

function AppUI( ) {
    const {
      loading,
      error,
      searchedValue,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      updateModal
    } = React.useContext(TodoContext);
    return (
        <>
        <TodoCounter />
        <TodoSearch  />
        
            <TodoList>
              { loading && <TodosLoading/>}
              { error && <TodosError/>}
              {(!error && searchedValue.length < 0) && <TodosEmpty/> }
              {
                searchedValue.map(todo => (
                  <TodoItem key={todo.id} text={todo.text} completed={todo.completed} 
                    onComplete={() => completeTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                  />
                ))
              }
          </TodoList>
         
        
        <TodoButton onUpdate={() => updateModal()}/>

        { openModal && (
          <Modal>
          </Modal>
          )}
        </>
      );
}

export { AppUI }