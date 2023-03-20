import React from "react";
import Weather from "./Weather.js";


import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
        <h1>
          Glory to Ukraine!
        </h1>
        <Weather city="Kyiv" />

      </header>
    </div>
  );
}

export default App;
