import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import counterReducer from './reducers/counterReducer';
const store = createStore(
  counterReducer,
  typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
); //takes reducer function as param
//store is an object that connects actions and reducers
//by including the provider store becomes available for components => components must be wrapped in provider
//--- create action types => actions are JS objects => send data from app to store
//write the reducer function => pure function => with initial state and cases and default state
function App() {
  console.log('store state', store.getState());

  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
