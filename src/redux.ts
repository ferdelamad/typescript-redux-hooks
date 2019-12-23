import { createStore } from 'redux';
import uuid from 'uuid/v4';

const initialState = {
  todos: [
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
  ]
}

// interface Todo {
//   text: string,
//   id: number,
//   completed: boolean
// }

// interface State {
//   todos: Array<Todo>
// }

//reducer
const todosReducer = (state, { type, newTodo, id }) => {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [ ...state.todos, newTodo]
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== id )
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
      }
    default:
      return state;
  }
}

//actions
export const addTodoAction = newTodo => ({
  type: 'ADD_TODO',
  newTodo
})

export const toggleTodoAction = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodoAction = id => ({
  type: 'DELETE_TODO',
  id
})

export const store = createStore(
  todosReducer,
  initialState,
);
