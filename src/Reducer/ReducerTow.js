import React, { useReducer } from "react";

const ReducerTwo = () => {
  const initialState = {
    firstCounter: 0,
    secondCounter: 10,

  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {firstCounter: state.firstCounter + action.value};
      case "decrement":
        return {firstCounter: state.firstCounter - action.value};
      case "rest":
        return initialState;
      default:
        return state;
    }
  };

  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div> Count : {counter.firstCounter}</div>
      <button onClick={() => dispatch({type: "increment",value: 1 })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>decrement</button>

      <button onClick={() => dispatch({ type: "increment",value: 5 })}>increment 5</button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>decrement 5</button>


      <button onClick={() => dispatch({ type: "rest" })}>rest</button>

      <div></div>
    </div>
  );
};

export default ReducerTwo;
