import { Todo } from './types/Todo';
import { AppActions } from './types/actions';

export const addTodoAction = (todo: Todo): AppActions => ({
  type: 'ADD_TODO',
  todo
})

export const toggleTodoAction = (id: string): AppActions => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodoAction = (id: string): AppActions => ({
  type: 'DELETE_TODO',
  id
})
