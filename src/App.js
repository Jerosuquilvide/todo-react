import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { TodoButton } from './Components/TodoButton';


const listOfTodos = [
  {id:1, text:'Lorem ipsun 1', completed:false},
  {id:2, text:'Lorem ipsun 2', completed:false},
  {id:3, text:'Lorem ipsun 3', completed:true},
  {id:4, text:'Lorem ipsun 4', completed:false},
  {id:5, text:'Lorem ipsun 5', completed:false},
  {id:6, text:'Lorem ipsun 6', completed:true},
]

function App() {
  return (
    <>
    <TodoCounter total={25} completed={10}/>
    <TodoSearch />

    <TodoList>
      {
        listOfTodos.map(todo => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>
        ))
      }
    </TodoList>
    <TodoButton/>
    </>
  );
}





export default App;
