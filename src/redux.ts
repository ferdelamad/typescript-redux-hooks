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

//reducer
const todosReducer = (state, { type, todo, id }) => {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [ ...state.todos, todo]
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
