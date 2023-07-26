import { TodoCounter } from '../Components/TodoCounter/index';
import { TodoSearch } from '../Components/TodoSearch/index';
import { TodoList } from '../Components/TodoList/index';
import { TodoItem } from '../Components/TodoItem/index';
import { TodoButton } from '../Components/TodoButton/index';
import { TodosEmpty } from '../Components/TodosEmpty';
import { TodosError } from '../Components/TodosError';
import { TodosSearch } from '../Components/TodoSearch/index';
import { TodosLoading } from '../Components/TodosLoading';

function AppUI({
    error,
    loading,
    todos,
    searchedValue,
    completedTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
}) {

    return (
        <>
        <TodoCounter total={todos.length} completed={completedTodos}/>
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
    
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
        <TodoButton/>
        </>
      );
}

export { AppUI }