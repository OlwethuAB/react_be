import { useEffect, useRef, useState } from 'react';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './Todolist';
import { TodosContext } from '../context/TodosContext'
import useLocalStorage from '../hooks/useLocalStorage';
import '../reset.css';
import '../App.css';

function App() {
  const [name, setName] = useLocalStorage('name', '');
  const [filter, setFilter] = useState(''); 
 
  const nameInputEl = useRef(null);
  const [todos, setTodos] = useLocalStorage('todos', []);

  const [idForTodo , setIdForTodo] = useLocalStorage('idForTodo', 1);

  function todosFiltered() {
    if (filter === 'active') {
      return todos.filter(todo => !todo.isComplete);
    };
    if (filter === 'completed') {
      return todos.filter(todo => todo.isComplete); 
    };
    return todos;
  } 

  useEffect(() => {
    // console.log('use Effect running');
    // nameInputEl.current.focus()
    setName(JSON.parse(localStorage.getItem('name')) ?? '');   
    return function cleanup() {
      // console.log('cleaning up');
    }
  },);    

  function handleNameInput(event) {
    setName(event.target.value); 
   } 


  return (
    <TodosContext.Provider 
      value={{ todos, setTodos, idForTodo, setIdForTodo, todosFiltered, filter, setFilter}} 
    >
      {/* <div className="todo-app-container"> */}
        <div className='todo-app'>
          <div className='name-container'> 
            <h2>What is your name?</h2> 
            <form action="#" >
              <input type="text" ref={nameInputEl} className="todo-input" placeholder="What is your name?" value={name} onChange={handleNameInput}/>
            </form>                                                                
            { name && <p className="name-label">HEY, {name} !</p>}
          </div>
        </div>
        <div className="todo-app"> 
          <h2>Todo App</h2>
          <TodoForm />  


          { todos.length > 0 ? <TodoList/> : <NoTodos/>}
        </div>
      {/* </div> */}
     </TodosContext.Provider>
  );
}

export default App ;