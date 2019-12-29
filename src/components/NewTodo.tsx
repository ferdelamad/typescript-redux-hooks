import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { addTodoAction } from '../actions';

const NewTodo: React.FC<any> = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const addTodo = newTodo => dispatch(addTodoAction(newTodo));

  const handleChange = e => setNewTodo(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    addTodo({
      text: newTodo,
      completed: false,
      id: uuid()
    })

    //clear input
    setNewTodo('');
  }

  console.log('newTodo', newTodo);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New todo..."
        onChange={handleChange}
        value={newTodo}
      />
      <button type="submit">Add todo!</button>
    </form>
  )
}

export default NewTodo;
