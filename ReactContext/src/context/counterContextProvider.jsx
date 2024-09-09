import { useState } from "react";
import CounterContext from "./counterContext";

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
   
    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);
    return (
     
      <CounterContext.Provider value={{ count, increment, decrement }}>
        {children}
      </CounterContext.Provider>
    );
  };

  export default CounterContext;