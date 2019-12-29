import React from 'react'
import { bindActionCreators, Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as TodoActionCreators from '../actions';
import { AppState } from '../configureStore';
import { Todo } from '../types/Todo';

const TodosList = () => {
  const todos = useSelector((state: AppState): Todo[]  => state.todos);
  // Get dispatch function
  const dispatch: Dispatch = useDispatch();
  const boundActionCreators = bindActionCreators(TodoActionCreators, dispatch);

  const toggleTodo = id => boundActionCreators.toggleTodoAction(id);
  const deleteTodo = id => boundActionCreators.deleteTodoAction(id);

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
