import React from "react";
import { CounterProvider } from "./context/counterContextProvider";
import FirstComponent from "./FirstComponent";

const App = () => {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Counter App</h1>
        <FirstComponent />
      </div>
    </CounterProvider>
  );
};
export default App;
