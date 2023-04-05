import React from "react";
import Weather from "./Weather.js";


import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
              
        <h1>Weather Forecast in your pocket</h1>
        
        <Weather defaultCity="Kyiv"/>

        <footer className="row">
          <div className="signature col-9">
            Coded by <a href="https://github.com/OlenaBabko/Weather-App-React"
              target="_blank" rel="noopener noreferrer">Olena Babko</a>
          </div>
          <div className="Ukr col-3">
            <p>Slava Ukraini!</p>
          </div>
        </footer>
      </div>
    </div>
    
  );
}
