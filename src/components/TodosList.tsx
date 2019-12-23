import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../redux';

const TodosList = () => {
  const todos = useSelector((state: any) => state.todos);
  // Get dispatch function
  const dispatch = useDispatch();
  const toggleTodo = id => dispatch(toggleTodoAction(id));
  const deleteTodo = id => dispatch(deleteTodoAction(id));

  console.log('Im here', todos);
  return (
    <ul>
      {todos.map(todo => (
        <li>
          <p>
            Todo: {todo.text}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
          </p>
          <button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
        </li>
      ))}
    </ul>
  )
}

export default TodosList;
