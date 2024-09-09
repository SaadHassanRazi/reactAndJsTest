import React, { useContext } from "react";
import CounterContext from "./context/counterContext";
import NestedComponent from "./NestedComponent";

const FirstComponent = () => {
  return (
    <div>
      <NestedComponent />
    </div>
  );
};
export default FirstComponent;
