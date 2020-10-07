import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO } from '../Actions/actionTypes';

export default function AddTodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [input, setInput] = useState('');

  function handleAdd(e) {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: { id: 6666, content: input } });
  }
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input onChange={(e) => setInput(e.target.value)}></input>
        <button>add todo</button>
      </form>
    </div>
  );
}
