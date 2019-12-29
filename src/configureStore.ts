import { createStore, combineReducers } from 'redux';
import { todosReducer } from './reducers'

const rootReducer = combineReducers({
  todos: todosReducer,
  tests: todosReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
