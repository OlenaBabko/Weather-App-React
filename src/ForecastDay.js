import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDay(props) {
    function minTemperature() {
        let minTemperature = Math.round(props.data.temp.min);           //
        if (props.unit !== "celsius") {
            minTemperature = Math.round((minTemperature * 9) / 5 +32)
        }
        return `${minTemperature}`;
    }
    function maxTemperature() {
        let maxTemperature = Math.round(props.data.temp.max);           //
        if (props.unit !== "celsius") {
            maxTemperature = Math.round((maxTemperature * 9) / 5 +32)
        }
        return `${maxTemperature}`;
    }
    
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
                <span className="Forecast_Temperature_min">{minTemperature()}°</span>
                <span className="Forecast_Temperature_max">{maxTemperature()}°</span>
                {/* <span className="Forecast_Temperature_min">{changeCelsiusFahrenheit(props.data.temp.min)}°</span>
                <span className="Forecast_Temperature_max">{changeCelsiusFahrenheit(props.data.temp.max)}°</span> */}
            </div>
        </div>
    );
}