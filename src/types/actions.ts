import { Todo } from './Todo';

// Set regular const for actions
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// Create interfaces for the actions
export interface AddTodoAction {
  type: typeof ADD_TODO;
  todo: Todo;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  id: string;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: string;
}

// Aggregate all related actions for todos
export type TodoActionTypes =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction;

// Aggregate all action types of the App
// (all possibel actions in the app)
export type AppActions = TodoActionTypes;
