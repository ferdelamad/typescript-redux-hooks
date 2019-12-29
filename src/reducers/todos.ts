import uuid from 'uuid/v4';
import { Todo } from '../types/Todo';
import { TodoActionTypes } from '../types/actions';

const initialState: Todo[] =  [
  {
    text: 'Go to the gym 💪',
    completed: false,
    id: uuid()
  },
  {
    text: 'Practice Typescript 🆒',
    completed: true,
    id: uuid()
  },
];

export const todosReducer = (state = initialState, action: TodoActionTypes): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
    default:
      return state;
  }
}
