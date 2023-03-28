import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast() {
    return (
    <div className="DailyForecast">
        <div className="row">
            <div className="col">
                <div className="Forecast_Day">Day 1</div>
                <WeatherIcon code="01d" size={36} />
                <div className="Forecast_Temperature">
                    <span className="Forecast_Temperature_min">1°</span>
                    <span className="Forecast_Temperature_max">10°</span>
                </div>
            </div>
        </div>
    </div>
    );
}