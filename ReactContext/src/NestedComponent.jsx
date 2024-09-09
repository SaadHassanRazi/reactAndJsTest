import React, { useContext } from "react";
import SecondNestedComponent from "./SecondNestedComponent";
import CounterContext from "./context/counterContext";

const NestedComponent = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <div>
        3rd Level Nested Component
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <SecondNestedComponent />
    </div>
  );
};

export default NestedComponent;
