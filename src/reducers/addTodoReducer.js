import { ADD_TODO } from '../Actions/actionTypes';

const initialState = { todos: [] };

export default function addTodoReducer(state = initialState, action) {
  // debugger;
  switch (action.type) {
    case ADD_TODO:
      const id = action.payload.id;
      const content = action.payload.content;
      return {
        ...state,
        todos: [...state.todos, { id, content }],
      };
    default:
      return state;
  }
}
