import React from "react";
import Weather from "./Weather.js";


import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
        <h1>Weather App</h1>
        <Weather />

        <footer class="signature">
            Coded by <a href="https://github.com/OlenaBabko/Weather-App-React"
              target="_blank" rel="noopener noreferrer">Olena Babko</a>
        </footer>
      </div>
    </div>
    
  );
}
