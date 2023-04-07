import React from "react";
import DateDisplay from "./DateDisplay";
import WeatherIcon from "./WeatherIcon";
import Celsius from "./Celsius";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row ">
                <div className="col-7">
                    <h2 className="d-flex city">{props.data.city}</h2>
                </div>
                <ul className="col-5 ">
                    <li><DateDisplay date={props.data.date} /></li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
            </div>
            <div className="row mt-3">
                <div className="col-7 main">
                    <div className="d-flex ms-2 big">
                        <WeatherIcon code={props.data.icon} size={56} />
                        <Celsius temperature={props.data.temperature}  unit={props.unit} setUnit={props.setUnit} />
                    </div>
                </div>
                <ul className="col-5 ">
                    <li>Feels Like: {Math.round(props.data.feelsLike)}°C</li>
                    <li>Humidity: {props.data.humidity} %</li>
                    <li>Wind: {props.data.wind} km/s</li>
                </ul>
            </div>
        </div>
    );
}