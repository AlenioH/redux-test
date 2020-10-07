import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  console.log('state', counter);
  //so the point of selector is to pick out certain parts of the state??
  function increase() {
    dispatch({ type: 'INCREASE_COUNT' });
  }
  // function decrease() {
  //   dispatch({ type: 'DECREASE_COUNT' });
  // }

  return (
    <div>
      <p>Counter Functional</p>
      <button onClick={increase}> + </button>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: 'DECREASE_COUNT' })}> - </button>
    </div>
  );
}
