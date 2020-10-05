import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count);
  function increase() {
    dispatch({ type: 'INCREASE_COUNT' });
  }
  function decrease() {
    dispatch({ type: 'DECREASE_COUNT' });
  }
  return (
    <div>
      <button onClick={increase}> + </button>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: 'DECREASE_COUNT' })}> - </button>
    </div>
  );
}
