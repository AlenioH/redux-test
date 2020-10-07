import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../Actions';
import { ADD_TODO } from '../Actions/actionTypes';

export default function AddTodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const [input, setInput] = useState('');
  const [id, setId] = useState(0);

  function handleAdd(e) {
    e.preventDefault();

    dispatch({ type: ADD_TODO, payload: { content: input } });
    // dispatch(addTodo({ content: input }));
    setInput('');
  }
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button>add todo</button>
      </form>
      <ul>
        {todos.map((item) => {
          return <li key={item.id}>{item.content}</li>;
        })}
      </ul>
    </div>
  );
}
