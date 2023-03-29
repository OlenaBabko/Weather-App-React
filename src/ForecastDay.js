import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDay(props) {
    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`;
    }
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        return days[day];
    }
    
    return (
        <div>
            <div className="Forecast_Day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="Forecast_Temperature">
                <span className="Forecast_Temperature_min">{minTemperature()}°</span>
                <span className="Forecast_Temperature_max">{maxTemperature()}°</span>
            </div>
        </div>
    );
}