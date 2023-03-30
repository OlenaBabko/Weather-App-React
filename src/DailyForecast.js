import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className="DailyForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 6) {                                //days to display
                            return (
                                <div className="col" key={index}>
                                    <ForecastDay data={dailyForecast} />
                                </div>
                            );
                        }
                    })}
                    
                    {/* <div className="col">
                        <ForecastDay data={forecast[1]} />
                    </div>
                    <div className="col">
                        <ForecastDay data={forecast[2]} />
                    </div>
                    <div className="col">
                        <ForecastDay data={forecast[3]} />
                    </div>
                    <div className="col">
                        <ForecastDay data={forecast[4]} />
                    </div> */}
                </div>
            </div>
        );

    } else {
        let lat = props.coordinates.lat;
        let lon = props.coordinates.lon;
        // let apiKey = "6d85a1od5b40aa0051a473016f5eet19";
        let apiKey = "e947cb2640f1db92e6a19005bc43b435";
        // let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        // let apiKey = "3dce9b1c66837262a25b3f448d354a76";
        // let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "loading...";
    }
}