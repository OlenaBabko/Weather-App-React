import React from "react";
import DateDisplay from "./DateDisplay";
import WeatherIcon from "./WeatherIcon";
import Celsius from "./Celsius";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
    
            <ul>
                <li><DateDisplay date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>

            <div className="row mt-3">
                <div className="col-8">
                    <div className="d-flex">
                        <WeatherIcon code={props.data.icon} />
                        <Celsius celsius={props.data.temperature} />
                    </div>
                </div>
                <div className="col-4">
                    <ul>
                        {/* <li>Precipitation: 15%</li> */}
                        <li>Humidity: {props.data.humidity} %</li>
                        <li>Wind: {props.data.wind} km/s</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}