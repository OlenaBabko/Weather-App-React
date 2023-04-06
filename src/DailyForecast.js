import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);    //make index+1 (.slice(1,7));
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
        return (
            <div className="DailyForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index > 0 && index < 7) {                                // days to display
                            return (
                                <div className="col container" key={index}>
                                    <ForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
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
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        // let apiKey = "6d85a1od5b40aa0051a473016f5eet19";
        let apiKey = "e947cb2640f1db92e6a19005bc43b435";
        let units = "metric";
        // let units = props.unit;
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
        // let apiKey = "3dce9b1c66837262a25b3f448d354a76";
        // let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "loading...";
    }
}