import React from "react";
import DateDisplay from "./DateDisplay";
import WeatherIcon from "./WeatherIcon";
import Celsius from "./Celsius";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            {/* <div className="d-flex">
                <WeatherIcon code={props.data.icon} size={46} />
                <Celsius celsius={props.data.temperature} />
                
            </div>
            <h1>{props.data.city}</h1> */}



            {/* <div className="row mt-3">
                <div className="col-4">
                    <div className="d-flex">
                        <WeatherIcon code={props.data.icon} size={46} />
                        <Celsius celsius={props.data.temperature} />
                    </div>
                </div>
                <div className="col-4">
                    <h1>{props.data.city}</h1>
                </div>
            </div> */}




    
            {/* <ul className="text-center">
                <li><DateDisplay date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul> */}


            <div className="row ">
                <div className="col-7">
                    <div className="d-flex">
                        <h1>{props.data.city}</h1>
                    </div>
                </div>
                <ul className="col-5 ">
                    <li><DateDisplay date={props.data.date} /></li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
            </div>
            <div className="row mt-3">
                <div className="col-7">
                    <div className="d-flex">
                        <WeatherIcon code={props.data.icon} size={46} />
                        <Celsius celsius={props.data.temperature} />
                    </div>
                </div>
                <ul className="col-5 ">
                    {/* <li>Precipitation: 15%</li> */}
                    <li>Feels Like: {Math.round(props.data.feelsLike)}°C</li>
                    <li>Humidity: {props.data.humidity} %</li>
                    <li>Wind: {props.data.wind} km/s</li>
                </ul>
            </div>
        </div>
    );
}