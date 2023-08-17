import React from 'react';
import {Todo} from '../types.ts';

type TodoItemProp = {
    todo: Todo;
    toggleTodo: (id: string) => void;
};

export const TodoItem: React.FC<TodoItemProp> = ({todo, toggleTodo}) => {
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
                {todo.text}
            </label>
        </li>
    );
};


