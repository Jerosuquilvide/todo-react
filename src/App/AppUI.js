import { TodoCounter } from '../Components/TodoCounter/index';
import { TodoSearch } from '../Components/TodoSearch/index';
import { TodoList } from '../Components/TodoList/index';
import { TodoItem } from '../Components/TodoItem/index';
import { TodoButton } from '../Components/TodoButton/index';


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
          { loading && <p>Cargando...</p>}
          { error && <p>¡ Error al cargar !</p>}
          {(!error && searchedValue.length < 0) && <p>¡ Crea tu primer TODO !</p> }
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