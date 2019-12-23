import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import './App.css';

import NewTodo from './components/NewTodo'
import TodosList from './components/TodosList'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App</h1>
        <NewTodo />
        <TodosList />
      </div>
    </Provider>
  );
}

export default App;
