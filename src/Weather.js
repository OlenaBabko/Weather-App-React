import React, {useState} from "react";
import DateDisplay from "./DateDisplay";
import "./Weather.css";
import axios from 'axios';


export default function Weather(props) {
    // const [loaded, setLoaded] = useState(false);
    const [weatherData, setWeatherData] = useState({ loaded: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            loaded: true,
            city: response.data.name,
            date: new Date(response.data.dt *1000),
            description: response.data.weather[0].description,
            // iconUrl: ,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        });
    }
    
    if (weatherData.loaded) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Your city..." className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100"/>
                        </div>
                    </div>
                </form>
    
    
                <h1>{weatherData.city}</h1>
    
                <ul>
                    <li><DateDisplay date={weatherData.date} /></li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
    
                <div className="row mt-3">
                    <div className="col-8">
                    
                        <div className="clearfix">
                            <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
                            
                            <span className="temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="units">°C</span>
                               
                        </div>
                        
                        {/* <div className="clearfix">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg==" alt="Mostly Cloudy" className="float-left" />
                            <div className="float-left">
                                <span className="temperature">12</span>
                                <span className="units">°C</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-4">
                        <ul>
                            {/* <li>Precipitation: 15%</li> */}
                            <li>Humidity: {weatherData.humidity} %</li>
                            <li>Wind: {weatherData.wind} km/s</li>
                        </ul>
                    </div>
                </div>
    
                <div>
                </div>
    
            </div>
        );

    } else {
        // let city = "Kyiv";
        let apiKey = "be60748992fab0f5da8162563fb21245";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }    
}