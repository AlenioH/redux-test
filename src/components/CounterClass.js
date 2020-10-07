// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// export default function Counter() {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.count);
//   //so the point of selector is to pick out certain parts of the state??
//   function increase() {
//     dispatch({ type: 'INCREASE_COUNT' });
//   }
//   // function decrease() {
//   //   dispatch({ type: 'DECREASE_COUNT' });
//   // }

//   return (
//     <div>
//       <button onClick={increase}> + </button>
//       <p>{counter}</p>
//       <button onClick={() => dispatch({ type: 'DECREASE_COUNT' })}> - </button>
//     </div>
//   );
// }

import React from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../Actions';

class Counter extends React.Component {
  static mapStateToProps = (state) => {
    return {
      count: state.counter.count,
    };
  };
  handleIncrease = () => {
    this.props.increaseCount();
  };
  handleDecrease = () => {
    this.props.decreaseCount();
  };
  render() {
    console.log('this', this);
    return (
      <div>
        <p>Counter class comp</p>
        <button onClick={this.handleIncrease}> + </button>
        <p>{this.props.count}</p>
        <button onClick={this.handleDecrease}> - </button>{' '}
      </div>
    );
  }
}

export default connect(Counter.mapStateToProps, {
  increaseCount,
  decreaseCount,
})(Counter);
