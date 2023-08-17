import React from 'react';
import {Todo} from '../types.ts';
import {TodoItem} from "./TodoItem.tsx";

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>               // key parameter has not been defined, but used when call it.
            ))}
        </ul>
    );
};

export default TodoList;