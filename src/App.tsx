import {SyntheticEvent, useRef, useState} from 'react'
import TodoList from "./components/TodoList.tsx";
import { Todo } from './types.ts';

import {v4 as uuidv4} from 'uuid'; // Had to download uuid
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const toggleTodo = (selectedTodoId: string) => {
      const newTodos = todos.map (todo => todo.id === selectedTodoId ? {...todo, completed: !todo.completed } : todo );
      setTodos(newTodos);
  };

  const addTodo = (text: string ) => {
      const newTodo: Todo = {id: uuidv4(), text: text, completed: false};
      setTodos([...todos, newTodo]);
  }

  const handleClick = (e: SyntheticEvent) => {
      console.log(e);
      e.preventDefault();

      if(!todoInputRef.current) return;
      addTodo(todoInputRef.current.value);
      todoInputRef.current.value = '';
  }

  return (
    <div className = "App">
        <h1>Todo List</h1>
        <form>
            <input name="todo" type="text" ref={todoInputRef}/>
            <button type='submit'
                    onClick={handleClick}>Add Todo
            </button>
        </form>
        <TodoList todos={todos} toggleTodo = {toggleTodo}/>

    </div>
  );
}

export default App
