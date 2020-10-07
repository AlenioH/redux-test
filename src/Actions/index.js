import { INCREASE_COUNT, DECREASE_COUNT, ADD_TODO } from './actionTypes';

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});
export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

let nextTodoId = 0;
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId + 1,
    content,
  },
});
