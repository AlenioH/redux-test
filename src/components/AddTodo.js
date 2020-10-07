import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO } from '../Actions/actionTypes';

export default function AddTodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const [input, setInput] = useState('');
  const [id, setId] = useState(0);

  //how does id get there actually???
  function handleAdd(e) {
    e.preventDefault();
    setId(id + 1);
    dispatch({ type: ADD_TODO, payload: { id, content: input } });
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
