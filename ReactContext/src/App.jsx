import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./frameworkUi/Router";
import { AuthProvider } from "./useCases/context/AuthProvider";
import WaveAnimation from "./interface/components/WaveAnimation";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="main-container">
          <WaveAnimation />
          <div className="content">
            <Router />
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default App;
