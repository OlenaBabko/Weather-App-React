import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDay(props) {
    const [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function changeCelsiusFahrenheit(temperature) {
        let roundedTemperature = 0;
        if (unit === "celsius") {
          roundedTemperature = Math.round(temperature);
        } else {
          roundedTemperature = Math.round((temperature * 9) / 5 + 32);
        }
        return `${roundedTemperature}`;
    }   
    // function minTemperature() {
    //     let temperature = Math.round(props.data.temp.min);
    //     return `${temperature}`;
    // }
    // function maxTemperature() {
    //     let temperature = Math.round(props.data.temp.max);
    //     return `${temperature}`;
    // }
    


    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        return days[day];
    }
    
    return (
        <div className="forecastDays">
            <div className="Forecast_Day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="Forecast_Temperature">
                {/* <span className="Forecast_Temperature_min">{minTemperature()}°</span>
                <span className="Forecast_Temperature_max">{maxTemperature()}°</span> */}
                <span className="Forecast_Temperature_min">{changeCelsiusFahrenheit(props.data.temp.min)}°</span>
                <span className="Forecast_Temperature_max">{changeCelsiusFahrenheit(props.data.temp.max)}°</span>
            </div>
        </div>
    );
}